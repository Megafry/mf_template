<?php

/***************************************************************
 * Extension Manager/Repository config file for ext: "mf_template"
 *
 *
 * Manual updates:
 * Only the data in the array - anything else is removed by next write.
 * "version" and "dependencies" must not be touched!
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array(
	'title' => 'Megafry Template',
	'description' => 'The template ext',
	'category' => 'misc',
	'author' => 'Megafry',
	'author_email' => 'eugene.fritz@hotmail.com',
	'state' => 'stable',
	'internal' => '',
	'uploadfolder' => '0',
	'createDirs' => '',
	'clearCacheOnLoad' => 0,
	'version' => '0.0.1-beta',
	'constraints' => array(
		'depends' => array(
			'typo3' => '7.6.0-9.5.99',
			'extbase' => '',
      'fluid' => '',
		),
		'conflicts' => array(
		),
		'suggests' => array(
		),
	),
);
