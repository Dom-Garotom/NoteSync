import PageTemplate from '@/src/components/template/PageTemplate'
import React, { useState } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNotes } from '@/src/hooks/useNotes'
import { HighlightedText } from '@/src/components/atoms/HighlightedText'
import { themeColors } from '@/src/styles/colors'
import { SearchX } from 'lucide-react-native'
import { StyledSearchPage } from './style'
import { useRouter } from 'expo-router'


const Search: React.FC = () => {
    const { notes } = useNotes()
    const { push } = useRouter()
    const [search, setSearch] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const filteredNotes = notes.filter(
        note =>
            note.name.toLowerCase().includes(search.toLowerCase()) ||
            note.content.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <PageTemplate style={{ gap: 10 }}>
            {isFocused === false &&
                <View style={StyledSearchPage.header}>
                    <Text style={StyledSearchPage.title}>Buscar por notas</Text>
                    <Text style={StyledSearchPage.subTitle}>Busque por alguma nota que seja do seu interesse no momento.</Text>
                </View>
            }

            <TextInput
                style={StyledSearchPage.input}
                placeholder="Digite para buscar..."
                value={search}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChangeText={setSearch}
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="while-editing"
            />

            {isFocused === false && filteredNotes.length > 0 &&
                <Text style={StyledSearchPage.resultsTitle}>Resultados da sua pesquisa</Text>
            }

            <FlatList
                data={search.length > 0 ? filteredNotes : []}
                keyExtractor={item => item.id.toString()}
                scrollEnabled={false}
                keyboardShouldPersistTaps="handled"

                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => push(`(notes)/file/${item.id}`)}
                    style={StyledSearchPage.noteContainer}
                    >
                        <Text style={StyledSearchPage.noteTitle}>
                            <HighlightedText text={item.name} highlight={search} />
                        </Text>
                        <Text
                            style={StyledSearchPage.noteContent}
                            numberOfLines={2}
                            ellipsizeMode="tail"
                        >
                            <HighlightedText text={item.content} highlight={search} />
                        </Text>
                    </TouchableOpacity>
                )}
                ListEmptyComponent={() => (
                    <View style={StyledSearchPage.fallbackContainer}>
                        <View style={StyledSearchPage.notificationIcon}>
                            <SearchX color={themeColors.background.base} />
                        </View>
                        <Text style={[StyledSearchPage.title, { textAlign: 'center', fontSize: 20 }]}>Nenhum resultado encontrado</Text>
                        <Text style={[StyledSearchPage.subTitle, { textAlign: 'center' }]}>
                            Sua pesquisa não gerou nenhum resultado na busca pelas suas notas.
                        </Text>
                    </View>
                )}
            />
        </PageTemplate>
    )
}

export default Search