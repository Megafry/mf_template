<?php
defined('TYPO3_MODE') or die();

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
    'mf_template',
    'Configuration/TsConfig/Setup.ts',
    'Template');
