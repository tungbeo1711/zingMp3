const durationList = [
	[
		'04:30',
		'03:18',
		'04:33',
		'04:20',
		'03:24',
		'06:05',
		'03:55',
		'03:22',
		'03:44',
		'03:08',
		'04:15',
		'03:53',
		'04:07',
		'04:13',
		'04:42',
		'04:08',
		'03:17',
		'04:05',
		'03:11',
		'04:16',
		'04:04',
	],
	[
		'04:02',
		'02:57',
		'03:21',
		'14:50',
		'03:57',
		'04:21',
		'04:45',
		'03:06',
		'04:46',
		'05:02',
		'04:24',
		'04:27',
		'08:26',
		'04:48',
		'03:01',
		'03:25',
		'04:24',
		'03:19',
		'03:43',
		'03:34',
	],
	[
		'03:16',
		'03:21',
		'02:38',
		'03:28',
		'03:48',
		'03:32',
		'03:04',
		'03:37',
		'03:31',
		'03:11',
		'03:28',
		'03:17',
		'02:37',
		'03:28',
		'03:16',
		'05:32',
	],
	[
		'03:25',
		'04:45',
		'03:14',
		'04:15',
		'02:54',
		'02:51',
		'02:01',
		'04:28',
		'03:23',
		'04:04',
		'02:45',
		'03:57',
		'03:21',
		'02:28',
		'02:34',
		'04:03',
		'03:56',
	],
];

const DURATION_STORAGE_KEY = 'VIK_DURATION';

localStorage.setItem(DURATION_STORAGE_KEY, JSON.stringify(durationList));