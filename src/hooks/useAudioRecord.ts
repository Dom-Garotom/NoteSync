import { Audio } from 'expo-av';
import { useCallback, useEffect, useState } from 'react';

export function useAudioRecorder() {
	const [recording, setRecording] = useState<Audio.Recording | null>(null);
	const [sound, setSound] = useState<Audio.Sound | null>(null);
	const [audioUri, setAudioUri] = useState<string | null>(null);
	const [isRecording, setIsRecording] = useState(false);

	useEffect(() => {
		return () => {
			if (sound) {
				sound.unloadAsync();
			}
		};
	}, [sound]);

	const startRecording = useCallback(async () => {
		try {
			const permission = await Audio.requestPermissionsAsync();
			if (permission.status !== 'granted') {
				throw new Error('Permissão para acessar o microfone negada.');
			}

			await Audio.setAudioModeAsync({
				allowsRecordingIOS: true,
				playsInSilentModeIOS: true,
			});

			// biome-ignore lint/nursery/noShadow: <explanation>
			const { recording } = await Audio.Recording.createAsync(
				Audio.RecordingOptionsPresets.HIGH_QUALITY,
			);

			setRecording(recording);
			setIsRecording(true);
		} catch (err) {
			// biome-ignore lint/suspicious/noConsole: <explanation>
			console.error('Erro ao iniciar gravação:', err);
		}
	}, []);

	const stopRecording = useCallback(async () => {
		if (!recording) {
			return;
		}

		try {
			await recording.stopAndUnloadAsync();
			const uri = recording.getURI();

			setAudioUri(uri);
			setRecording(null);
			setIsRecording(false);

			return uri;
		} catch (err) {
			// biome-ignore lint/suspicious/noConsole: <explanation>
			console.error('Erro ao parar gravação:', err);
		}
	}, [recording]);

	const playAudio = useCallback(async (audioUri: string) => {
		try {
			// biome-ignore lint/nursery/noShadow: <explanation>
			const { sound } = await Audio.Sound.createAsync({ uri: audioUri });
			setSound(sound);

			await sound.playAsync();
		} catch (err) {
			// biome-ignore lint/suspicious/noConsole: <explanation>
			console.error('Erro ao reproduzir áudio:', err);
		}
	}, []);

	return {
		isRecording,
		audioUri,
		startRecording,
		stopRecording,
		playAudio,
	};
}
