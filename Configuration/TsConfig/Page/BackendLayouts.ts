mod.web_layout.BackendLayouts {
  BeLayout1 {
    title = BE-layout Start Page
    config {
      backend_layout {
        colCount = 1
        rowCount = 2
		rows {
			1 {
				columns {
					1 {
						name = Content
						colPos = 0
					}
				}
			}
			2 {
				columns {
					1 {
						name = Footer
						colPos = 4
					}
				}
			}
		}
      }

    }
    icon = EXT:mf_template/Resources/Public/Icons/BeLayout1.svg
  }
  BeLayout2 < .BeLayout1
  BeLayout2 {
  	title = BE-layout Sub Page

  	config.backend_layout {
  		rowCount = 1

  		rows {
  			2 >
  		}
  	}
  	icon = EXT:mf_template/Resources/Public/Icons/BeLayout2.svg
  }

}
