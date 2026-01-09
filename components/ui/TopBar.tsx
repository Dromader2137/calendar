'use client'

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useTheme } from 'next-themes';

export default function TopBar() {
	const { theme, setTheme } = useTheme()

	return (
		<div className="flex flex-row items-center w-full h-16 bg-(--bg-muted)">
			<button onClick={() => theme == "dark" ? setTheme("light") : setTheme("dark")}>
				<DarkModeOutlinedIcon className='ml-4' />
			</button>
		</div>
	);
}
