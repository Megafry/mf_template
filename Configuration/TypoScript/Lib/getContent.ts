lib.getContent = CONTENT
lib.getContent {
	table = tt_content
	select {
		 orderBy = sorting
		 where.wrap = colPos = |
		 where.data = field:colPos
		 #includeRecordsWithoutDefaultTranslation = 1
	}
}

lib.getFooter < lib.getContent
lib.getFooter {
	wrap = <div id="footer">|</div>
	select.where >
	select.where = colPos = 4

	slide = -1
}
