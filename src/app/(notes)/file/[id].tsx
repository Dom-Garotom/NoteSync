import PageTemplate from '@/src/components/template/PageTemplate';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, BookOpen, MoreVertical, Pencil } from 'lucide-react-native';
import React, { useState, useEffect } from 'react';
import { ImageBackground, Text, TouchableOpacity, View, TextInput } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { styles } from './style';
import { markdownStyles } from './markdownStyles';
import { useNotes } from '@/src/hooks/useNotes';
import { themeColors } from '@/src/styles/colors';

const File: React.FC = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
    const { notes, updateNote } = useNotes();
    const { back } = useRouter();

    const filteredNotes = notes.find(note => note.id === Number(id));

    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState('');
    const [titleContent, setTitleContent] = useState('');

    useEffect(() => {
        if (filteredNotes) {
            setContent(filteredNotes.content || '');
            setTitleContent(filteredNotes.name || '');
        }
    }, [filteredNotes]);

    const toggleEdit = () => {
        setIsEditing(prev => !prev);
    };

    const saveNote = async () => {
        await updateNote(Number(id), titleContent, content, 2)
        back()
    }

    return (
        <>
            <ImageBackground
                source={{
                    uri: 'https://c4.wallpaperflare.com/wallpaper/187/931/815/city-game-sky-grand-theft-auto-v-gta-v-hd-wallpaper-preview.jpg',
                }}
                style={styles.cover}
                imageStyle={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
            >
                <View style={styles.overlay} />
                {isEditing ? (
                    <TextInput
                        style={styles.title}
                        value={titleContent}
                        onChangeText={setTitleContent}
                        placeholder="Digite o título..."
                        placeholderTextColor="#ffffff"
                    />
                ) : (
                    <Text style={styles.title}>{titleContent}</Text>
                )}
            </ImageBackground>

            <PageTemplate>
                <View style={styles.card}>
                    {isEditing ? (
                        <TextInput
                            style={{
                                minWidth: 320,
                                color: '#000000',
                                fontSize: 16,
                                textAlignVertical: 'top',
                            }}
                            multiline
                            value={content}
                            onChangeText={setContent}
                            placeholder="Digite o conteúdo..."
                            placeholderTextColor="#494545"
                        />
                    ) : (
                        <Markdown style={markdownStyles}>{content}</Markdown>
                    )}
                </View>
            </PageTemplate>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => saveNote()} style={styles.headerButton}>
                    <ArrowLeft size={24} color="#ffffff" />
                </TouchableOpacity>

                <View style={{ flex: 1 }} />

                <TouchableOpacity onPress={toggleEdit} style={styles.headerButton}>
                    {isEditing ? (
                        <BookOpen size={24} color={themeColors.accent.icons} />
                    ) : (
                        <Pencil size={24} color={themeColors.accent.icons} />
                    )}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => ''} style={styles.headerButton}>
                    <MoreVertical size={24} color="#ffffff" />
                </TouchableOpacity>
            </View>
        </>
    );
};

export default File;
