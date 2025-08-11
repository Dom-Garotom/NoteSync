import { useContext } from 'react';
import { DatabaseContext } from '../context/model/database';

export const useDatabase = () => {
	const context = useContext(DatabaseContext);

	if (!context) {
		throw new Error('useDatabase deve ser usado com o DatabaseProvider');
	}

	return context.db;
};
