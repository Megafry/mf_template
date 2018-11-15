lib.mainNav = HMENU
lib.mainNav {

# set in template
#wrap = <ul class="nav navbar-nav">|<ul>
	
	1 = TMENU
	1 {
	  expAll = 1
	  
	  NO.allWrap = <li>|</li>
	  NO.ATagTitle.field = abstract // description // title
	  
	  ACT = 1
	  ACT {
		wrapItemAndSub = <li class="active">|</li>
		ATagTitle.field = abstract // description // title
	  } 
	  
	  IFSUB = 1
	  IFSUB {
		before = <a href="#" class="dropdown-toggle" data-toggle="dropdown">
		after = <b class="caret"></b></a>
		doNotLinkIt = 1
		wrapItemAndSub = <li class="dropdown">|</li>
		ATagTitle.field = abstract // description // title
	  }
	  ACTIFSUB = 1
	  ACTIFSUB {
		before = <a href="#" class="dropdown-toggle" data-toggle="dropdown">
		after = <b class="caret"></b></a>
		doNotLinkIt = 1
		wrapItemAndSub = <li class="dropdown active">|</li>
		ATagTitle.field = abstract // description // title
	  }
	}
	2 = TMENU
	2 {
	  expAll = 1
	  
	  ACT = 1
	  ACT {
		wrapItemAndSub = <li class="active">|</li>
		ATagTitle.field = abstract // description // title
	  }
	  ACTIFSUB = 1
	  ACTIFSUB {
		wrapItemAndSub = |
		before = <li class="divider"></li><li class="nav-header">
		after = </li>
		doNotLinkIt = 1
		ATagTitle.field = abstract // description // title
	  } 
	  NO.allWrap = <li>|</li>
	  NO.ATagTitle.field = abstract // description // title
	  
	  IFSUB = 1
	  IFSUB {
		before = <li class="divider"></li><li class="nav-header">
		after = </li>
		doNotLinkIt = 1
		ATagTitle.field = abstract // description // title
	  } 
	  SPC = 1
	  SPC.allWrap = <li class="divider"></li><li class="nav-header">|</li>
	  
	  wrap = <ul class="dropdown-menu">|</ul>
	}
}


