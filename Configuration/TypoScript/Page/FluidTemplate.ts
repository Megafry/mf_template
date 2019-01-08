page {

	10 = FLUIDTEMPLATE
  10 {
      file = EXT:mf_template/Resources/Private/Templates/Main.html
      layoutRootPaths.0 = EXT:mf_template/Resources/Private/Layouts
      partialRootPaths.0 = EXT:mf_template/Resources/Private/Partials
      templateRootPaths.0 = EXT:mf_template/Resources/Private/Templates

      settings {

      }
      variables {

			}
			dataProcessing {
				30 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
				30 {
						special = language
						special.value = auto
						as = langmenu
				}
			}
  }
}
