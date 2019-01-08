lib.languageNav = HMENU
lib.languageNav {
   special = language
   special.value = auto

   stdWrap.dataWrap = languages_HMENU

   1 = TMENU
   1 {
     noBlur = 1
     NO = 1
     NO {
       linkWrap = <li>|</li>
     }
     ACT < .NO
     ACT {
       doNotLinkIt = 1
     }
    USERDEF1 < .ACT
    USERDEF2 < .ACT
   }

}
