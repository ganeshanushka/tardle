// Making a JavaScript object for the keyboard
let keys = {
    'q': '', 'w': '', 'e': '', 'r': '', 't': '', 'y': '', 'u': '', 'i': '', 'o': '', 'p': '', 'break': '',
    'a': '', 's': '', 'd': '', 'f': '', 'g': '', 'h': '', 'j': '', 'k': '', 'l': '', 'break2': '',
    'enter': '', 'z': '', 'x': '', 'c': '', 'v': '', 'b': '', 'n': '', 'm': '', '⌫': ''
  };

// Making an array list for the word bank
let word_list = [
// 2 letter words
'aa','ab','ad','ae','ag','ah','ai','al','am','an','ar','as','at','aw','ax','ay','ba','be','bi','bo','by','ch','da','de','di','do','ea','ed','ee','ef','eh','el','em','en','er','es','et','ew','ex','fa','fe','fy','gi','go','gu','ha','he','hi','hm','hq','id','if','in','io','is','it','ja','jo','ka','ki','ko','ky','la','li','lo','ma','me','mi','mm','mo','mu','my','na','ne','no','nu','ny','ob','od','oe','of','oh','oi','ok','om','on','oo','op','or','os','ou','ow','ox','oy','pa','pe','pi','po','qi','re','sh','si','so','st','ta','te','ti','to','ug','uh','um','un','up','ur','us','ut','we','wo','xi','xu','ya','ye','yo','yu','za','ze','zo','UL','Rj',

//3 letter words
'aah','aal','aas','aba','abo','abs','aby','ace','act','add','ado','ads','adz','aff','aft','aga','age','ago','ags','aha','ahi','ahs','aid','ail','aim','ain','air','ais','ait','aji','ala','alb','ale','all','alp','als','alt','ama','ami','amp','amu','ana','and','ane','ani','ant','any','ape','apo','app','apt','arb','arc','are','arf','ark','arm','ars','art','ash','ask','asp','ass','ate','att','auk','ava','ave','avo','awa','awe','awl','awn','axe','aye','ays','azo','baa','bad','bag','bah','bal','bam','ban','bap','bar','bas','bat','bay','bed','bee','beg','bel','ben','bes','bet','bey','bib','bid','big','bin','bio','bis','bit','biz','boa','bob','bod','bog','boo','bop','bos','bot','bow','box','boy','bra','bro','brr','bub','bud','bug','bum','bun','bur','bus','but','buy','bye','bys','cab','cad','caf','cal','cam','can','cap','car','cat','caw','cay','cee','cel','cep','chi','cig','cis','cob','cod','cog','col','con','coo','cop','cor','cos','cot','cow','cox','coy','coz','cru','cry','cub','cud','cue','cup','cur','cut','cuz','cwm','dab','dad','dag','dah','dak','dal','dam','dan','dap','das','daw','day','deb','dee','def','del','den','dep','dev','dew','dex','dey','dib','did','die','dif','dig','dim','din','dip','dis','dit','doc','doe','dog','doh','dol','dom','don','dor','dos','dot','dow','dry','dub','dud','due','dug','duh','dui','dum','dun','duo','dup','dye','ear','eat','eau','ebb','eco','ecu','edh','eds','eek','eel','eew','eff','efs','eft','egg','ego','eke','eld','elf','elk','ell','elm','els','eme','emo','ems','emu','end','eng','ens','eon','era','ere','erg','ern','err','ers','ess','est','eta','eth','eve','ewe','eye','fab','fad','fag','fah','fan','far','fas','fat','fax','fay','fed','fee','feh','fem','fen','fer','fes','fet','feu','few','fey','fez','fib','fid','fie','fig','fil','fin','fir','fit','fix','fiz','flu','fly','fob','foe','fog','foh','fon','foo','fop','for','fou','fox','foy','fro','fry','fub','fud','fug','fun','fur','gab','gad','gae','gag','gal','gam','gan','gap','gar','gas','gat','gay','ged','gee','gel','gem','gen','get','gey','ghi','gib','gid','gie','gif','gig','gin','gip','gis','git',
'gnu','goa','gob','god','goo','gor','gos','got','gox','goy','grr','gul','gum','gun','gut','guv','guy','gym','gyp','had','hae','hag','hah','haj','ham','hao','hap','has','hat','haw','hay','heh','hem','hen','hep','her','hes','het','hew','hex','hey','hic','hid','hie','him','hin','hip','his','hit','hmm','hob','hod','hoe','hog','hom','hon','hoo','hop','hos','hot','how','hoy','hub','hue','hug','huh','hum','hun','hup','hut','hyp','ice','ich','ick','icy','ids','iff','ifs','igg','ilk','ill','imp','ink','inn','ins','ion','ire','irk','ism','its','ivy','jab','jag','jam','jar','jaw','jay','jee','jet','jeu','jew','jib','jig','jin','job','joe','jog','jot','jow','joy','jug','jun','jus','jut','kab','kae','kaf','kas','kat','kay','kea','kef','keg','ken','kep','kex','key','khi','kid','kif','kin','kip','kir','kis','kit','koa','kob','koi','kop','kor','kos','kue','kye','lab','lac','lad','lag','lah','lam','lap','lar','las','lat','lav','law','lax','lay','lea','led','lee','leg','lei','lek','les','let','leu','lev','lex','ley','lez','lib','lid','lie','lin','lip','lis','lit','lob','log','loo','lop','lor','lot','low','lox','lud','lug','lum','lun','luv','lux','lye','mac','mad','mae','mag','mam','man','map','mar','mas','mat','maw','max','may','med','meg','meh','mel','mem','men','mes','met','mew','mho','mib','mic','mid','mig','mil','mim','mir','mis','mix','mmm','moa','mob','moc','mod','mog','moi','mol','mom','mon','moo','mop','mor','mos','mot','mow','mud','mug','mum','mun','mus','mut','mux','myc','nab','nae','nag','nah','nam','nan','nap','nav','naw','nay','neb','nee','neg','net','new','nib','nil','nim','nip','nit','nix','nob','nod','nog','noh','nom','noo','nor','nos','not','now','nth','nub','nug','nun','nus','nut','oaf','oak','oar','oat','oba','obe','obi','oca','och','oda','odd','ode','ods','oes','off','oft','ohm','oho','ohs','oik','oil','oka','oke','old','ole','oma','oms','one','ono','ons','oof','ooh','oot','opa','ope','ops','opt','ora','orb','orc','ore','org','ors','ort','ose','oud','our','out','ova','owe','owl','own','owt','oxo','oxy','pac','pad','pah','pak','pal','pam','pan','pap','par','pas','pat',
'paw','pax','pay','pea','pec','ped','pee','peg','peh','pen','pep','per','pes','pet','pew','phi','pho','pht','pia','pic','pie','pig','pin','pip','pis','pit','piu','pix','ply','pod','poh','poi','pol','pom','poo','pop','pos','pot','pow','pox','pro','pry','psi','pst','pub','pud','pug','pul','pun','pup','pur','pus','put','pya','pye','pyx','qat','qis','qua','rad','rag','rah','rai','raj','ram','ran','rap','ras','rat','raw','rax','ray','reb','rec','red','ree','ref','reg','rei','rem','rep','res','ret','rev','rex','rez','rho','ria','rib','rid','rif','rig','rim','rin','rip','rob','roc','rod','roe','rom','roo','rot','row','rub','rue','rug','rum','run','rut','rya','rye','ryu','sab','sac','sad','sae','sag','sal','san','sap','sat','sau','saw','sax','say','sea','sec','see','seg','sei','sel','sen','ser','set','sew','sex','sez','sha','she','shh','sho','shy','sib','sic','sig','sim','sin','sip','sir','sis','sit','six','ska','ski','sky','sly','sob','soc','sod','soh','sol','som','son','sop','sos','sot','sou','sow','sox','soy','spa','spy','sri','sty','sub','sue','suk','sum','sun','sup','suq','sus','syn','tab','tad','tae','tag','taj','tam','tan','tao','tap','tar','tas','tat','tau','tav','taw','tax','tea','tec','ted','tee','teg','tel','ten','tes','tet','tew','the','tho','thy','tic','tie','til','tin','tip','tis','tit','tix','tiz','tod','toe','tog','tom','ton','too','top','tor','tot','tow','toy','try','tsk','tub','tug','tui','tum','tun','tup','tut','tux','twa','two','tye','udo','ugh','uke','ulu','umm','ump','ums','uni','uns','upo','ups','urb','urd','urn','urp','use','uta','ute','uts','vac','van','var','vas','vat','vau','vav','vaw','vee','veg','vet','vex','via','vid','vie','vig','vim','vin','vis','voe','vog','vow','vox','vug','vum','Dey','SRC','Pit','Maw','Tez','Rah','TRU','CCS','ARS',


// 4 letter words
'aahs','aals','abas','abba','abbe','abed','abet','able','ably','abos','abri','abut','abye','abys','acai','aced','aces','ache','achy','acid','acme','acne','acre','acro','acta','acts','acyl','adds','adit','ados','adze','aeon','aero','aery','afar','afro','agar','agas','aged','agee','ager','ages','agha','agin','agio','aglu','agly','agma','agog','agon','agro','ague','ahed','ahem','ahis','ahoy','aide','aids','ails','aims','ains','airn','airs','airt','airy','aits','ajar','ajee','ajis','akee','akin','alae','alan','alar','alas','alba','albs','alec','alee','alef','ales','alfa','alga','alif','alit','alky','alls','ally','alma','alme','alms','aloe','alow','alps','also','alto','alts','alum','amah','amas','ambo','amen','amia','amid','amie','amin','amir','amis','ammo','amok','amps','amus','amyl','anal','anas','ands','anes','anew','anga','anil','anis','ankh','anna','anoa','anon','ansa','anta','ante','anti','ants','anus','aped','aper','apes','apex','apod','apos','apps','apse','aqua','arak','arbs','arch','arco','arcs','area','areg','ares','arfs','argh','aria','arid','aril','arks','arms','army','arse','arts','arty','arum','arvo','aryl','asci','asea','ashy','asks','asps','atap','ates','atma','atom','atop','augh','auks','auld','aunt','aura','auto','aver','aves','avid','avos','avow','away','awed','awee','awes','awls','awns','awny','awol','awry','axal','axed','axel','axes','axil','axis','axle','axon','ayah','ayes','ayin','azan','azon','baal','baas','baba','babe','babu','baby','bach','back','bade','bads','baff','bags','baht','bail','bait','bake','bald','bale','balk','ball','balm','bals','bams','banc','band','bane','bang','bani','bank','bans','baps','barb','bard','bare','barf','bark','barm','barn','bars','base','bash','bask','bass','bast','bate','bath','bats','batt','baud','bawd','bawk','bawl','bawn','bays','bazz','bead','beak','beal','beam','bean','bear','beat','beau','beck','beds','bedu','beef','been','beep','beer','bees','beet','begs','bell','bels','belt','bema','bend','bene','bens','bent','berg','berk','berm','best','beta','beth','bets','bevy','beys','bhut','bias','bibb','bibe','bibs','bice',
'bide','bidi','bids','bier','biff','bigs','bike','bile','bilk','bill','bima','bind','bine','bing','bins','bint','biog','bios','bird','birk','birl','biro','birr','bise','bish','bisk','bite','bits','bitt','bize','blab','blae','blag','blah','blam','blat','blaw','bleb','bled','blet','blew','blin','blip','blob','bloc','blog','blot','blow','blub','blue','blur','boar','boas','boat','bobo','bobs','bock','bode','bods','body','boff','bogs','bogy','boho','boil','bola','bold','bole','boll','bolo','bolt','bomb','bond','bone','bong','bonk','bony','boob','book','boom','boon','boor','boos','boot','bops','bora','bore','bork','born','bort','bosh','bosk','boss','bota','both','bots','bott','bout','bowl','bows','boxy','boyo','boys','bozo','brad','brae','brag','bran','bras','brat','braw','bray','bred','bree','bren','brew','brie','brig','brim','brin','brio','bris','brit','broo','bros','brow','brrr','brut','brux','bubo','bubs','bubu','buck','buds','buff','bugs','buhl','buhr','bulb','bulk','bull','bumf','bump','bums','buna','bund','bung','bunk','bunn','buns','bunt','buoy','bura','burb','burd','burg','burk','burl','burn','burp','burr','burs','bury','bush','busk','buss','bust','busy','bute','buts','butt','buys','buzz','byes','byre','byrl','byte','cabs','caca','cade','cadi','cads','cafe','caff','cafs','cage','cagy','caid','cain','cake','caky','calf','calk','call','calm','calo','cals','calx','came','cami','camo','camp','cams','cane','cans','cant','cape','caph','capo','caps','carb','card','care','cark','carl','carn','carp','carr','cars','cart','casa','case','cash','cask','cast','cate','cats','caul','cava','cave','cavy','caws','cays','cazh','ceca','cede','cedi','cees','ceil','cell','cels','celt','cent','cepe','ceps','cere','cero','cert','cess','cete','chad','chai','cham','chao','chap','char','chat','chaw','chay','chef','chem','chew','chez','chia','chic','chid','chin','chip','chis','chit','choc','chon','chop','chow','chub','chug','chum','ciao','cigs','cine','cinq','cion','cire','cist','cite','city','clad','clag','clam','clan','clap','claw','clay','clef','cleg','clew','clip','clit','clod','clog','clon',
'clop','clot','cloy','club','clue','coal','coat','coax','cobb','cobs','coca','cock','coco','coda','code','cods','coed','coff','coft','cogs','coho','coif','coil','coin','coir','coke','coky','cola','cold','cole','cols','colt','coly','coma','comb','come','comm','comp','cone','coni','conk','conn','cons','cony','coof','cook','cool','coon','coop','coos','coot','cope','cops','copy','cord','core','corf','cork','corm','corn','cors','cory','cosh','coss','cost','cosy','cote','cots','coup','cove','cowl','cows','cowy','coxa','coys','cozy','crab','crag','cram','crap','craw','cred','crew','crib','crip','cris','crit','croc','crop','crow','crud','crus','crux','cube','cubs','cuds','cued','cues','cuff','cuif','cuke','cull','culm','cult','cums','cunt','cups','curb','curd','cure','curf','curl','curn','curr','curs','curt','cusk','cusp','cuss','cute','cuts','cwms','cyan','cyma','cyme','cyst','czar','dabs','dace','dada','dado','dads','daff','daft','dago','dags','dahl','dahs','dais','daks','dale','dals','dame','damn','damp','dams','dang','dank','dans','daps','darb','dare','dark','darn','dart','dash','data','date','dato','daub','daut','davy','dawk','dawn','daws','dawt','days','daze','dead','deaf','deal','dean','dear','debs','debt','deck','deco','deed','deem','deep','deer','dees','deet','defi','deft','defy','deil','deke','dele','delf','deli','dell','dels','delt','deme','demo','demy','dene','deni','dens','dent','deny','deps','dere','derm','desi','desk','deva','devi','devs','dews','dewy','dexy','deys','dhak','dhal','dhow','dial','dibs','dice','dick','dido','didy','died','diel','dies','diet','diff','difs','digs','dike','dill','dime','dims','dine','ding','dink','dino','dins','dint','diol','dips','dipt','dire','dirk','dirl','dirt','disc','dish','disk','diss','dita','dite','dits','ditz','diva','dive','djin','doat','dobe','doby','dock','docs','dodo','doer','does','doff','doge','dogs','dogy','dohs','doit','dojo','dole','doll','dols','dolt','dome','doms','dona','done','dong','dons','doob','doom','door','dopa','dope','dopy','dore','dork','dorm','dorp','dorr','dors','dory','dosa','dose','dosh','doss','dost',
'dote','doth','dots','doty','doum','dour','dout','doux','dove','down','dows','doxy','doze','dozy','drab','drag','dram','drat','draw','dray','dree','dreg','drek','drew','drib','drip','drop','drub','drug','drum','drys','duad','dual','dubs','duce','duci','duck','duct','dude','duds','duel','dues','duet','duff','dugs','duit','duke','dull','duly','duma','dumb','dump','dune','dung','dunk','duns','dunt','duos','dupe','dups','dura','dure','durn','duro','durr','dusk','dust','duty','dyad','dyed','dyer','dyes','dyke','dyne','each','earl','earn','ears','ease','east','easy','eath','eats','eaux','eave','ebbs','ebon','eche','echo','echt','ecos','ecru','ecus','eddo','eddy','edge','edgy','edhs','edit','eeew','eels','eely','eery','effs','efts','egad','egal','eger','eggs','eggy','egis','egos','eide','eked','ekes','ekka','elan','elds','elhi','elks','ells','elms','elmy','else','emes','emeu','emic','emir','emit','emmy','emos','emus','emyd','ends','engs','enol','enow','enuf','envy','eons','epee','epha','epic','epos','eras','ergo','ergs','erne','erns','eros','errs','erst','eruv','eses','esne','espy','esse','ests','etas','etch','eths','etic','etna','etui','euro','even','ever','eves','evil','ewer','ewes','exam','exec','exed','exes','exit','exon','expo','eyas','eyed','eyen','eyer','eyes','eyne','eyra','eyre','eyry','fabs','face','fact','fade','fado','fads','faff','fags','fahs','fail','fain','fair','fake','fall','falx','fame','fane','fang','fano','fans','fard','fare','farl','farm','faro','fart','fash','fast','fate','fats','faun','faux','fava','fave','fawn','fays','faze','feal','fear','feat','feck','feds','feeb','feed','feel','fees','feet','fehs','fell','felt','feme','fems','fend','fens','feod','fere','fern','fess','fest','feta','fete','fets','feud','feus','fiar','fiat','fibs','fice','fico','fido','fids','fief','fife','figs','fila','file','filk','fill','film','filo','fils','find','fine','fink','fino','fins','fire','firm','firn','firs','fisc','fish','fist','fits','five','fixt','fizz','flab','flag','flak','flam','flan','flap','flat','flaw','flax','flay','flea','fled','flee','flew','flex','fley','flic',
'flip','flir','flit','floc','floe','flog','flop','flow','flub','flue','flus','flux','foal','foam','fobs','foci','foes','fogs','fogy','fohn','foil','foin','fold','folk','fond','fons','font','food','fool','foos','foot','fops','fora','forb','ford','fore','fork','form','fort','foss','foul','four','fowl','foxy','foys','fozy','frae','frag','frap','frat','fray','free','fret','frig','frit','friz','froe','frog','from','frow','frug','fubs','fuci','fuck','fuds','fuel','fugs','fugu','fuji','full','fume','fumy','fund','funk','funs','furl','furs','fury','fuse','fuss','futz','fuze','fuzz','fyce','fyke','gabs','gaby','gach','gadi','gads','gaed','gaen','gaes','gaff','gaga','gage','gags','gain','gait','gala','gale','gall','gals','gama','gamb','game','gamp','gams','gamy','gane','gang','gaol','gape','gaps','gapy','garb','gars','gash','gasp','gast','gate','gats','gaud','gaum','gaun','gaur','gave','gawk','gawp','gays','gaze','gean','gear','geck','geds','geed','geek','gees','geez','geld','gels','gelt','gems','gene','gens','gent','genu','germ','gest','geta','gets','geum','ghat','ghee','ghis','gibe','gibs','gids','gied','gien','gies','gifs','gift','giga','gigs','gild','gill','gilt','gimp','gink','gins','gips','gird','girl','girn','giro','girt','gist','gite','gits','give','glad','glam','gled','glee','gleg','glen','gley','glia','glib','glim','glob','glom','glop','glow','glue','glug','glum','glut','gnar','gnat','gnaw','gnus','goad','goal','goas','goat','gobo','gobs','goby','gods','goer','goes','gogo','goji','gold','golf','gone','gong','good','goof','gook','goon','goop','goos','gore','gorm','gorp','gory','gosh','goth','gout','gowd','gowk','gown','goys','grab','grad','gram','gran','grat','gray','gree','grew','grey','grid','grig','grim','grin','grip','grit','griz','grog','grok','grot','grow','grub','grue','grum','guan','guar','guck','gude','guff','guid','gulf','gull','gulp','guls','gums','gunk','guns','guru','gush','gust','guts','guvs','guys','gybe','gyms','gyno','gypo','gyps','gyre','gyri','gyro','gyve','haaf','haar','habu','hack','hade','hadj','haed','haem','haen','haes','haet','haft','hags','haha',
'hahs','haik','hail','hair','haji','hajj','hake','haku','hale','half','hall','halm','halo','halt','hame','hams','hand','hang','hank','hant','haps','hard','hare','hark','harl','harm','harp','hart','hash','hasp','hast','hate','hath','hats','haul','haut','have','hawk','haws','hays','haze','hazy','head','heal','heap','hear','heat','hebe','heck','heed','heel','heft','hehs','heil','heir','held','hell','helm','helo','help','heme','hemp','hems','hens','hent','heps','herb','herd','here','herl','herm','hern','hero','hers','hest','heth','hets','hewn','hews',
'hick', 'hide', 'hied', 'hies', 'high', 'hike', 'hila', 'hili', 'hill', 'hilt', 'hims', 'hind', 'hins', 'hint', 'hips', 'hire', 'hisn', 'hiss', 'hist', 'hits', 'hive', 'hiya', 'hmmm', 'hoar', 'hoax', 'hobo', 'hobs', 'hock', 'hods', 'hoed', 'hoer', 'hoes', 'hogg', 'hogs', 'hoke', 'hold', 'hole', 'holk', 'holm', 'holo', 'holp', 'hols', 'holt', 'holy', 'homa', 'home', 'homo', 'homs', 'homy', 'hone', 'hong', 'honk', 'hons', 'hood', 'hoof', 'hook', 'hoop', 'hoot', 'hope', 'hops', 'hora', 'hork', 'horn', 'hose', 'host', 'hots', 'hour', 'hove', 'howe', 'howf', 'howk', 'howl', 'hows', 'hoya', 'hoys', 'hubs', 'huck', 'hued', 'hues', 'huff', 'huge', 'hugs', 'huic', 'hula', 'hulk', 'hull', 'hump', 'hums','hung', 'hunh', 'hunk', 'huns', 'hunt', 'hurl', 'hurt', 'hush', 'husk', 'huts', 'hwan', 'hwyl', 'hyla', 'hymn', 'hype', 'hypo', 'hyps', 'hyte', 'iamb', 'ibex', 'ibis', 'iced', 'ices', 'ichs', 'icks', 'icky', 'icon', 'idea', 'idem', 'ides', 'idle', 'idly', 'idol', 'idyl', 'iffy', 'iggs', 'iglu', 'ikat', 'ikon', 'ilea', 'ilex', 'ilia', 'ilka', 'ilks', 'ills', 'illy', 'imam', 'imid', 'immy', 'impi', 'imps', 'inby', 'inch', 'info', 'inia', 'inks', 'inky', 'inly', 'inns', 'inro', 'inti', 'into', 'ions', 'iota', 'ired', 'ires', 'irid', 'iris', 'irks', 'iron', 'isba', 'isle', 'isms', 'itch', 'item', 'iwis', 'ixia', 'izar', 'jabs', 'jack', 'jade', 'jagg', 'jags', 'jail', 'jake', 'jamb', 'jams', 'jane', 'jape', 'jarl', 'jars', 'jato', 'jauk', 'jaup', 'java', 'jaws', 'jays', 'jazz', 'jean', 'jeed', 'jeep', 'jeer', 'jees', 'jeez', 'jefe', 'jehu', 'jell', 'jeon', 'jerk', 'jess', 'jest', 'jete', 'jets', 'jeux', 'jews', 'jiao', 'jibb', 'jibe', 'jibs', 'jiff', 'jigs', 'jill', 'jilt', 'jimp', 'jink', 'jinn', 'jins', 'jinx', 'jird', 'jism', 'jive', 'jivy', 'jizz', 'jobs', 'jock', 'joes', 'joey', 'jogs', 'john', 'join', 'joke', 'joky', 'jole', 'jolt', 'jook', 'josh', 'joss', 'jota', 'jots', 'jouk', 'jowl', 'jows', 'joys', 'juba', 'jube', 'juco', 'judo', 'judy', 'juga', 'jugs', 'juju', 'juke', 'juku', 'jump', 'junk', 'jupe', 'jura', 'jury', 'just', 'jute', 'juts', 'kaas', 'kabs', 'kadi', 'kaes', 'kafs',
'kagu', 'kaif', 'kail', 'kain', 'kaka', 'kaki', 'kale', 'kame', 'kami', 'kana', 'kane', 'kaon', 'kapa', 'kaph', 'kapu', 'karn', 'kart', 'kata', 'kats', 'kava', 'kayo', 'kays', 'kbar', 'keas', 'keck', 'keef', 'keek', 'keel', 'keen', 'keep', 'keet', 'kefs', 'kegs', 'keir', 'kelp', 'kelt', 'kemp', 'keno', 'kens', 'kent', 'kepi', 'keps', 'kept', 'kerb', 'kerf', 'kern', 'keta', 'keto', 'keys', 'khaf', 'khan', 'khat', 'khet', 'khis', 'kibe', 'kick', 'kids', 'kief', 'kier', 'kifs', 'kike', 'kill', 'kiln', 'kilo', 'kilt', 'kina', 'kind', 'kine', 'king', 'kink', 'kino', 'kins', 'kips', 'kirk', 'kirn', 'kirs', 'kiss', 'kist', 'kite', 'kith', 'kits', 'kiva', 'kiwi', 'klik', 'knap', 'knar', 'knee', 'knew', 'knit', 'knob', 'knop', 'knot', 'know', 'knur', 'koan', 'koas', 'kobo', 'kobs', 'koel', 'kohl', 'kois', 'koji', 'kola', 'kolo', 'konk', 'kook', 'koph', 'kops', 'kora', 'kore', 'kors', 'koss', 'koto', 'krai', 'kray', 'kris', 'kudo', 'kudu', 'kues', 'kufi', 'kuna', 'kune', 'kuru', 'kvas', 'kyak', 'kyar', 'kyat', 'kyes', 'kyte', 'labs', 'lace', 'lack', 'lacs', 'lacy', 'lade', 'lads', 'lady', 'lags', 'lahs', 'laic', 'laid', 'lain', 'lair', 'lake', 'lakh', 'laky', 'lall', 'lama', 'lamb', 'lame', 'lamp', 'lams', 'land', 'lane', 'lang', 'lank', 'laps', 'lard', 'lari', 'lark', 'larn', 'lars', 'lase', 'lash', 'lass', 'last', 'late', 'lath', 'lati', 'lats', 'latu', 'laud', 'lava', 'lave', 'lavs', 'lawn', 'laws', 'lays', 'laze', 'lazy', 'lead', 'leaf', 'leak', 'leal', 'lean', 'leap', 'lear', 'leas', 'lech', 'lede', 'leek', 'leer', 'lees', 'leet', 'left', 'legs', 'lehr', 'leis', 'leke', 'leks', 'leku', 'lend', 'leno', 'lens', 'lent', 'lept', 'less', 'lest', 'lets', 'leud', 'leva', 'levo', 'levs', 'levy', 'lewd', 'leys', 'liar', 'lias', 'libs', 'lice', 'lich', 'lick', 'lido', 'lids', 'lied', 'lief', 'lien', 'lier', 'lies', 'lieu', 'life', 'lift', 'like', 'lilo', 'lilt', 'lily', 'lima', 'limb', 'lime', 'limn', 'limo', 'limp', 'limy', 'line', 'ling', 'link', 'linn', 'lino', 'lins', 'lint', 'liny', 'lion', 'lipa', 'lipe', 'lipo', 'lips', 'lira', 'lire', 'liri', 'lisp', 'list', 'lite', 'lits', 'litu',
'live', 'load', 'loaf', 'loam', 'loan', 'lobe', 'lobo', 'lobs', 'loca', 'loch', 'loci', 'lock', 'loco', 'lode', 'loft', 'loge', 'logo', 'logs', 'logy', 'loid', 'loin', 'loll', 'lone', 'long', 'loof', 'look', 'loom', 'loon', 'loop', 'loos', 'loot', 'lope', 'lops', 'lord', 'lore', 'lorn', 'lory', 'lose', 'loss', 'lost', 'lota', 'loth', 'loti', 'loto', 'lots', 'loud', 'loup', 'lour', 'lout', 'love', 'lowe', 'lown', 'lows', 'luau', 'lube', 'luce', 'luck', 'lude', 'ludo', 'luds', 'lues', 'luff', 'luge', 'lugs', 'lull', 'lulu', 'luma', 'lump', 'lums', 'luna', 'lune', 'lung', 'lunk', 'luns', 'lunt', 'luny', 'lure', 'lurk', 'lush', 'lust', 'lute', 'lutz', 'luvs', 'luxe', 'lwei', 'lych', 'lyes', 'lynx', 'lyre', 'lyse', 'maar', 'mabe', 'mace', 'mach', 'mack', 'macs', 'made', 'mads', 'maes', 'mage', 'magi', 'mags', 'maid', 'mail', 'maim', 'main', 'mair', 'make', 'maki', 'mako', 'male', 'mall', 'malm', 'malt', 'mama', 'mams', 'mana', 'mane', 'mano', 'mans', 'many', 'maps', 'mara', 'marc', 'mare', 'mark', 'marl', 'mars', 'mart', 'masa', 'mash', 'mask', 'mass', 'mast', 'mate', 'math', 'mats', 'matt', 'maud', 'maul', 'maun', 'maut', 'mawn', 'maws', 'maxi', 'maya', 'mayo', 'mays', 'maze', 'mazy', 'mead', 'meal', 'mean', 'meat', 'mech', 'meds', 'meed', 'meek', 'meet', 'mega', 'megs', 'meld', 'mell', 'mels', 'melt', 'meme', 'memo', 'mems', 'mend', 'meno', 'menu', 'meou', 'meow', 'merc', 'mere', 'merk', 'merl', 'mesa', 'mesh', 'mess', 'meta', 'mete', 'meth', 'mewl', 'mews', 'meze', 'mhos', 'mibs', 'mica', 'mice', 'mick', 'mics', 'midi', 'mids', 'mien', 'miff', 'migg', 'migs', 'mike', 'mild', 'mile', 'milk', 'mill', 'milo', 'mils', 'milt', 'mime', 'mina', 'mind', 'mine', 'mini', 'mink', 'mint', 'minx', 'mips', 'mire', 'miri', 'mirk', 'mirs', 'miry', 'mise', 'miso', 'miss', 'mist', 'mite', 'mitt', 'mity', 'mixt', 'moan', 'moas', 'moat', 'mobs', 'mock', 'mocs', 'mode', 'modi', 'mods', 'mofo', 'mogs', 'moho', 'moil', 'mojo', 'moke', 'mola', 'mold', 'mole', 'moll', 'mols', 'molt', 'moly', 'mome', 'momi', 'moms', 'monk', 'mono', 'mons', 'mony', 'mood', 'mook', 'mool', 'moon', 'moor', 'moos', 'moot',
'mope', 'mops', 'mopy', 'mora', 'more', 'morn', 'mors', 'mort', 'mosh', 'mosk', 'moss', 'most', 'mote', 'moth', 'mots', 'mott', 'moue', 'move', 'mown', 'mows', 'moxa', 'mozo', 'much', 'muck', 'muds', 'muff', 'mugg', 'mugs', 'mule', 'mull', 'mumm', 'mump', 'mums', 'mumu', 'mung', 'muni', 'muns', 'muon', 'mura', 'mure', 'murk', 'murr', 'muse', 'mush', 'musk', 'muso', 'muss', 'must', 'mute', 'muts', 'mutt', 'mycs', 'myna', 'myth', 'naan', 'nabe', 'nabs', 'nada', 'naes', 'naff', 'naga', 'nags', 'naif', 'nail', 'nala', 'name', 'nana', 'nano', 'nans', 'naoi', 'naos', 'napa', 'nape', 'naps', 'narc', 'nard', 'nark', 'nary', 'nave', 'navs', 'navy', 'nays', 'nazi', 'neap', 'near', 'neat', 'nebs', 'neck', 'need', 'neem', 'neep', 'negs', 'neif', 'nema', 'nene', 'neon', 'nerd', 'ness', 'nest', 'nets', 'nett', 'neuk', 'neum', 'neve', 'nevi', 'newb', 'news', 'newt', 'next', 'nibs', 'nice', 'nick', 'nide', 'nidi', 'niff', 'nigh', 'nill', 'nils', 'nims', 'nine', 'nipa', 'nips', 'nisi', 'nite', 'nits', 'nixe', 'nixy', 'nobs', 'nock', 'node', 'nodi', 'nods', 'noel', 'noes', 'nogg', 'nogs', 'noil', 'noir', 'nolo', 'noma', 'nome', 'noms', 'nona', 'none', 'nook', 'noon', 'nope', 'nori', 'norm', 'nose', 'nosh', 'nosy', 'nota', 'note', 'noun', 'nous', 'nova', 'nows', 'nowt', 'nubs', 'nude', 'nuff', 'nugs', 'nuke', 'null', 'numb', 'nuns', 'nurd', 'nurl', 'nuts', 'nyah', 'oafs', 'oaks', 'oaky', 'oars', 'oast', 'oath', 'oats', 'oaty', 'obas', 'obes', 'obey', 'obia', 'obis', 'obit', 'oboe', 'obol', 'ocas', 'oche', 'odah', 'odas', 'odds', 'odea', 'odes', 'odic', 'odor', 'odyl', 'ofay', 'offa', 'offs', 'ogam', 'ogee', 'ogle', 'ogre', 'ohed', 'ohia', 'ohms', 'oiks', 'oils', 'oily', 'oink', 'okas', 'okay', 'okeh', 'okes', 'okra', 'olde', 'olds', 'oldy', 'olea', 'oleo', 'oles', 'olio', 'olla', 'omas', 'omen', 'omer', 'omit', 'once', 'ones', 'only', 'onos', 'onto', 'onus', 'onyx', 'oohs', 'oops', 'oots', 'ooze', 'oozy', 'opah', 'opal', 'opas', 'oped', 'open', 'opes', 'opts', 'opus', 'orad', 'oral', 'orbs', 'orby', 'orca', 'orcs', 'ordo', 'ores', 'orgs', 'orgy', 'orle', 'orra', 'orts', 'oryx', 'orzo', 'osar',
'oses', 'ossa', 'otic', 'otto', 'ouch', 'ouds', 'ouph', 'ours', 'oust', 'outa', 'outs', 'ouzo', 'oval', 'oven', 'over', 'ovum', 'owed', 'owes', 'owls', 'owly', 'owns', 'owse', 'owts', 'oxen', 'oxer', 'oxes', 'oxic', 'oxid', 'oxim', 'oyer', 'oyes', 'oyez', 'paan', 'paca', 'pace', 'pack', 'pacs', 'pact', 'pacy', 'padi', 'pads', 'page', 'paid', 'paik', 'pail', 'pain', 'pair', 'paks', 'pale', 'pali', 'pall', 'palm', 'palp', 'pals', 'paly', 'pams', 'pane', 'pang', 'pans', 'pant', 'papa', 'paps', 'para', 'pard', 'pare', 'park', 'parr', 'pars', 'part', 'pase', 'pash', 'pass', 'past', 'pate', 'path', 'pats', 'paty', 'paua', 'pave', 'pawl', 'pawn', 'paws', 'pays', 'peag', 'peak', 'peal', 'pean', 'pear', 'peas', 'peat', 'pech', 'peck', 'pecs', 'peds', 'peed', 'peek', 'peel', 'peen', 'peep', 'peer', 'pees', 'pegs', 'pehs', 'pein', 'peke', 'pele', 'pelf', 'pelt', 'pend', 'pens', 'pent', 'peon', 'pepo', 'peps', 'perc', 'pere', 'peri', 'perk', 'perm', 'perp', 'pert', 'perv', 'peso', 'pest', 'pets', 'pews', 'pfft', 'pfui', 'phat', 'phew', 'phis', 'phiz', 'phon', 'phos', 'phot', 'phut', 'pial', 'pian', 'pias', 'pica', 'pice', 'pick', 'pics', 'pied', 'pier', 'pies', 'pigs', 'pika', 'pike', 'piki', 'pile', 'pili', 'pill', 'pily', 'pima', 'pimp', 'pina', 'pine', 'ping', 'pink', 'pins', 'pint', 'piny', 'pion', 'pipa', 'pipe', 'pips', 'pipy', 'pirn', 'pish', 'piso', 'piss', 'pita', 'pith', 'pits', 'pity', 'pixy', 'plan', 'plat', 'play', 'plea', 'pleb', 'pled', 'plew', 'plex', 'plie', 'plod', 'plop', 'plot', 'plow', 'ploy', 'plug', 'plum', 'plus', 'pock', 'poco', 'pods', 'poem', 'poet', 'pogo', 'pogy', 'pois', 'poke', 'poky', 'pole', 'poll', 'polo', 'pols', 'poly', 'pome', 'pomo', 'pomp', 'poms', 'pond', 'pone', 'pong', 'pons', 'pony', 'pood', 'poof', 'pooh', 'pool', 'poon', 'poop', 'poor', 'poos', 'pope', 'pops', 'pore', 'pork', 'porn', 'port', 'pose', 'posh', 'post', 'posy', 'pots', 'pouf', 'pour', 'pout', 'pows', 'poxy', 'pram', 'prao', 'prat', 'prau', 'pray', 'pree', 'prep', 'prex', 'prey', 'prez', 'prig', 'prim', 'proa', 'prob', 'prod', 'prof', 'prog', 'prom', 'prop', 'pros', 'prow', 'psis',
'psst', 'ptui', 'pubs', 'puce', 'puck', 'puds', 'pudu', 'puff', 'pugh', 'pugs', 'puja', 'puke', 'pula', 'pule', 'puli', 'pulk', 'pull', 'pulp', 'puls', 'puma', 'pump', 'puna', 'pung', 'punk', 'puns', 'punt', 'puny', 'pupa', 'pups', 'pupu', 'pure', 'puri', 'purl', 'purr', 'purs', 'push', 'puss', 'puts', 'putt', 'putz', 'pyas', 'pyes', 'pyic', 'pyin', 'pyre', 'pyro', 'qadi', 'qaid', 'qats', 'qoph', 'quad', 'quag', 'quai', 'quay', 'quey', 'quid', 'quin', 'quip', 'quit', 'quiz', 'quod', 'race', 'rack', 'racy', 'rads', 'raff', 'raft', 'raga', 'rage', 'ragg', 'ragi', 'rags', 'raia', 'raid', 'rail', 'rain', 'rais', 'raja', 'rake', 'raki', 'raku', 'rale', 'rami', 'ramp', 'rams', 'rand', 'rang', 'rani', 'rank', 'rant', 'rape', 'raps', 'rapt', 'rare', 'rase', 'rash', 'rasp', 'rate', 'rath', 'rato', 'rats', 'rave', 'raws', 'raya', 'rays', 'raze', 'razz', 'read', 'real', 'ream', 'reap', 'rear', 'rebs', 'reck', 'recs', 'redd', 'rede', 'redo', 'reds', 'reed', 'reef', 'reek', 'reel', 'rees', 'refs', 'reft', 'regs', 'reif', 'rein', 'reis', 'rely', 'rems', 'rend', 'reno', 'rent', 'repo', 'repp', 'reps', 'resh', 'rest', 'rete', 'rets', 'revs', 'rhea', 'rhos', 'rhus', 'rial', 'rias', 'ribs', 'rice', 'rich', 'rick', 'ride', 'rids', 'riel', 'rife', 'riff', 'rifs', 'rift', 'rigs', 'rile', 'rill', 'rime', 'rims', 'rimy', 'rind', 'ring', 'rink', 'rins', 'riot', 'ripe', 'rips', 'rise', 'risk', 'rite', 'ritz', 'rive', 'road', 'roam', 'roan', 'roar', 'robe', 'robs', 'rock', 'rocs', 'rode', 'rods', 'roes', 'roil', 'role', 'rolf', 'roll', 'romp', 'roms', 'rood', 'roof', 'rook', 'room', 'roos', 'root', 'rope', 'ropy', 'rose', 'rosy', 'rota', 'rote', 'roti', 'rotl', 'roto', 'rots', 'roue', 'roup', 'rout', 'roux', 'rove', 'rows', 'rube', 'rubs', 'ruby', 'ruck', 'rudd', 'rude', 'rued', 'ruer', 'rues', 'ruff', 'ruga', 'rugs', 'ruin', 'rukh', 'rule', 'ruly', 'rump', 'rums', 'rune', 'rung', 'runs', 'runt', 'ruse', 'rush', 'rusk', 'rust', 'ruth', 'ruts', 'ryas', 'ryes', 'ryke', 'rynd', 'ryot', 'ryus', 'sabe', 'sabs', 'sack', 'sacs', 'sade', 'sadi', 'safe', 'saga', 'sage', 'sago', 'sags', 'sagy', 'said', 'sail',
'sain', 'sake', 'saki', 'sale', 'sall', 'salp', 'sals', 'salt', 'same', 'samp', 'sand', 'sane', 'sang', 'sank', 'sans', 'saps', 'sard', 'sari', 'sark', 'sash', 'sass', 'sate', 'sati', 'saul', 'save', 'sawn', 'saws', 'says', 'scab', 'scad', 'scag', 'scam', 'scan', 'scar', 'scat', 'scop', 'scot', 'scow', 'scry', 'scud', 'scum', 'scup', 'scut', 'seal', 'seam', 'sear', 'seas', 'seat', 'secs', 'sect', 'seed', 'seek', 'seel', 'seem', 'seen', 'seep', 'seer', 'sees', 'sego', 'segs', 'seif', 'seis', 'self', 'sell', 'sels', 'seme', 'semi', 'send', 'sene', 'sent', 'seps', 'sept', 'sera', 'sere', 'serf', 'sers', 'sesh', 'seta', 'sets', 'sett', 'sevs', 'sewn', 'sews', 'sext', 'sexy', 'shad', 'shag', 'shah', 'sham', 'shat', 'shaw', 'shay', 'shea', 'shed', 'shen', 'shes', 'shew', 'shhh', 'shim', 'shin', 'ship', 'shit', 'shiv', 'shmo', 'shod', 'shoe', 'shog', 'shoo', 'shop', 'shot', 'show', 'shri', 'shul', 'shun', 'shut', 'shwa', 'sial', 'sibb', 'sibs', 'sice', 'sick', 'sics', 'side', 'sidh', 'sift', 'sigh', 'sign', 'sigs', 'sika', 'sike', 'sild', 'silk', 'sill', 'silo', 'silt', 'sima', 'simp', 'sims', 'sine', 'sing', 'sinh', 'sink', 'sins', 'sipe', 'sips', 'sire', 'sirs', 'site', 'sith', 'sits', 'size', 'sizy', 'skag', 'skas', 'skat', 'sked', 'skee', 'skeg', 'skep', 'skew', 'skid', 'skim', 'skin', 'skip', 'skis', 'skit', 'skol', 'skry', 'skua', 'slab', 'slag', 'slam', 'slap', 'slat', 'slaw', 'slay', 'sled', 'slew', 'slid', 'slim', 'slip', 'slit', 'slob', 'sloe', 'slog', 'slop', 'slot', 'slow', 'slub', 'slue', 'slug', 'slum', 'slur', 'slut', 'smew', 'smit', 'smog', 'smug', 'smut', 'snag', 'snap', 'snaw', 'sned', 'snib', 'snip', 'snit', 'snob', 'snog', 'snot', 'snow', 'snub', 'snug', 'snye', 'soak', 'soap', 'soar', 'soba', 'sobs', 'soca', 'sock', 'soda', 'sods', 'sofa', 'soft', 'sohs', 'soil', 'soja', 'soju', 'soke', 'sola', 'sold', 'sole', 'soli', 'solo', 'sols', 'soma', 'some', 'soms', 'sone', 'song', 'sons', 'sook', 'soon', 'soot', 'soph', 'sops', 'sora', 'sorb', 'sord', 'sore', 'sori', 'sorn', 'sort', 'soth', 'sots', 'souk', 'soul', 'soup', 'sour', 'sous', 'sown', 'sows', 'soya', 'soys',
'spae', 'spam', 'span', 'spar', 'spas', 'spat', 'spay', 'spaz', 'spec', 'sped', 'spew', 'spic', 'spik', 'spin', 'spit', 'spiv', 'spot', 'spry', 'spud', 'spue', 'spun', 'spur', 'sris', 'stab', 'stag', 'star', 'stat', 'staw', 'stay', 'stem', 'step', 'stet', 'stew', 'stey', 'stir', 'stoa', 'stob', 'stop', 'stot', 'stow', 'stub', 'stud', 'stum', 'stun', 'stye', 'suba', 'subs', 'such', 'suck', 'sudd', 'suds', 'sued', 'suer', 'sues', 'suet', 'sugh', 'suit', 'sukh', 'suks', 'sulk', 'sulu', 'sumi', 'sumo', 'sump', 'sums', 'sumy', 'sung', 'sunk', 'sunn', 'suns', 'supe', 'sups', 'suqs', 'sura', 'surd', 'sure', 'surf', 'suss', 'swab', 'swag', 'swam', 'swan', 'swap', 'swat', 'sway', 'swig', 'swim', 'swob', 'swop', 'swot', 'swum', 'sybo', 'syce', 'syke', 'syli', 'sync', 'syne', 'syph', 'tabs', 'tabu', 'tace', 'tach', 'tack1', 'taco', 'tact', 'tads', 'tael', 'tags', 'tahr', 'tail', 'tain', 'taka', 'take', 'tala', 'talc', 'tale', 'tali', 'talk', 'tall', 'tame', 'tamp', 'tams', 'tang', 'tank', 'tans', 'taos', 'tapa', 'tape', 'taps', 'tare', 'tarn', 'taro', 'tarp', 'tars', 'tart', 'tase', 'task', 'tass', 'tate', 'tats', 'taus', 'taut', 'tavs', 'taws', 'taxa1', 'taxi1', 'teak', 'teal', 'team', 'tear', 'teas', 'teat', 'tech', 'tecs', 'teds', 'teed', 'teel', 'teem', 'teen', 'tees', 'teff1', 'tegg', 'tegs', 'tegu', 'tein', 'tela', 'tele', 'tell', 'tels', 'temp', 'tend', 'tens', 'tent', 'tepa', 'term', 'tern', 'test', 'teth', 'tets', 'tews', 'text1', 'thae', 'than', 'that', 'thaw', 'thee', 'them', 'then', 'thew', 'they', 'thin', 'thio', 'thir', 'this', 'thou', 'thro', 'thru', 'thud', 'thug', 'thus', 'tian', 'tick', 'tics', 'tide', 'tidy', 'tied', 'tier', 'ties', 'tiff', 'tike', 'tiki', 'tile', 'till', 'tils', 'tilt', 'time', 'tine', 'ting', 'tins', 'tint', 'tiny', 'tipi', 'tips', 'tire', 'tirl', 'tiro', 'titi', 'tits', 'tivy', 'tiyn', 'tizz', 'toad', 'toby', 'tock', 'toco', 'tods', 'tody', 'toea', 'toed', 'toes', 'toff', 'toft', 'tofu', 'toga', 'togs', 'toil', 'toit', 'toke', 'tola', 'told', 'tole', 'toll', 'tolt', 'tolu', 'tomb', 'tome', 'toms', 'tone', 'tong', 'tons', 'tony', 'took', 'tool', 'toom',
'toon', 'toot', 'tope', 'toph', 'topi', 'topo', 'tops', 'tora', 'torc', 'tore', 'tori', 'torn', 'toro', 'torr', 'tors', 'tort', 'tory', 'tosa', 'tosh', 'toss', 'tost', 'tote', 'tots', 'tour', 'tout', 'town', 'tows', 'towy', 'toyo', 'toys', 'trad', 'tram', 'trap', 'tray', 'tree', 'tref', 'trek', 'trem', 'tres', 'tret', 'trey', 'trig', 'trim', 'trio', 'trip', 'trod', 'trog', 'trop', 'trot', 'trou', 'trow', 'troy', 'true', 'trug', 'tsar', 'tsks', 'tuba', 'tube', 'tubs', 'tuck', 'tufa', 'tuff', 'tuft', 'tugs', 'tuis', 'tule', 'tump', 'tums', 'tuna', 'tune', 'tung', 'tuns', 'tups', 'turd', 'turf', 'turk', 'turn', 'turr', 'tush', 'tusk', 'tuts', 'tutu', 'twae', 'twas', 'twat', 'twee', 'twig', 'twin', 'twit', 'twos', 'tyee', 'tyer', 'tyes', 'tyin', 'tyke', 'tyne', 'type', 'typo', 'typp', 'typy', 'tyre', 'tyro', 'tzar', 'udon', 'udos', 'ughs', 'ugly', 'ukes', 'ulan', 'ulna', 'ulus', 'ulva', 'umbo', 'umma', 'umph1', 'umps', 'unai', 'unau', 'unbe', 'unci', 'unco', 'unde', 'undo', 'undy', 'unis', 'unit', 'unto', 'upas', 'upby1', 'updo', 'upon', 'urbs', 'urds', 'urea', 'urge', 'uric', 'urns', 'urps', 'ursa', 'urus', 'used', 'user', 'uses', 'utas', 'utes', 'uvea', 'vacs', 'vagi', 'vail', 'vain', 'vair', 'vale', 'vamp1', 'vane', 'vang', 'vans', 'vara', 'vars', 'vary1', 'vasa', 'vase', 'vast', 'vats', 'vatu', 'vaus', 'vavs1', 'vaws1', 'veal', 'veep', 'veer', 'vees', 'vega', 'veil', 'vein', 'vela', 'veld', 'vena', 'vend', 'vent', 'vera', 'verb', 'vert', 'very1', 'vest', 'veto', 'vets', 'vext1', 'vial', 'vibe', 'vice', 'vide', 'vids', 'vied', 'vier', 'vies', 'view1', 'viff1', 'viga', 'vigs', 'vile', 'vill', 'vims', 'vina', 'vine', 'vino', 'vins', 'viny1', 'viol', 'virl', 'visa', 'vise', 'vita', 'viva1', 'vive1', 'vlei', 'vlog', 'voes', 'vogs', 'void', 'vole', 'volk1', 'volt', 'vote', 'vows', 'vrow', 'vugg', 'vugh1', 'vugs', 'vuln', 'waah', 'wabs', 'wack', 'wade', 'wadi', 'wads', 'wady', 'waes', 'waff', 'waft', 'wage', 'wags', 'waif', 'wail', 'wain', 'wair', 'wait', 'wake', 'wale', 'wali', 'walk', 'wall', 'waly', 'wame', 'wand', 'wane', 'wank', 'wans', 'want', 'wany', 'waps', 'ward', 'ware', 'wark',
'warm', 'warn', 'warp', 'wars', 'wart', 'wary', 'wash', 'wasp', 'wast', 'wats', 'watt', 'wauk', 'waul', 'waur', 'wave', 'wavy', 'wawl', 'waws', 'waxy', 'ways', 'weak', 'weal', 'wean', 'wear', 'webs', 'weds', 'weed', 'week', 'weel', 'ween', 'weep', 'weer', 'wees', 'weet', 'weft', 'weir', 'weka', 'weld', 'well', 'welt', 'wend', 'wens', 'went', 'wept', 'were', 'wert', 'west', 'weta', 'wets', 'wham', 'whap', 'what', 'whee', 'when', 'whet', 'whew', 'whey', 'whid', 'whig', 'whim', 'whin', 'whip', 'whir', 'whit', 'whiz', 'whoa', 'whom', 'whop', 'whup', 'whys', 'wich', 'wick', 'wide', 'wife', 'wigs', 'wiki', 'wild', 'wile', 'will', 'wilt', 'wily', 'wimp', 'wind', 'wine', 'wing', 'wink', 'wino', 'wins', 'winy', 'wipe', 'wire', 'wiry', 'wise', 'wish', 'wisp', 'wiss', 'wist', 'wite', 'with', 'wits', 'wive', 'woad', 'woes', 'wogs', 'woke', 'woks', 'wold', 'wolf', 'womb', 'wonk', 'wons', 'wont', 'wood', 'woof', 'wool', 'woos', 'wops', 'word', 'wore', 'work', 'worm', 'worn', 'wort', 'wost', 'wots', 'wove', 'wows', 'wrap', 'wren', 'writ', 'wuss', 'wych', 'wyes', 'wyle', 'wynd', 'wynn', 'wyns', 'wyte', 'xyst', 'yack', 'yaff', 'yag', 'yag', 'yag', 'yaks', 'yal', 'yam', 'yan', 'yank', 'yap', 'yar', 'yar', 'yar', 'yau', 'yau', 'yawl', 'yawn', 'yawp', 'yaws', 'yays', 'yeah', 'yea', 'yea', 'yea', 'yech', 'yeg', 'yel', 'yelk', 'yel', 'yel', 'yen', 'yeow', 'yep', 'yerk', 'yet', 'yet', 'yeuk', 'yews', 'yid', 'yil', 'yin', 'yip', 'yip', 'yir', 'yir', 'yle', 'yob', 'yock', 'yodh', 'yod', 'yog', 'yogh', 'yog', 'yoke', 'yoks', 'yolk', 'yomp', 'yon', 'yon', 'yoof', 'yor', 'you', 'you', 'yowe', 'yowl', 'yows', 'yua', 'yuc', 'yuch', 'yuck', 'yug', 'yuks', 'yul', 'yup', 'yur', 'yutz', 'yuzu', 'ywis', 'zags', 'zany', 'zaps', 'zarf', 'zeal', 'zebu', 'zeda', 'zeds', 'zees', 'zein', 'zeks', 'zeps', 'zerk', 'zero', 'zest', 'zeta', 'zigs', 'zill', 'zinc', 'zine', 'zing', 'zins', 'zips', 'ziti', 'zits', 'zizz', 'zoea', 'zoic', 'zona', 'zone', 'zonk', 'zoom', 'zoon', 'zoos', 'zori', 'zouk', 'zyme',

// 5 letter words
'aahed', 'aalii', 'aargh', 'aarti', 'abaca', 'abaci', 'aback', 'abacs', 'abaft', 'abaka', 'abamp','aband', 'abase', 'abash', 'abask', 'abate', 'abaya', 'abbas', 'abbed', 'abbes', 'abbey', 'abbot','abcee', 'abeam', 'abear', 'abele', 'abets', 'abhor', 'abide', 'abies', 'abled', 'abler', 'ables','ablet', 'ablow', 'abmho', 'abode', 'abohm', 'aboil', 'aboma', 'aboon', 'abord', 'abore', 'abort','about', 'above', 'abram', 'abray', 'abrim', 'abrin', 'abris', 'absey', 'absit', 'abuna', 'abune','abuse', 'abuts', 'abuzz', 'ayes', 'abysm', 'abyss', 'acais', 'acari', 'accas', 'accoy', 'acerb','acers', 'aceta', 'ached', 'aches', 'achoo', 'acids', 'acidy', 'acing', 'acini', 'ackee', 'acker','acmes', 'acmic', 'acned', 'acnes', 'acock', 'acold', 'acorn', 'acred', 'acres', 'acrid', 'acted','actin', 'acton', 'actor', 'acute', 'acyls', 'adage', 'adapt', 'adaws', 'adays', 'addax', 'added','adder', 'addio', 'addle', 'adeem', 'adept', 'adhan', 'adieu', 'adios', 'adits', 'adman', 'admen','admin', 'admit', 'admix', 'adobe', 'adobo', 'adopt', 'adore', 'adorn', 'adown', 'adoze', 'adrad', 'adred', 'adsum', 'aduki', 'adult', 'adunc', 'adust', 'advew', 'adyta', 'adzed', 'adzes', 'aecia','aedes', 'aegis', 'aeons', 'aerie', 'aeros', 'aesir', 'afald', 'afara', 'afars', 'afear', 'affix','afire', 'aflaj', 'afoot', 'afore', 'afoul', 'afrit', 'afros', 'after', 'again', 'agama', 'agami','agape', 'agars', 'agast', 'agate', 'agave', 'agaze', 'agene', 'agent', 'agers', 'agger', 'aggie','aggri', 'aggro', 'aggry', 'aghas', 'agila', 'agile', 'aging', 'agios', 'agism', 'agist', 'agita','aglee', 'aglet', 'agley', 'agloo', 'aglow', 'aglus', 'agmas', 'agoge', 'agone', 'agons', 'agony','agood', 'agora', 'agree', 'agria', 'agrin', 'agued', 'agues', 'aguti', 'ahead', 'aheap', 'ahent','ahigh', 'ahind', 'ahing', 'ahint', 'ahold', 'ahull', 'ahuru', 'aided', 'aider', 'aides', 'aidoi','aidos', 'aiery', 'aigas', 'ailed', 'aimed', 'aimer', 'ainee', 'ainga', 'aioli', 'aired', 'airer','airs', 'airth', 'airts', 'aisle', 'attch', 'attus', 'aiver', 'aizie', 'ajiva', 'ajuga', 'ajwan','akees', 'akela', 'akene', 'aking', 'akita', 'akkas', 'alaap', 
'alack', 'alamo', 'aland', 'alane','alang', 'alans', 'alant', 'alapa', 'alaps', 'alarm', 'alary', 'alate', 'alays', 'albas', 'albee','album', 'alcid', 'alcos', 'aldea', 'alder', 'aldol', 'aleck', 'alecs', 'alefs', 'aleft', 'aleph','alert', 'alews', 'aleye', 'alfas', 'algae', 'algal', 'algas', 'algid', 'algin', 'algor', 'algum','alias', 'alibi', 'alien', 'alifs', 'align', 'alike', 'aline', 'alist', 'alive', 'aliya', 'alkie','alkos', 'alkyd', 'alkyl', 'allay', 'allee', 'allel', 'alley', 'allis', 'allod', 'allot', 'allow','alloy', 'allyl', 'almah', 'almas', 'almeh', 'almes', 'almud', 'almug', 'alods', 'aloed', 'aloes','aloft', 'aloha', 'aloin', 'alone', 'along', 'aloof', 'aloud', 'alowe', 'alpha', 'altar', 'alter','altho', 'altos', 'alula', 'alums', 'alure', 'alway', 'amahs', 'amain', 'amass', 'amate', 'amaut', 'amaze', 'amban', 'amber', 'ambit', 'amble', 'ambos', 'ambry', 'ameba', 'ameer', 'amend', 'amene','amens', 'ament', 'amias', 'amice', 'amici', 'amide', 'amido', 'amids', 'amies', 'amiga', 'amigo','amine', 'amino', 'amins', 'amirs', 'amiss', 'amity', 'amlas', 'amman', 'ammon', 'ammos', 'amnia','amnic', 'amnio', 'amoks', 'amole', 'among', 'amort', 'amour', 'amove', 'amowt', 'amped', 'ample','amply', 'ampul', 'amrit', 'amuck', 'amuse', 'amyls', 'anana', 'anata', 'ancho', 'ancle', 'ancon','andro', 'anear', 'anfie', 'anent', 'angas', 'angel', 'anger', 'angle', 'anglo', 'angry', 'angst','anigh', 'antie', 'anis', 'anima', 'anime', 'animi', 'anion', 'anise', 'anker', 'ankhs', 'ankle','ankus', 'alas', 'annal', 'annas', 'annat', 'annex', 'annoy', 'annul', 'anoas', 'anode', 'anole','anomy', 'ansae', 'antae', 'antar', 'antas', 'anted', 'antes', 'antic', 'antis', 'antra', 'antre','antsy', 'anvil', 'anyon', 'aorta', 'apace', 'apage', 'apaid', 'apart', 'apayd', 'apays', 'apeak','apfer', 'apers', 'apert', 'apery', 'apgar', 'aphid', 'aphis', 'aptan', 'aping', 'aptot', 'apish','apism', 'apnea', 'apode', 'apods', 'apoop', 'aport', 'appal', 'appay', 'appel', 'appie', 'apply','appro', 'appui', 'appuy', 'apres', 'apron', 'apses', 'apsis', 'apsos', 'apted', 'apter', 'aptly','aquae', 'aquas', 'araba', 
'araks', 'arame', 'arars', 'arbas', 'arbor', 'arced', 'arcus', 'ardeb','ardor', 'ardri', 'aread', 'area', 'areal', 'arear', 'areas', 'areca', 'aredd', 'arede', 'arefy','areic', 'arena', 'arene', 'arepa', 'arere', 'arete', 'arets', 'areti', 'argal', 'argan', 'argil','argle', 'argol', 'argon', 'argot', 'argue', 'argus', 'arhat', 'arias', 'ariel', 'ariki', 'arils','ariot', 'arise', 'arish', 'arked', 'arled', 'arles', 'armed', 'armer', 'armet', 'armil', 'armor','arnas', 'arnut', 'aroba', 'aroha', 'aroid', 'aroma', 'arose', 'arpas', 'arpen', 'arrah', 'arras','array', 'arret', 'arris', 'arrow', 'arsed', 'arses', 'arsey', 'arsis', 'arson', 'artal', 'artel','artic', 'artis', 'arisy', 'aruhe', 'arums', 'arval', 'arvos', 'aryls', 'asana', 'ascot', 'ascus','asdic', 'ashed', 'ashen', 'ashes', 'ashet', 'aside', 'asked', 'asker', 'askew', 'askot', 'askos','aspen', 'asper', 'aspic', 'aspis', 'aspro', 'assai', 'assam', 'assay', 'asses', 'asset', 'assez','assot', 'aster', 'astir', 'astun', 'away', 'aswim', 'asyla', 'ataps', 'ataxy', 'atigi', 'atili','atty', 'attas', 'atman', 'atmas', 'atocs', 'atoke', 'atoks', 'atoli', 'atoms', 'atomy', 'atone', 'atony', 'atopy', 'atria', 'atrip', 'attap', 'attar', 'attic', 'atuas', 'audad', 'audio', 'audit', 'auger', 'aught', 'augur', 'aulas', 'aulic', 'auloi', 'aulos', 'aumil', 'aunes', 'aunts', 'aunty', 'aurae', 'aural', 'aurar', 'auras', 'aurei', 'aures', 'auric', 'auris', 'aurum', 'autos', 'auxin', 'avail', 'avale', 'avant', 'avast', 'avels', 'avens', 'avers', 'avert', 'avgas', 'avian', 'avine', 'avion', 'avise', 'aviso', 'avize', 'avoid', 'avows', 'avyze', 'await', 'awake', 'award', 'aware', 'awarn', 'awash', 'awato', 'awave', 'aways', 'awls', 'aweel', 'aweto', 'awful', 'awing', 'awmry', 'awned', 'anner', 'awoke', 'awols', 'awork', 'axels', 'axial', 'axile', 'axils', 'axing', 'axiom', 'axion', 'axite', 'axled', 'axles', 'axman', 'axmen', 'axoid', 'axone', 'axons', 'ayahs', 'ayelp', 'aygre', 'ayins', 'ayont', 'ayres', 'ayrie', 'azans', 'azide', 'azido', 'azine', 'azion', 'azoic', 'azole', 'azons', 'azote', 'azoth', 'azuki', 'azure', 'azurn', 'azury', 'azygy', 
'azyme', 'azyms', 'baaed', 'baais', 'babas', 'babel', 'babes', 'babka', 'baboo', 'babul', 'babus', 'bacca', 'bacco', 'baccy', 'bacha', 'bachs', 'backs', 'bacon', 'baddy', 'badge', 'badly', 'baels', 'baffs', 'baffy', 'bafts', 'bagel', 'baggy', 'baghs', 'bagie', 'bahts', 'bahut', 'bails', 'bairn', 'baith', 'baits', 'baiza', 'baize', 'bajan', 'bajra', 'bauri', 'bajus', 'baked', 'baken', 'baker', 'bakes', 'bakra', 'balas', 'balds', 'baldy', 'baled', 'baler', 'bales', 'balks', 'balky', 'balls', 'bally', 'balms', 'balmy', 'baloo', 'balsa', 'balti', 'balun', 'balus', 'bambi', 'banak', 'banal', 'banco', 'bancs', 'banda', 'bandh', 'bands', 'bandy', 'baned', 'banes', 'bangs', 'bania', 'banjo', 'banks', 'banns', 'bants', 'bantu', 'banty', 'bapus', 'barbe', 'barbs', 'barby', 'barca', 'barde', 'bardo', 'bards', 'bardy', 'bared', 'barer', 'bares', 'barfs', 'barge', 'baric', 'barks', 'barky', 'barms', 'barmy', 'barns', 'barny', 'baron', 'barps', 'barra', 'barre', 'barro', 'barry', 'barye', 'basal', 'basan', 'based', 'baser', 'bases', 'basho', 'basic', 'basil', 'basin', 'basis', 'basks', 'bason', 'basse', 'bassi', 'basso', 'bassy', 'basta', 'baste', 'basti', 'basto', 'basts', 'batch', 'bated', 'bates', 'bathe', 'baths', 'batik', 'baton', 'batta', 'batts', 'battu', 'batty', 'bauds', 'bauks', 'baulk', 'baurs', 'bavin', 'bawds', 'bawdy', 'bawls', 'bawns', 'bars', 'bawty', 'bayed', 'bayes', 'bayle', 'bayou', 'bayts', 'bazar', 'bazoo', 'beach', 'beads', 'beady', 'beaks', 'beaky', 'beams', 'beamy', 'bean', 'beans', 'beany', 'beard', 'beare', 'bears', 'beast', 'beath', 'beats', 'beaty', 'beaus', 'beaut', 'beaux', 'bebop', 'becap', 'becke', 'becks', 'bedad', 'bedel', 'bedes', 'bedew', 'bedim', 'bedye', 'beech', 'beedi', 'beefs', 'beefy', 'beeps', 'beers', 'beery', 'beets', 'befit', 'befog', 'begad', 'began', 'begar', 'begat', 'begem', 'beget', 'begin', 'begot', 'begum', 'begun', 'beige', 'beigy', 'being', 'bekah', 'belah', 'belar', 'belay', 'belch', 'belee', 'belga', 'belie', 'belle', 'bells', 'belly', 'belon', 'below', 'belts', 'bemad', 'bemas', 'bemix', 'bemud', 'bench', 'bends', 'bendy', 'benes', 'benet', 
'benis', 'benne', 'benni', 'benny', 'bento', 'bents', 'benty', 'bepat', 'beray', 'beres', 'beret', 'bergs', 'berko', 'berks', 'berme', 'berms', 'berob', 'berry', 'berth', 'beryl', 'besat', 'besaw', 'besee', 'beses', 'beset', 'besit', 'besom', 'besot', 'besti', 'bests', 'betas', 'beted', 'betel', 'betes', 'beths', 'betid', 'beton', 'betta', 'betty', 'bevel', 'bever', 'bevor', 'bevue', 'bevvy', 'bewet', 'bewig', 'bezel', 'bezes', 'bezil', 'bhaji', 'bhang', 'bhels', 'bhoot', 'bhuna', 'bhuts', 'biali', 'bialy', 'bibbs', 'bible', 'biccy', 'bicep', 'bices', 'biddy', 'bided', 'bider', 'bides', 'bidet', 'bidis', 'bidon', 'bield', 'biers', 'biffo', 'biffs', 'biffy', 'bifid', 'bigaf', 'biggs', 'biggy', 'bigha', 'bight', 'bigly', 'bigos', 'bigot', 'bijou', 'biked', 'biker', 'bikes', 'bikie', 'bilbo', 'bilby', 'biled', 'biles', 'bilge', 'bilgy', 'bilks', 'bills', 'billy', 'bimah', 'bimas', 'bimbo', 'binal', 'bindi', 'binds', 'biner', 'bines', 'binge', 'bingo', 'bings', 'bingy', 'binit', 'binks', 'bints', 'biogs', 'biome', 'biont', 'biota', 'biped', 'bipod', 'birch', 'birds', 'birks', 'birte', 'biris', 'biros', 'birrs', 'birse', 'birsy', 'birth', 'bises', 'bisks', 'bison', 'bitch', 'biter', 'bites', 'bitos', 'bitou', 'bitsy', 'bitte', 'bitts', 'bitty', 'bivia', 'bivvy', 'bizes', 'bizzo', 'bizzy', 'blabs', 'black', 'blade', 'blads', 'blady', 'blaer', 'blaes', 'blaff', 'blags', 'blahs', 'blain', 'blame', 'blams', 'bland', 'blank', 'blare', 'blart', 'blase', 'blash', 'blast', 'blate', 'blats', 'blatt', 'blaud', 'blawn', 'blaws', 'blays', 'blaze', 'bleak', 'blear', 'bleat', 'blebs', 'bleed', 'bleep', 'blees', 'blend', 'blent', 'blert', 'bless', 'blest', 'blets', 'bleys', 'blimp', 'blimy', 'blind', 'bling', 'blini', 'blink', 'blins', 'bliny', 'bitps', 'bless', 'bst', 'btte', 'bit7', 'biive', 'bioat', 'biobs', 'block', 'biocs', 'blogs', 'bloke', 'blond', 'blood', 'bloom', 'bloop', 'blore', 'blots', 'blown', 'blows', 'blowy', 'blubs', 'blude', 'bludy', 'blued', 'bluer', 'blues', 'bluet', 'blufy', 'bluff', 'bluid', 'blume', 'blunk', 'blunt', 'blurb', 'blurs', 'blurt', 'blush', 'blype', 'boabs', 'boaks', 
'board', 'boars', 'boart', 'boast', 'boats', 'boba', 'boba', 'bobas', 'bobby', 'bobol', 'bocca', 'bocce', 'bocci', 'boche', 'bocks', 'boded', 'bodes', 'bodge', 'bodle', 'boeps', 'boets', 'boeuf', 'boffo', 'boffs', 'bogan', 'bogey', 'boggy', 'bogie', 'bogle', 'bogus', 'bohea', 'bohos', 'boils', 'boing', 'boink', 'boite', 'roked', 'bokes', 'bokos', 'botar', 'botas', 'bolds', 'botes', 'botty', 'botis', 'bolos', 'bottis', 'Bolus', 'Bomas', 'Bombe', 'Bombo', 'Bombs', 'Bonce', 'Bonds', 'Boned', 'Boner', 'Bones', 'Boney', 'bongo', 'bongs', 'bonie', 'bonks', 'bonne', 'bonny', 'bonus', 'bonza', 'bonze', 'boobs', 'booby', 'boody', 'booed', 'boofy', 'boogy', 'boohs', 'books', 'booky', 'bools', 'booms', 'boomy', 'boong', 'boons', 'boord', 'boors', 'boose', 'boost', 'booth', 'boots', 'booty', 'booze', 'boozy', 'borak', 'boral', 'boras', 'borax', 'borde', 'bords', 'bored', 'bore', 'borel', 'borer', 'bores', 'borgo', 'boric', 'borks', 'borms', 'borna', 'borne', 'boron', 'borts', 'borty', 'bortz', 'bosks', 'bosky', 'bosom', 'boson', 'bossy', 'bosun', 'botas', 'botch', 'botel', 'bothy', 'botte', 'botts', 'botty', 'bouge', 'bough', 'bouks', 'boule', 'boult', 'bound', 'bouns', 'bourd', 'bourg', 'bourn', 'bouse', 'bousy', 'bouts', 'bovid', 'bowat', 'bowed', 'bowel', 'bower', 'bowes', 'bowet', 'bowie', 'bowls', 'bowse', 'boxed', 'boxen', 'boxer', 'boxes', 'boyar', 'boyau', 'boyed', 'boyfs', 'bogs', 'boyla', 'boyos', 'boysy', 'bozos', 'braat', 'brace', 'brach', 'brack', 'bract', 'brads', 'bras', 'brags', 'braid', 'brail', 'brain', 'brake', 'braks', 'braky', 'brame', 'brand', 'brank', 'brans', 'brant', 'brash', 'brass', 'brast', 'brats', 'brava', 'brave', 'bravi', 'bravo', 'brawl', 'brawn', 'braws', 'braxy', 'brays', 'braza', 'braze', 'bread', 'break', 'bream', 'brede', 'breds', 'breed', 'breem', 'breer', 'brees', 'breid', 'breis', 'breme', 'brens', 'brent', 'brere', 'brers', 'breve', 'brews', 'breys', 'briar', 'bribe', 'brick', 'bride', 'brief', 'brier', 'bries', 'brigs', 'briks', 'brill', 'brims', 'brine', 'bring', 'brink', 'brins', 'briny', 'brios', 'brise', 'brisk', 'briss', 'brith', 'brits', 'britt', 
'brize', 'broad', 'broch', 'brock', 'brods', 'brogh', 'brogs', 'broke', 'brome', 'bromo', 'bronc', 'brond', 'brood', 'brook', 'brool', 'broom', 'broos', 'brose', 'brosy', 'broth', 'brown', 'brows', 'brugh', 'bruin', 'bruit', 'brule', 'brume', 'brung', 'brunt', 'brush', 'brusk', 'brust', 'brute', 'bruts', 'buts', 'buaze', 'bubal', 'bubas', 'bubba', 'bubby', 'bubus', 'buchu', 'buck', 'bucks', 'buck', 'budas', 'buddy', 'budge', 'budis', 'budos', 'buffa', 'buffe', 'buffi', 'buffo', 'buffs', 'buffy', 'bufos', 'buggy', 'bugle', 'buhis', 'buhrs', 'buiks', 'build', 'built', 'buist', 'bukes', 'bulbs', 'bulge', 'bulgy', 'bulks', 'bulky', 'bulla', 'bulls', 'bully', 'bulse', 'bumbo', 'bumfs', 'bumph', 'bumps', 'bumpy', 'bunas', 'bunce', 'bunch', 'bunco', 'bunde', 'bunde', 'buds', 'bundt', 'bundu', 'bundy', 'bungs', 'bungy', 'bunta', 'bunte', 'bunjy', 'bunko', 'bunks', 'buns', 'bunny', 'bunts', 'bunty', 'bunya', 'buoys', 'buppy', 'buran', 'buras', 'burbs', 'burds', 'buret', 'burgh', 'burgs', 'burin', 'burka', 'burke', 'burks', 'buris', 'burly', 'burns', 'burnt', 'buroo', 'burps', 'buroa', 'burro', 'burrs', 'burry', 'bursa', 'burse', 'burst', 'busby', 'bused', 'buses', 'bushy', 'busks', 'busky', 'bussu', 'busti', 'busts', 'busty', 'butch', 'buteo', 'butes', 'butle', 'butte', 'butts', 'butty', 'butut', 'butyl', 'buxom', 'buyer', 'buzzy', 'bwana', 'bwazi', 'byded', 'byes', 'byked', 'bykes', 'bylaw', 'byres', 'byris', 'byssi', 'bytes', 'byway', 'caaed', 'cabal', 'cabas', 'cabby', 'caber', 'cabin', 'cable', 'cabob', 'caboc', 'cabre', 'cacao', 'cacas', 'cache', 'cacky', 'cacti', 'caddy', 'cadee', 'cades', 'cadet', 'cadge', 'cadgy', 'cadie', 'cadis', 'cadre', 'caeca', 'caese', 'cafes', 'caffs', 'caged', 'cager', 'cages', 'cagey', 'cagot', 'cahow', 'caids', 'cains', 'caird', 'cairn', 'cajon', 'cajun', 'caked', 'cakes', 'cakey', 'calfs', 'calid', 'calif', 'calix', 'calks', 'calla', 'calls', 'calms', 'calmy', 'calos', 'catpa', 'calps', 'calve', 'calyx', 'caman', 'camas', 'camel', 'cameo', 'cames', 'camis', 'camos', 'campi', 'campo', 'camps', 'campy', 'camus', 'canal', 'candy', 'caned', 'caneh', 'caner', 
'canes', 'cangs', 'canid', 'canna', 'cans', 'canny', 'canoe', 'canon', 'canso', 'canst', 'canto', 'cants', 'canty', 'capas', 'caped', 'caper', 'capes', 'caphs', 'capiz', 'caple', 'capon', 'capos', 'capot', 'capul', 'caput', 'carap', 'carat', 'carbo', 'carbs', 'carby', 'cardi', 'cards', 'cardy', 'cared', 'carer', 'cares', 'carei', 'carex', 'cargo', 'carks', 'carle', 'carls', 'cars', 'carny', 'carob', 'carol', 'carom', 'carpi', 'carps', 'cars', 'carry', 'carse', 'carta', 'carte', 'carts', 'carve', 'carvy', 'casa', 'casco', 'cased', 'cases', 'casks', 'casky', 'caste', 'casts', 'casus', 'catch', 'cater', 'cates', 'catty', 'cauda', 'cauks', 'cauld', 'caulk', 'cauls', 'caums', 'caups', 'causa', 'cause', 'cavas', 'caved', 'cavel', 'caver', 'caves', 'cavie', 'cavil', 'cawed', 'cawks', 'caxon', 'cease', 'ceaze', 'cebid', 'cecal', 'cecum', 'cedar', 'ceded', 'ceder', 'cedes', 'cedis', 'ceiba', 'ceili', 'ceils', 'celeb', 'cella', 'celli', 'cello', 'cells', 'celom', 'celts', 'cense', 'cento', 'cents', 'centu', 'ceorl', 'cepes', 'cerci', 'cered', 'ceres', 'cerge', 'ceria', 'ceric', 'cerne', 'ceros', 'certs', 'cesse', 'cesta', 'cesti', 'cetes', 'cetyl', 'chace', 'chack', 'chaco', 'chado', 'chads', 'chafe', 'chaff', 'chaft', 'chain', 'chair', 'chais', 'chalk', 'chais', 'champ', 'chams', 'chang', 'chank', 'chant', 'chaos', 'chape', 'chaps', 'chapt', 'chara', 'chard', 'chare', 'chark', 'charm', 'char', 'chars', 'chart', 'chary', 'chase', 'chasm', 'chats', 'chave', 'chavs', 'chawk', 'chaws', 'chaya', 'chays', 'cheap', 'cheat', 'check', 'cheek', 'cheep', 'cheer', 'chefs', 'cheka', 'chela', 'chelp', 'chemo', 'chere', 'chert', 'chess', 'chest', 'cheth', 'chevy', 'chews', 'chewy', 'chiao', 'chias', 'chibs', 'chica', 'chich', 'chick', 'chico', 'chics', 'chide', 'chief', 'chiel', 'chiks', 'child', 'chile', 'chili', 'chill', 'chimb', 'chime', 'chimo', 'chimp', 'china', 'chine', 'chiks', 'child', 'chile', 'chili', 'chill', 'chimb', 'chime', 'chimo', 'chimp', 'china', 'chine', 'chink', 'chino', 'chins', 'chips', 'chirk', 'chirl', 'chirm', 'chiro', 'chirp', 'chirr', 'chirt', 'chiru', 'chits', 'chive', 'chivs', 
'chivy', 'chizz', 'chock', 'choco', 'choc', 'chode', 'chogs', 'choir', 'choke', 'choko', 'choky', 'chola', 'choli', 'cholo', 'chomp', 'chons', 'choof', 'chook', 'choom', 'chops', 'chord', 'chore', 'chose', 'chota', 'chott', 'chout', 'choux', 'chow', 'chows', 'chubs', 'chuck', 'chufa', 'chuff', 'chugs', 'chump', 'chums', 'chunk', 'churl', 'churn', 'churr', 'chuse', 'chute', 'chyle', 'chyme', 'chynd', 'ciaos', 'cibol', 'cided', 'cider', 'cides', 'ciels', 'cigar', 'ciggy', 'cilia', 'cills', 'cimar', 'cimex', 'cinch', 'cinci', 'cines', 'cions', 'cippi', 'circa', 'circs', 'cires', 'cirls', 'cirri', 'cisco', 'cissy', 'cists', 'cital', 'cited', 'citer', 'cites', 'cives', 'civet', 'civic', 'civie', 'civil', 'civvy', 'clach', 'clack', 'clade', 'clads', 'claes', 'clags', 'claim', 'clame', 'clamp', 'clams', 'clang', 'clank', 'clans', 'claps', 'clapt', 'claro', 'clart', 'clary', 'clash', 'clasp', 'class', 'clast', 'clats', 'claut', 'clave', 'clavi', 'claws', 'clays', 'clean', 'clear', 'cleat', 'cleck', 'cleek', 'cleep', 'clefs', 'cleft', 'clegs', 'cleik', 'clems', 'clepe', 'clept', 'clerk', 'cleve', 'clews', 'click', 'clied', 'clies', 'cliff', 'clift', 'climb', 'clime', 'cline', 'cling', 'clink', 'clint', 'clipe', 'clips', 'clipt', 'cloak', 'cloam', 'clock', 'clods', 'cloff', 'clogs', 'cloke', 'clomb', 'clomp', 'clone', 'clonk', 'clons', 'clop', 'cloot', 'clops', 'close', 'clote', 'cloth', 'clots', 'cloud', 'clour', 'clous', 'clout', 'clove', 'clown', 'clows', 'cloye', 'cloys', 'cloze', 'clubs', 'cluck', 'clued', 'clues', 'clump', 'clung', 'clunk', 'clype', 'cnida', 'coach', 'coact', 'coala', 'coals', 'coaly', 'coapt', 'coarb', 'coast', 'coate', 'coati', 'coats', 'cobbs', 'cobby', 'cobia', 'coble', 'cobra', 'cobza', 'cocas', 'cocci', 'cocco', 'cocks', 'cocky', 'cocoa', 'cocos', 'codas', 'codec', 'coded', 'code', 'coder', 'codes', 'codex', 'codon', 'coeds', 'coffs', 'cogie', 'cogon', 'cogue', 'cohab', 'cohoe', 'cohog', 'cohos', 'coifs', 'coign', 'coils', 'coins', 'coirs', 'coits', 'coked', 'cokes', 'colas', 'colby', 'colds', 'coled', 'coles', 'coley', 'colic', 'colin', 'colis', 'colly', 'colog',
'colon', 'color', 'colts', 'cola', 'comae', 'comal', 'comas', 'combe', 'combi', 'combo', 'combs', 'comby', 'comer', 'comes', 'comet', 'comfy', 'comic', 'comix', 'comma', 'commo', 'comms', 'commy', 'compo', 'comps', 'compt', 'comte', 'comus', 'conch', 'condo', 'coned', 'cones', 'coney', 'cones', 'conga', 'conge', 'congo', 'conia', 'conic', 'coin', 'conks', 'cony', 'conne', 'conns', 'conte', 'conto', 'conus', 'convo', 'cooch', 'cooed', 'cooee', 'cooer', 'cooey', 'coofs', 'cooks', 'cooky', 'cools', 'cooly', 'coomb', 'cooms', 'coomy', 'coons', 'coops', 'coopt', 'coost', 'coots', 'cooze', 'copal', 'copay', 'coped', 'copen', 'coper', 'copes', 'copy', 'copra', 'copse', 'copsy', 'coral', 'cora', 'corbe', 'corby', 'cords', 'cored', 'corer', 'cores', 'corey', 'corgi', 'coria', 'corks', 'corky', 'corms', 'corni', 'corno', 'corns', 'cornu', 'corny', 'corps', 'corse', 'corso', 'cosec', 'cosed', 'coses', 'coset', 'cosey', 'cosie', 'costa', 'coste', 'costs', 'cotan', 'coted', 'cotes', 'coths', 'cotta', 'cotts', 'couch', 'coude', 'cough', 'could', 'count', 'coupe', 'coups', 'courb', 'courd', 'coure', 'cours', 'court', 'couth', 'coved', 'coven', 'cover', 'coves', 'covet', 'covey', 'covin', 'cowal', 'cowan', 'cowed', 'cower', 'cows', 'cowls', 'cowps', 'cowry', 'coxae', 'coal', 'coxed', 'coxes', 'coyed', 'coyer', 'coyly', 'coypu', 'cozed', 'cozen', 'cozes', 'cozey', 'cozie', 'craal', 'crabs', 'crack', 'craft', 'crags', 'craic', 'craig', 'crake', 'crame', 'cramp', 'crams', 'crane', 'crank', 'crans', 'crape', 'craps', 'crapy', 'crare', 'crash', 'crass', 'crate', 'crave', 'crawl', 'craws', 'crays', 'craze', 'crazy', 'creak', 'cream', 'credo', 'creds', 'creed', 'creek', 'creel', 'creep', 'crees', 'creme', 'crems', 'crena', 'crepe', 'crept', 'crepy', 'cress', 'crest', 'crewe', 'crews', 'cribs', 'crick', 'cried', 'crier', 'cries', 'crime', 'crimp', 'crims', 'crine', 'crios', 'cripe', 'crise', 'crisp', 'crith', 'crits', 'croak', 'croci', 'crock', 'crocs', 'croft', 'crogs', 'cromb', 'crome', 'crone', 'cronk', 'crony', 'crook', 'crool', 'croon', 'crops', 'crore', 'cross', 'crost', 'croup', 'crout', 'crowd', 'crown', 
'crows', 'croze', 'cruck', 'crude', 'cruds', 'crudy', 'cruel', 'crues', 'cruet', 'crumb', 'crump', 'cruor', 'crura', 'cruse', 'crush', 'crust', 'crusy', 'cruve', 'crwth', 'crypt', 'ctene', 'cubby', 'cubeb', 'cubed', 'cuber', 'cubes', 'cubic', 'cubit', 'cuddy', 'cuffo', 'cuffs', 'cuifs', 'cuing', 'cuish', 'cuits', 'cues', 'culch', 'culet', 'culex', 'culls', 'curty', 'cuims', 'curpa', 'cutt', 'cults', 'culty', 'cumec', 'cumin', 'cuny', 'cunet', 'cunts', 'cupel', 'cupid', 'cuppa', 'cuppy', 'curat', 'curbs', 'curch', 'curds', 'curdy', 'cured', 'curer', 'cures', 'curet', 'cures', 'curia', 'curie', 'curio', 'curli', 'curis', 'curly', 'curs', 'curny', 'currs', 'curry', 'curse', 'cursi', 'curst', 'curve', 'curvy', 'cusec', 'cushy', 'cusks', 'cusps', 'cusso', 'cutch', 'cuter', 'cutes', 'curey', 'cutte', 'cutin', 'cutis', 'cuto', 'tup', 'cuvee', 'cwtch', 'cyano', 'cyans', 'cyber', 'cycad', 'cycas', 'cycle', 'cyclo', 'cyder', 'cylix', 'cymae', 'cymar', 'cymas', 'cymes', 'cymol', 'cynic', 'cysts', 'cytes', 'cyton', 'czars', 'dabba', 'daces', 'dacha', 'dacks', 'dadah', 'dadas', 'daddy', 'dados', 'daffs', 'daffy', 'dagga', 'daggy', 'dagos', 'dahls', 'dally', 'daine', 'daint', 'dairy', 'daisy', 'daker', 'daled', 'dales', 'dalis', 'dagos', 'dahls', 'daily', 'daine', 'daint', 'dairy', 'daisy', 'daker', 'daled', 'dales', 'dalis', 'dalle', 'dally', 'dalis', 'daman', 'damar', 'dames', 'damme', 'damns', 'damps', 'dampy', 'dance', 'dandy', 'dangs', 'danio', 'danks', 'danny', 'dants', 'daraf', 'darbs', 'darcy', 'dared', 'darer', 'dares', 'darga', 'dargs', 'daric', 'daris', 'darks', 'darky', 'darns', 'darre', 'darts', 'darzi', 'dashi', 'dashy', 'datal', 'dated', 'dater', 'dates', 'datos', 'datto', 'datum', 'daube', 'daubs', 'dauby', 'dauds', 'dauli', 'daunt', 'daurs', 'dauts', 'daven', 'davit', 'dawah', 'dawds', 'dawed', 'dawen', 'dawks', 'dawns', 'dats', 'dayan', 'daych', 'daynt', 'dazed', 'dazer', 'dazes', 'deads', 'dear', 'deals', 'deali', 'deans', 'deare', 'dear', 'dears', 'deary', 'deash', 'death', 'deave', 'deaws', 'deawy', 'debag', 'debar', 'debby', 'debel', 'debes', 'debit', 'debts', 'debud', 'debug', 'debus', 
'debut', 'debye', 'decad', 'decaf', 'decal', 'decay', 'decko', 'decks', 'decor', 'decos', 'decoy', 'decri', 'deed', 'deeds', 'deedy', 'defly', 'deems', 'dees', 'deeps', 'deere', 'deers', 'deets', 'deeve', 'deevs', 'defat', 'defer', 'deffo', 'defis', 'defog', 'degas', 'degum', 'deice', 'deids', 'deify', 'deign', 'deils', 'deism', 'deist', 'deity', 'deked', 'dekes', 'dekko', 'delay', 'deled', 'deles', 'delfs', 'delft', 'delis', 'dells', 'delly', 'delos', 'delph', 'delta', 'delts', 'delve', 'deman', 'demes', 'demic', 'demit', 'demob', 'demon', 'demos', 'dempt', 'demur', 'denar', 'denay', 'denes', 'denet', 'denim', 'denis', 'dense', 'dents', 'doxy', 'depot', 'depth', 'derat', 'deray', 'derby', 'dered', 'deres', 'derig', 'derma', 'derms', 'derns', 'deros', 'derro', 'derry', 'derth', 'dervs', 'desex', 'deshi', 'desks', 'desse', 'deter', 'detox', 'deuce', 'devas', 'devel', 'devil', 'devon', 'devot', 'dewan', 'dewar', 'dewax', 'dewed', 'dexes', 'dexte', 'dhaks', 'dhals', 'dhobi', 'dhole', 'dholl', 'dhols', 'dhoti', 'dhows', 'dhuti', 'diact', 'dials', 'diary', 'diazo', 'dibbs', 'diced', 'dicer', 'dices', 'dicey', 'dicht', 'dicks', 'dicky', 'dicot', 'dicta', 'dicts', 'dicty', 'diddy', 'didie', 'didos', 'didst', 'diebs', 'diene', 'diets', 'diffs', 'dight', 'digit', 'dikas', 'diked', 'diker', 'dikes', 'dikey', 'dildo', 'dilli', 'dills', 'dilly', 'dimer', 'dimes', 'dimly', 'dimps', 'dinar', 'dined', 'diner', 'dines', 'dinge', 'dingo', 'dings', 'dingy', 'dinic', 'dinks', 'dinky', 'dinna', 'dinos', 'dints', 'diode', 'diols', 'diota', 'dippy', 'dipso', 'diram', 'direr', 'dirge', 'dire', 'dirks', 'diris', 'dirts', 'dirty', 'disas', 'disct', 'disco', 'discs', 'dishy', 'disks', 'disme', 'dital', 'ditas', 'ditch', 'dited', 'dites', 'ditsy', 'ditto', 'ditts', 'ditty', 'ditzy', 'divan', 'divas', 'dived', 'diver', 'dives', 'divis', 'divot', 'divvy', 'diwan', 'dixie', 'dixit', 'dizen', 'dizzy', 'djinn', 'dins', 'doabs', 'doats', 'dobby', 'dobie', 'dobra', 'dobro', 'dochi', 'docks', 'docos', 'doddy', 'dodge', 'dodgy', 'dodos', 'does', 'doers', 'doest', 'doeth', 'doffs', 'doges', 'dogey', 'doggo', 'doggy', 'dogie', 'dogma', 
'dohyo', 'doilt', 'doily', 'doing', 'doits', 'dojos', 'dolce', 'dolci', 'doled', 'doles', 'dolia', 'dolls', 'dolly', 'dolma', 'dolor', 'dolos', 'dolts', 'domal', 'domed', 'domes', 'domic', 'donah', 'donas', 'donee', 'doner', 'donga', 'dongs', 'donko', 'donna', 'donne', 'donny', 'donor', 'donsy', 'donut', 'doobs', 'doody', 'dooks', 'doole', 'dools', 'dooly', 'dooms', 'doomy', 'doona', 'door', 'doors', 'doozy', 'dopas', 'doped', 'doper', 'dopes', 'dopey', 'dorad', 'dorba', 'dorbs', 'doree', 'doric', 'doris', 'dorks', 'dorky', 'dorms', 'dormy', 'dorps', 'dorrs', 'dorsa', 'dorse', 'doris', 'dorty', 'dosed', 'dose', 'doser', 'doses', 'dotal', 'doted', 'doter', 'dotes', 'dotty', 'douar', 'doubt', 'douce', 'doucs', 'dough', 'douks', 'doula', 'douma', 'doums', 'doups', 'doura', 'douse', 'douts', 'doved', 'doven', 'dover', 'doves', 'dovie', 'dowar', 'dowds', 'dowdy', 'dowed', 'dowel', 'dower', 'dowie', 'dowle', 'dowls', 'dowly', 'downa', 'downs', 'downy', 'dowps', 'dowry', 'dowse', 'dowts', 'doxie', 'doyen', 'doyty', 'dozed', 'dozen', 'dozer', 'dozes', 'drabs', 'drack', 'draco', 'drafe', 'drags', 'dratt', 'drat', 'drake', 'drama', 'drams', 'drank', 'drat', 'drape', 'draps', 'drats', 'drave', 'drawl', 'drawn', 'draws', 'drays', 'dread', 'dream', 'drear', 'dreck', 'dreed', 'drees', 'dregs', 'dreks', 'drent', 'drere', 'dress', 'drest', 'dreys', 'dribs', 'drice', 'dried', 'drier', 'dries', 'drift', 'driii', 'drily', 'drink', 'drips', 'dript', 'drive', 'droid', 'droti', 'drott', 'drole', 'droll', 'drome', 'drone', 'drony', 'droob', 'droog', 'drook', 'drool', 'droop', 'drops', 'dropt', 'dross', 'drouk', 'drove', 'drown', 'drows', 'drubs', 'drugs', 'druid', 'drums', 'drunk', 'drupe', 'druse', 'drusy', 'druxy', 'dryad', 'dryer', 'dryly', 'dsobo', 'dsomo', 'duads', 'duals', 'duans', 'duars', 'dubro', 'ducat', 'duces', 'duchy', 'ducks', 'ducky', 'ducts', 'duddy', 'duded', 'dudes', 'duels', 'duets', 'duett', 'duffs', 'dufus', 'duing', 'duits', 'dukas', 'duked', 'dukes', 'dukka', 'dules', 'dulia', 'dulls', 'dully', 'dulse', 'dumas', 'dumbo', 'dumbs', 'dumka', 'dumky', 'dummy', 'dumps', 'dumpy', 'dunam', 'dunce', 
'dunch', 'dunes', 'dungs', 'dungy', 'dunks', 'dunno', 'dunny', 'duns', 'dunts', 'duomt', 'duomo', 'duped', 'duper', 'dupes', 'duple', 'duply', 'duppy', 'dural', 'duras', 'dured', 'dures', 'durgy', 'durns', 'duroc', 'duros', 'duroy', 'durra', 'durry', 'durst', 'durum', 'durzi', 'dusks', 'dusky', 'dusts', 'dusty', 'dutch', 'duvet', 'duxes', 'dwall', 'dwale', 'dwalm', 'dwams', 'dwang', 'dwarf', 'dwalm', 'dweeb', 'dwell', 'dwelt', 'dwile', 'dwine', 'dyads', 'dyers', 'dying', 'dyked', 'dykes', 'dykey', 'dynel', 'dynes', 'dzhos', 'dwile', 'dwine', 'dyads', 'dyers', 'dying', 'dyked', 'dykes', 'dykey', 'dynel', 'dynes', 'dzhos', 'eager', 'eagle', 'eagre', 'ales', 'eaned', 'eards', 'eared', 'earls', 'early', 'earns', 'earst', 'earth', 'eased', 'easel', 'easer', 'eases', 'easle', 'easts', 'eaten', 'eater', 'eathe', 'eaved', 'eaves', 'ebbed', 'ebbet', 'ebons', 'ebony', 'ebook', 'ecads', 'eched', 'eches', 'echos', 'eclat', 'ecrus', 'edema', 'edged', 'edger', 'edges', 'edict', 'edify', 'edile', 'edits', 'educe', 'educt', 'eejit', 'eerie', 'eeven', 'eevns', 'effed', 'egads', 'egers', 'egest', 'eggar', 'egged', 'egger', 'egmas', 'egret', 'ehing', 'eider', 'fidos', 'eight', 'eigne', 'eiked', 'ikon', 'eilds', 'eisel', 'eject', 'eking', 'ekkas', 'elain', 'eland', 'elans', 'elate', 'elbow', 'elchi', 'elder', 'eldin', 'elect', 'elegy', 'elemi', 'elfed', 'elfin', 'eliad', 'elide', 'lint', 'elite', 'elmen', 'eloge', 'elogy', 'eloin', 'elope', 'elops', 'elpee', 'elsin', 'elude', 'lute', 'elvan', 'elver', 'elves', 'emacs', 'emati', 'embar', 'embay', 'embed', 'ember', 'ebog', 'embow', 'embox', 'embus', 'emcee', 'emeer', 'emend', 'emery', 'emeus', 'emirs', 'emits', 'emmas', 'emmer', 'emmet', 'emmew', 'emmys', 'emong', 'emote', 'emove', 'empts', 'empty', 'emule', 'emure', 'emyde', 'emyds', 'enact', 'enarm', 'enate', 'ended', 'ender', 'endew', 'endow', 'endue', 'enema', 'enemy', 'enews', 'enfix', 'eniac', 'enjoy', 'enlit', 'enmew', 'ennog', 'ennui', 'enoki', 'enols', 'enorm', 'enow', 'enrol', 'ensew', 'ensky', 'ensue', 'enter', 'entia', 'entry', 'enure', 'envoi', 'envoy', 'enzym', 'eoris', 'eosin', 'pact', 'epees', 'ephah', 
'ephas', 'ephod', 'ephor', 'epics', 'epoch', 'epode', 'epopt', 'epoxy', 'epris', 'eprom', 'eoual', 'eouid', 'equip', 'erase', 'erbia', 'erect', 'erevs', 'ergon', 'ergos', 'ergot', 'erica', 'erick', 'erics', 'ering', 'erned', 'ernes', 'erode', 'erose', 'erred', 'error', 'erses', 'eruct', 'erugo', 'erupt', 'eruvs', 'erven', 'ervil', 'escar', 'escot', 'esile', 'eskar', 'esker', 'esnes', 'essay', 'esses', 'ester', 'estoc', 'estop', 'estro', 'etage', 'etape', 'etats', 'etens', 'ethal', 'ether', 'ethic', 'ethos', 'ethyl', 'etnas', 'ettin', 'ettle', 'etude', 'etuis', 'etwee', 'etyma', 'eughs', 'euked', 'eupad', 'euros', 'eusol', 'evade', 'evens', 'event', 'evert', 'every', 'evets', 'evhoe', 'evict', 'evils', 'evite', 'evohe', 'evoke', 'ewers', 'ewest', 'ewhow', 'ewked', 'exact', 'exalt', 'exams', 'excel', 'exeat', 'execs', 'exeem', 'exeme', 'exert', 'exies', 'extif', 'exine', 'exing', 'exist', 'exits', 'exode', 'exons', 'expat', 'expel', 'expos', 'extoi', 'extra', 'exude', 'exuls', 'exuli', 'exurb', 'eyass', 'eyes', 'eying', 'eyots', 'eras', 'eyres', 'eyrie', 'eyrir', 'fable', 'faced', 'facer', 'faces', 'facet', 'facia', 'facts', 'faddy', 'faded', 'fader', 'fades', 'fadge', 'fados', 'faena', 'faery', 'faffs', 'faggy', 'fagin', 'fagot', 'faiks', 'fails', 'faine', 'fans', 'faint', 'fairs', 'fairy', 'faith', 'faked', 'faker', 'fakes', 'fakey', 'fakir', 'falaj', 'falls', 'false', 'famed', 'fames', 'fanal', 'fancy', 'fands', 'fanes', 'fanga', 'fango', 'fangs', 'fanks', 'fanny', 'fanon', 'fanos', 'fanum', 'facir', 'farad', 'farce', 'farci', 'farcy', 'fards', 'fared', 'farer', 'fares', 'farle', 'farls', 'farms', 'faros', 'farse', 'faris', 'fasci', 'fasti', 'fasts', 'fatal', 'fated', 'fates', 'fatly', 'fatso', 'fatty', 'fatwa', 'faugh', 'fauld', 'fault', 'fauna', 'fauns', 'faurd', 'fauts', 'fauve', 'favas', 'favel', 'faver', 'faves', 'favor', 'favus', 'fawns', 'fawny', 'faxed', 'faxes', 'fayed', 'fayer', 'fayne', 'fayre', 'fazed', 'fazes', 'feals', 'fare', 'fears', 'fease', 'feast', 'feats', 'feaze', 'fecal', 'feces', 'fechi', 'fectt', 'fecks', 'fedex', 'feebs', 'feeds', 'feeis', 'feens', 'feers', 'feese', 
'feeze', 'feume', 'feign', 'feint', 'feist', 'felid', 'fella', 'felis', 'felly', 'felon', 'felts', 'felty', 'femal', 'femes', 'femme', 'femmy', 'femur', 'fence', 'fends', 'fendy', 'fenis', 'fenks', 'fenny', 'fents', 'feods', 'feoff', 'feral', 'ferer', 'feres', 'feria', 'ferly', 'fermi', 'ferms', 'ferns', 'ferny', 'ferry', 'fesse', 'festa', 'fests', 'festy', 'fetal', 'fetas', 'fetch', 'feted', 'fetes', 'fetid', 'fetor', 'femma', 'fetts', 'fetus', 'fetwa', 'felar', 'feuds', 'frued', 'fever', 'fewer', 'feved', 'feyer', 'feyly', 'fezes', 'fezzy', 'fiars', 'fiats', 'fiber', 'fibre', 'fibro', 'fices', 'fiche', 'fichu', 'ficin', 'ficos', 'ficus', 'fidge', 'fidos', 'fiefs', 'field', 'fiend', 'fient', 'fiere', 'fiers', 'fiery', 'fiest', 'fifed', 'fifer', 'fifes', 'fifth', 'fifty', 'fight', 'figos', 'fiked', 'fikes', 'filar', 'filch', 'filed', 'filer', 'files', 'filet', 'fille', 'fillo', 'fills', 'filly', 'filmi', 'films', 'filmy', 'filos', 'filth', 'filum', 'final', 'finca', 'finch', 'finds', 'fined', 'finer', 'fines', 'finis', 'finks', 'finny', 'finos', 'fiord', 'fioue', 'fired', 'firer', 'fires', 'trie', 'firks', 'firms', 'firs', 'firry', 'first', 'firth', 'fiscs', 'fishy', 'fisks', 'fists', 'fisty', 'fitch', 'fitly', 'fitna', 'fitte', 'fitts', 'fiver', 'fives', 'fixed', 'fixer', 'fixes', 'fixit', 'fizzy', 'fjeld', 'fjord', 'flabs', 'flack', 'flaff', 'flags', 'flail', 'flair', 'flake', 'flaks', 'flaky', 'flame', 'flamm', 'flams', 'flamy', 'flank', 'flans', 'flaps', 'flare', 'flary', 'flash', 'flask', 'flats', 'flawn', 'flaws', 'flawy', 'flaxy', 'flays', 'fleam', 'fleas', 'fleck', 'fleer', 'flees', 'fleet', 'flegs', 'fleme', 'flesh', 'flews', 'flexo', 'fleys', 'flick', 'flics', 'flied', 'flier', 'flies', 'flimp', 'flims', 'fling', 'flint', 'flips', 'flirs', 'flirt', 'flisk', 'flite', 'flits', 'flitt', 'float', 'flock', 'flocs', 'floes', 'flogs', 'flong', 'flood', 'floor', 'flops', 'flora', 'flors', 'flory', 'flosh', 'floss', 'flota', 'flote', 'flour', 'flout', 'flown', 'flows', 'flubs', 'flued', 'flues', 'fluey', 'fluff', 'fluid', 'fluke', 'fluky', 'flume', 'flump', 'flung', 'flunk', 'fluor', 'flurr', 
'flush', 'flute', 'fluty', 'fluyt', 'flyby', 'flyer', 'flype', 'flyte', 'foals', 'foams', 'foamy', 'focal', 'focus', 'foehn', 'fogey', 'foggy', 'fogie', 'fogle', 'fohns', 'foids', 'foils', 'foins', 'foist', 'folds', 'foley', 'folia', 'folic', 'folie', 'folio', 'folks', 'folky', 'folly', 'fomes', 'fonda', 'fonds', 'fondu', 'fonly', 'fonts', 'foods', 'foody', 'fools', 'foots', 'footy', 'foram', 'foray', 'forbs', 'forby', 'force', 'fordo', 'fords', 'forel', 'fores', 'forex', 'forge', 'forgo', 'forks', 'forky', 'forme', 'forms', 'forte', 'forth', 'forts', 'forty', 'forum', 'forza', 'forze', 'fossa', 'fosse', 'fouat', 'fouds', 'fouer', 'fouet', 'foule', 'fouls', 'found', 'fount', 'fours', 'fouth', 'fovea', 'fowls', 'fowth', 'foxed', 'foxes', 'foxie', 'foyer', 'foyle', 'foyne', 'frabs', 'frack', 'fract', 'frags', 'frail', 'fraim', 'frame', 'franc', 'frank', 'frape', 'fraps', 'frass', 'frate', 'frati', 'frats', 'fraud', 'fraus', 'frays', 'freak', 'freed', 'freer', 'frees', 'freet', 'freit', 'fremd', 'frena', 'freon', 'frere', 'fresh', 'frets', 'friar', 'fribs', 'fried', 'frier', 'fries', 'frigs', 'frill', 'frise', 'frisk', 'frist', 'frith', 'frits', 'fritt', 'fritz', 'frize', 'frizz', 'frock', 'froes', 'frogs', 'frond', 'frons', 'front', 'frore', 'frorn', 'frory', 'frosh', 'frost', 'froth', 'frown', 'frows', 'frowy', 'froze', 'frugs', 'fruit', 'frump', 'frush', 'frust', 'fryer', 'fubar', 'fubby', 'fubsy', 'fucks', 'fucus', 'fuddy', 'fudge', 'fuels', 'fuero', 'fuffs', 'fuffy', 'fugal', 'fuggy', 'fugie', 'fugio', 'fugle', 'fugly', 'fugue', 'fugus', 'fujis', 'fulls', 'fully', 'fumed', 'fumer', 'fumes', 'fumet', 'fundi', 'funds', 'fundy', 'fungi', 'fungo', 'fungs', 'funks', 'funky', 'funny', 'fural', 'furan', 'furca', 'furls', 'furol', 'furor', 'furrs', 'furry', 'furth', 'furze', 'furzy', 'fused', 'fusee', 'fusel', 'fuses', 'fusil', 'fussy', 'fusts', 'fusty', 'futon', 'fuzed', 'fuzee', 'fuzes', 'fuzil', 'fuzzy', 'fyces', 'fyked', 'fykes', 'fyles', 'fyrds', 'fytte', 'gabby', 'gable', 'gaddi', 'gades', 'gadge', 'gadid', 'gadis', 'gadje', 'gadjo', 'gadso', 'gaffe', 'gaffs', 'gaged', 'gager', 'gages', 'gaids', 
'gaily', 'gains', 'gairs', 'gaits', 'gaitt', 'gajos', 'galah', 'galas', 'galax', 'galea', 'gales', 'galls', 'gally', 'galop', 'galut', 'galvo', 'gamas', 'gamay', 'gamba', 'gambe', 'gambo', 'gambs', 'gamed', 'gamer', 'games', 'gamey', 'gamic', 'gamin', 'gamma', 'gamme', 'gammy', 'gamps', 'gamut', 'ganch', 'gandy', 'ganef', 'ganev', 'gangs', 'ganja', 'ganof', 'gants', 'gaols', 'gaped', 'gaper', 'gapes', 'gapos', 'gappy', 'garbe', 'garbo', 'garbs', 'garda', 'garis', 'garni', 'garre', 'garth', 'garum', 'gases', 'gasps', 'gaspy', 'gassy', 'gasts', 'gated', 'gater', 'gates', 'gaths', 'gator', 'gaucy', 'gauds', 'gaudy', 'gauge', 'gauje', 'gault', 'gaums', 'gaumy', 'gaunt', 'gaups', 'gaurs', 'gauss', 'gauze', 'gauzy', 'gavel', 'gavoi', 'gawcy', 'gawds', 'gawks', 'gawky', 'gawps', 'gawsy', 'gayal', 'gayer', 'gayly', 'gazal', 'gazar', 'gazed', 'gazer', 'gazes', 'gazon', 'gazoo', 'geals', 'geans', 'geare', 'gears', 'geats', 'gebur', 'gecko', 'gecks', 'geeks', 'geeky', 'geeps', 'geese', 'geest', 'geist', 'geits', 'gelds', 'glee', 'gelid', 'gelly', 'gelts', 'gemel', 'gemma', 'gemmy', 'gemot', 'genal', 'genas', 'genes', 'genet', 'genic', 'genie', 'genii', 'genip', 'genny', 'genoa', 'genom', 'genre', 'genro', 'gents', 'genty', 'genua', 'genus', 'geode', 'geoid', 'gerah', 'gerbe', 'geres', 'gerie', 'germs', 'germy', 'gerne', 'gesse', 'gesso', 'geste', 'gests', 'getas', 'getup', 'geums', 'geyan', 'ghast', 'ghats', 'ghaut', 'ghazi', 'ghees', 'ghost', 'ghoul', 'ghyli', 'giant', 'gibed', 'gibel', 'giber', 'gibes', 'gibli', 'gibus', 'giddy', 'gifts', 'gigas', 'gighe', 'gigot', 'gigue', 'gilas', 'gilds', 'gilet', 'gills', 'gilly', 'gilpy', 'gilts', 'gimel', 'gimme', 'gimps', 'gimpy', 'ginge', 'gings', 'ginks', 'ginny', 'ginzo', 'gipon', 'gippo', 'gippy', 'gipsy', 'girds', 'giris', 'girly', 'girns', 'giron', 'giros', 'girrs', 'girse', 'girth', 'girts', 'gismo', 'gisms', 'gists', 'gites', 'giust', 'gived', 'given', 'giver', 'gives', 'gizmo', 'glace', 'glade', 'glads', 'glady', 'glaik', 'glair', 'glams', 'gland', 'glans', 'glare', 'glary', 'glass', 'glaum', 'glaur', 'glaze', 'glazy', 'gleam', 'glean', 'gleba', 'glebe', 
'gleby', 'glee', 'gleds', 'gleed', 'geek', 'glees', 'gleet', 'gleis', 'glens', 'glent', 'gleys', 'glial', 'glias', 'glib', 'glide', 'gliff', 'glift', 'glike', 'glim', 'glime', 'glims', 'glint', 'glisk', 'glits', 'glitz', 'gloam', 'gloat', 'globe', 'globi', 'globs', 'globy', 'glode', 'glogg', 'gloms', 'gloom', 'gloop', 'glops', 'glory', 'gloss', 'glost', 'glout', 'glove', 'glows', 'gloze', 'glued', 'gluer', 'glues', 'gluey', 'glugs', 'glume', 'glums', 'gluon', 'glute', 'gluts', 'glyph', 'gnarl', 'gnarr', 'gnars', 'gnash', 'gnats', 'gnawn', 'gnaws', 'gnome', 'gnows', 'goads', 'goafs', 'goals', 'goary', 'goats', 'goaty', 'goban', 'gobbi', 'gobbo', 'gobby', 'gobos', 'godet', 'godly', 'godso', 'goels', 'goers', 'goety', 'gofer', 'goes', 'gogga', 'gogos', 'goier', 'going', 'golds', 'goldy', 'golem', 'goles', 'golfs', 'golly', 'golpe', 'golps', 'gombo', 'gomer', 'gompa', 'gonad', 'gonef', 'goner', 'gongs', 'gonia', 'gonif', 'gonks', 'gonna', 'goof', 'gonys', 'gonzo', 'gooby', 'goods', 'goody', 'gooey', 'goofs', 'goofy', 'goog', 'gooks', 'gooky', 'goold', 'gools', 'gooly', 'goons', 'goony', 'goops', 'goopy', 'goors', 'goory', 'goose', 'goosy', 'gopak', 'gopik', 'goral', 'goras', 'gored', 'gores', 'gorge', 'goris', 'gorms', 'gormy', 'gorps', 'gorse', 'gorsy', 'gosht', 'gosse', 'goths', 'gotta', 'gouge', 'gouks', 'goura', 'gourd', 'gouts', 'gouty', 'gowan', 'gowds', 'gowfs', 'gowks', 'gowls', 'gowns', 'goxes', 'goyim', 'graal', 'grabs', 'grace', 'grade', 'grads', 'graff', 'graft', 'grail', 'grain', 'graip', 'grama', 'grame', 'gramp', 'grams', 'grana', 'grand', 'grans', 'grant', 'grape', 'graph', 'grapy', 'grasp', 'grass', 'grate', 'grave', 'gravs', 'gravy', 'grays', 'graze', 'great', 'grebe', 'grece', 'greed', 'greek', 'green', 'grees', 'greet', 'grege', 'grego', 'grein', 'grens', 'grenz', 'grese', 'greve', 'grews', 'greys', 'grice', 'gride', 'grids', 'grief', 'griff', 'grift', 'grigs', 'grike', 'grill', 'grime', 'grimy', 'grind', 'grins', 'griot', 'gripe', 'grips', 'gript', 'gripy', 'grise', 'grist', 'grisy', 'grith', 'grits', 'grize', 'groan', 'groat', 'grody', 'grody', 'grogs', 'groin', 'groks', 'groma',
'grona', 'grone', 'groof', 'groom', 'grope','gross', 'grosz', 'grots', 'grouf', 'group', 'grout', 'grove', 'growl', 'grown', 'grows', 'grubs', 'grued', 'gruel', 'grues', 'grufe', 'gruff', 'grume', 'grump', 'grunt', 'gryce', 'gryde', 'gryke', 'grype', 'grypt', 'guaco', 'guana', 'guano', 'guans', 'guard', 'guars', 'guava', 'gucks', 'gucky', 'gudes', 'guess', 'guest', 'guffs', 'gugas', 'guide', 'guids', 'guild', 'guile', 'guilt', 'guimp', 'guiro', 'guise', 'gulag', 'gular', 'gulas', 'gulch', 'gules', 'gulfs', 'gulfy', 'gulls', 'gully', 'gulph', 'gulps', 'gulpy', 'gumbo', 'gumma', 'gummy', 'gumps', 'gundy', 'gunge', 'gungy','gunks','gunky','gunny','guppy','gurge','gurls','gurly','gurns','gurry','gursh','gurus','gushy','gusla','gusle','gusli','gussy','gusto','gusts','gusty','gutsy','gutta','gutty','guyed','guyle','guyot','guyse','gwine','gyals','gybed','gybes','gyeld','gymps','gynae','gynie','gynny','gyoza','gyppo','gyppy','gypsy','gyral','gyred','gyres','gyron','gyros','gyrus','gytes','gyved','gyves','haafs','haars','habit','hable','habus','hacek','hacks','hadal','haded','hades','hadji','hadst','haems','haets','haffs','hafiz','hafts','haggs','hahas','haick','haika','haiks','haiku','hails','haily','hains','haint','hairs','hairy','haith','hajes','hajis','hajji','hakam','hakas','hakea','hakes','hakim','hakus','halal','haled','haler','hales','halfa','halfs','halid','hallo','halls','halma','halms','halon','halos','halse','halts','halva','halve','hamal','hamba','hamed','hames','hammy','hamza','hanap','hance','hanch','hands','handy','hangi','hangs','hanks','hanky','hansa','hanse','hants','haole','haoma','hapax','haply','happy','hapus','haram','hards','hardy','hared','harem','hares','harim','harks','harls','harms','harns','haros','harps','harpy','harry','harsh','harts','hashy','hasks','hasps','hasta','haste','hasty','hatch','hated','hater','hates','hatha','hauds','haufs','haugh','hauld','haulm','hauls','hault','haunt','hause','haute','haven','haver','haves','havoc','hawed','hawks','hawms','hawse','hayed','hayer','hayey','hayle','hazan','hazed','hazel','hazer','hazes','heads', 'heady', 'heald', 'heals', 'hame',
'heaps', 'heapy', 'heard', 'heare', 'hears', 'heart', 'heast', 'heath', 'heats', 'heave', 'heavy', 'heben', 'hebes', 'hecht', 'hecks', 'heder', 'hedge', 'hedgy', 'heeds', 'heedy', 'heels', 'heeze', 'hefte', 'hefts', 'hefty', 'heids', 'heigh', 'heils', 'heirs', 'heist', 'hejab', 'heura', 'heled', 'heles', 'helio', 'helix', 'hello', 'hells', 'helms', 'ios', 'helot', 'helps', 'heiyr','r', 'hemal', 'hemes', 'hemic', 'hemin', 'hemps', 'hempy', 'hence', 'hends', 'henge', 'henna', 'henny', 'henry', 'hets', 'hepar', 'herbs', 'herby', 'herds', 'heres', 'herls', 'herma', 'herms', 'herns', 'here', 'heron', 'heros', 'herry', 'herse', 'hertz', 'herye', 'hesps', 'hests', 'hetes', 'heths', 'heuch', 'heugh', 'hevea', 'hewed', 'hewer', 'hewgh', 'hexad', 'hexed', 'hexer', 'hexes', 'hexyl', 'heyed', 'hiant', 'hicks', 'hided', 'hider', 'hides','hiems','highs','hight','hijab','hijra','hiked','hiker','hikes','hikoi','hilar','hilch','hillo','hills', 'hilly', 'hilts', 'hilum', 'hilus', 'himbo', 'hinau', 'hinds', 'hinge', 'hings', 'hinky', 'hinny', 'hints', 'hiois', 'hiply', 'hippo', 'hippy', 'hired', 'hire', 'hirer', 'hires', 'hissy', 'hists', 'hitch', 'hithe', 'hived', 'hiver', 'hives', 'hizen', 'hoaed','hoagy', 'hoard', 'hoars', 'hoary', 'hast', 'hobby', 'hobos', 'hocks', 'hocus', 'hodad', 'hodja', 'hoers', 'hogan', 'hogen', 'hoggs', 'hoghs', 'hohed', 'hoick', 'hoiks', 'hoing', 'hoise', 'hoist', 'hoked', 'hokes', 'hokey', 'hokis', 'hokku', 'hokum', 'holds', 'holed', 'holes', 'holey', 'holks', 'holla', 'hollo', 'holly', 'holms', 'hoton', 'hotts', 'homas', 'homed', 'homer', 'homes', 'homey', 'homte', 'honue', 'homos', 'honan', 'honda', 'honds', 'honed', 'honer', 'hones', 'honey', 'hongi', 'hongs', 'honks', 'honky', 'honor', 'hooch', 'hoods', 'hoody', 'hooey', 'hoofs', 'hooka', 'hooks', 'hooky', 'hooly', 'hoons', 'hoops', 'hoord', 'hoosh', 'hoots', 'hooty', 'hoove', 'hoped', 'hoper', 'hopes', 'hoppy', 'horah', 'horat', 'horas', 'horde', 'horis', 'horme', 'horns', 'horny', 'horse', 'horst', 'horsy', 'hosed', 'hosel', 'hosen', 'hoser', 'hoses', 'hosey', 'hosta', 'hosts', 'hotch', 'hotel', 'hoten', 'hotly', 'hotty', 'houff',
'houfs', 'hough', 'hound', 'houri', 'hours', 'house', 'houts', 'hovea', 'hoved', 'hover', 'hoven', 'hover', 'hoves', 'howbe', 'howdy', 'howes', 'howff', 'howfs', 'howks','howls',

]

// Making an array list for the tardle words
let words = [
    // 2 letter words
    'UL','Rj',

    // 3 letter words
    'Dey','SRC','Pit','Maw','Tez','Rah','TRU','CCS','ARS', 'SAE', 'PID',

    // 4 letter words
    'Hojo', 'Cobb', 'Rams', 'Navy', 'Quad', 'Yopo', 'Buns', 'Dook', 'Maye', 'Mack', 'Pete', 'Seth', 'Blue', 'Topo',
    'Bolo', 'Well', 'ROTC', 'LWOC', 'LDOC', 'FDOC', 'FWOC', 'Yaya', 'Moge', 'Cuab', 'SASB',


    // 5 letter words
    'Davis', 'Ehaus', 'Avery', 'Koury', 'Hanes', 'Kenan', 'Lewis', 'Manly', 'Stacy', 'Kevin', 'Davie', 'Karen', 'Union', 'Chase', 'Adams', 'Canes', 'Roots',
    'Wheat', 'Heels', 'Manek', 'Coker', 'Baity', 'Dames', 'Momos', 'Playa', 'onyen',

    // 6 letter words
    'Wilson', 'Craige', 'Parker', 'Teague', 'Graham', 'Murray', 'Genome', 'Cocker', 'Connor', 'Grimes', 'Hardin', 'Horton', 'Mangum', 'Mciver',
    'Fetzer', 'Hooker', 'Lenoir', 'Kurama', 'Panera', 'Target', 'Subway', 'Bulbox', 'Ramses', 'Jordan', 'Ruffin', 'Aycock', 'Joyner',
    'Howell', 'Alumni', 'Junior', 'Senior', 'Lindas', 'Cosmic', 'Yikyak', 'canvas',


    // 7 letter words
    'Philips', 'Carroll', 'Gardner', 'Everett', 'Spencer', 'Winston', 'Woollen', 'Peabody', 'Chapman', 'Hussman', 'Hibachi', 'Bonchon', 'Chimney', 'Tarheel', 'tarheel',
    'GDTBATH', 'Supdogs', 'Rameses', 'Manning', 'Caudill', 'Bingham', 'Murphey', 'Kessing', 'Vimalas', 'Suttons', 'Bschool',

    // 8 letter words
    'Morrison', 'Carolina', 'Greenlaw', 'Alderman', 'Mclinton', 'Hamilton', 'Caldwell', 'Dorrance', 'Franklin', 'Gillings', 'Eshelman', 'Insomnia', 'Epilogue',
    'Cholanad', 'Meantime', 'Chipotle', 'Basecamp', 'Bandidos', 'Carolina', 'Whistler', 'Preacher', 'Safewalk', 'Mitchell', 'Morehead', 'Freshman', 'QueChula',
    'Football', 'FookDook', 'DukeFuke', 'Morehead',


    // 9 letter words
    'Sitterson', 'Granville', 'Alexander', 'Starbucks', 'Bojangles', 'Coldstone', 'Streaking', 'Stilllife', 'Arboretum', 'Sophomore', 'Spicynine',
    'Campusrec', 'fratcourt'
]
  

  let guesses = [];
  let currentGuess = [];
  let tries = 0;
  // Expose guesses to global scope for share function
  window.guesses = guesses;
  const maxTries = 6;
  let isLoggedIn = false;
  let currentUser = null;
  let gamesPlayed = 0;
  let gamesWon = 0;
  let currentStreak = 0;
  let maxStreak = 0;
  
  // Initialize Firebase auth state
  function initializeFirebaseAuth() {
    // Wait for Firebase to be loaded
    const checkFirebase = setInterval(() => {
      if (window.firebaseAuthFunctions && window.firebaseAuth) {
        clearInterval(checkFirebase);
        
        // Set up auth state listener
        window.firebaseAuthFunctions.onAuthStateChanged(window.firebaseAuth, async (user) => {
          if (user) {
            isLoggedIn = true;
            currentUser = user;
            await loadUserStats();
            // Load game state after stats are loaded
            // Wait a bit to ensure DOM is ready
            setTimeout(async () => {
              await loadGameState();
            }, 200);
          } else {
            isLoggedIn = false;
            currentUser = null;
            gamesPlayed = 0;
            gamesWon = 0;
            currentStreak = 0;
            maxStreak = 0;
            // Reset game state for logged out users
            guesses = [];
            window.guesses = guesses; // Update global reference
            currentGuess = [];
            gameStatus = 'in_progress';
            window.gameStatus = gameStatus; // Update global reference
            gameCompleted = false;
            window.gameCompleted = false;
            // Clear the grid and hide popups when logged out
            // Clear all cells
            for (let i = 0; i < NumberOfGuesses; i++) {
              for (let j = 0; j < SecretWord.length; j++) {
                const cell = document.getElementById(`${i}${j}`);
                if (cell) {
                  cell.textContent = '';
                  cell.classList.remove('filled', 'correct', 'found', 'wrong');
                }
              }
            }
            // Hide all popups
            const popupIds = ['answerPopup', 'gameOverPopup', 'transferApplicationPopup', 'resultsPopup', 'statsPopup'];
            popupIds.forEach(popupId => {
              const popup = document.getElementById(popupId);
              if (popup) {
                popup.classList.add('hidden');
                popup.style.display = '';
              }
            });
            // Show keyboard and hide "See results" button
            const keyboard = document.getElementById('keyboard');
            if (keyboard) {
              keyboard.style.display = '';
            }
            const buttonsContainer = document.getElementById('gameOverButtons');
            if (buttonsContainer) {
              buttonsContainer.classList.add('hidden');
              buttonsContainer.style.display = 'none';
            }
          }
        });
      }
    }, 100);
  }
  
  // Initialize Firebase auth when page loads
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeFirebaseAuth);
  } else {
    initializeFirebaseAuth();
  }
  
  // Load user stats from Firestore
  async function loadUserStats() {
    if (!currentUser || !window.firebaseFirestoreFunctions) return;
    
    try {
      const userDocRef = window.firebaseFirestoreFunctions.doc(window.firebaseDb, 'users', currentUser.uid);
      const userDoc = await window.firebaseFirestoreFunctions.getDoc(userDocRef);
      
      if (userDoc.exists()) {
        const data = userDoc.data();
        gamesPlayed = data.gamesPlayed || 0;
        gamesWon = data.gamesWon || 0;
        currentStreak = data.currentStreak || 0;
        maxStreak = data.maxStreak || 0;
        totalPoints = data.points || 0;
        console.log('Stats loaded from Firestore:', { gamesPlayed, gamesWon, currentStreak, maxStreak, totalPoints });
      } else {
        // User document doesn't exist yet - initialize stats to 0
        console.log('User document not found, initializing stats to 0');
        gamesPlayed = 0;
        gamesWon = 0;
        currentStreak = 0;
        maxStreak = 0;
        totalPoints = 0;
      }
    } catch (error) {
      console.error('Error loading user stats:', error);
      // On error, reset to defaults
      gamesPlayed = 0;
      gamesWon = 0;
      currentStreak = 0;
      maxStreak = 0;
      totalPoints = 0;
    }
  }
  
  // Get today's date string (YYYY-MM-DD in local timezone to match home page)
  function getTodayDateString() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  
  // Load saved game state from Firestore
  async function loadGameState() {
    // Check if user is logged in - try multiple ways to get current user
    let user = currentUser;
    if (!user && window.firebaseAuth && window.firebaseAuth.currentUser) {
      user = window.firebaseAuth.currentUser;
      currentUser = user; // Update currentUser for consistency
      isLoggedIn = true;
    }
    
    if (!user || !window.firebaseFirestoreFunctions) {
      console.log('User not logged in, starting fresh game');
      console.log('currentUser:', currentUser);
      console.log('firebaseAuth.currentUser:', window.firebaseAuth?.currentUser);
      return;
    }
    
    try {
      const today = getTodayDateString();
      console.log('Loading game state for date:', today, 'User:', user.uid);
      const gameStateRef = window.firebaseFirestoreFunctions.doc(
        window.firebaseDb, 
        'users', 
        user.uid,
        'dailyGames',
        today
      );
      const gameStateDoc = await window.firebaseFirestoreFunctions.getDoc(gameStateRef);
      
      if (gameStateDoc.exists()) {
        const gameData = gameStateDoc.data();
        console.log('Loading saved game state:', gameData);
        console.log('Loaded gameCompleted from DB:', gameData.gameCompleted);
        
        // Verify the secret word matches (in case date changed)
        // Only reset if the date actually changed (not just on page load)
        if (gameData.secretWord && gameData.secretWord !== SecretWord) {
          console.log('Secret word mismatch - date changed, starting fresh game');
          console.log('Saved word:', gameData.secretWord, 'Current word:', SecretWord);
          // Don't return - allow the game to continue with saved state if it's the same day
          // The date check should happen at midnight, not on every page load
          // For now, if word doesn't match, it means it's a new day, so start fresh
          return;
        }
        
        // If game is completed and it's the same day, show the final screen
        if (gameData.gameCompleted === true && gameData.secretWord === SecretWord) {
          console.log('Game completed for today - will show final screen with all colors');
        }
        
        // Restore game state
        console.log('📥 Loading game data from Firestore:', {
          hasGuesses: !!gameData.guesses,
          guessesType: Array.isArray(gameData.guesses) ? 'array' : typeof gameData.guesses,
          guessesLength: Array.isArray(gameData.guesses) ? gameData.guesses.length : 'N/A',
          gameCompleted: gameData.gameCompleted,
          gameStatus: gameData.gameStatus
        });
        
        if (gameData.guesses && Array.isArray(gameData.guesses) && gameData.guesses.length > 0) {
          // Check if guesses are in the new flat format (with guessIndex) or old nested format
          const firstItem = gameData.guesses[0];
          if (firstItem && typeof firstItem.guessIndex === 'number') {
            // New flat format - reconstruct nested array structure
            const maxGuessIndex = Math.max(...gameData.guesses.map(item => item.guessIndex || 0));
            guesses = [];
            for (let i = 0; i <= maxGuessIndex; i++) {
              const guessItems = gameData.guesses
                .filter(item => item.guessIndex === i)
                .sort((a, b) => (a.itemIndex || 0) - (b.itemIndex || 0))
                .map(item => {
                  // Normalize result to ensure it's a string
                  let resultValue = item.result;
                  if (resultValue === Correct || resultValue === 'correct') {
                    resultValue = 'correct';
                  } else if (resultValue === Found || resultValue === 'found') {
                    resultValue = 'found';
                  } else if (resultValue === Wrong || resultValue === 'wrong') {
                    resultValue = 'wrong';
                  }
                  return {
                    key: item.key || '',
                    result: resultValue || ''
                  };
                });
              if (guessItems.length > 0) {
                guesses.push(guessItems);
              }
            }
          } else if (Array.isArray(firstItem)) {
            // Old nested format (for backward compatibility)
            guesses = gameData.guesses.map(guess => {
              return guess.map(item => {
                // Normalize result to ensure it's a string
                let resultValue = item.result;
                if (resultValue === Correct || resultValue === 'correct') {
                  resultValue = 'correct';
                } else if (resultValue === Found || resultValue === 'found') {
                  resultValue = 'found';
                } else if (resultValue === Wrong || resultValue === 'wrong') {
                  resultValue = 'wrong';
                }
                return {
                  key: item.key || '',
                  result: resultValue || ''
                };
              });
            });
          } else {
            // Single item format (shouldn't happen, but handle it)
            console.warn('⚠️ Unexpected guess format, attempting to reconstruct...');
            guesses = [gameData.guesses.map(item => ({
              key: item.key || '',
              result: item.result || ''
            }))];
          }
          window.guesses = guesses; // Update global reference
          console.log('✅ Restored guesses:', guesses.length, 'guesses');
          if (guesses.length > 0) {
            console.log('First guess example:', guesses[0]);
            console.log('First guess with results:', guesses[0].map(item => `${item.key}:${item.result}`).join(', '));
            console.log('All guesses summary:', guesses.map((g, i) => `Guess ${i+1}: ${g.map(item => `${item.key}(${item.result})`).join(' ')}`));
          }
        } else {
          console.error('❌ No guesses found in gameData or guesses array is empty!');
          console.error('gameData:', gameData);
          guesses = [];
          window.guesses = guesses;
        }
        
        // Only restore currentGuess if game is NOT completed
        // When game is completed, currentGuess should be empty
        if (!gameData.gameCompleted && gameData.currentGuess && Array.isArray(gameData.currentGuess) && gameData.currentGuess.length > 0) {
          currentGuess = gameData.currentGuess.map(item => ({
            key: item.key || '',
            result: item.result || ''
          }));
          console.log('Restored currentGuess:', currentGuess);
        } else {
          // Game is completed or no currentGuess - clear it
          currentGuess = [];
          console.log('Cleared currentGuess (game completed or no current guess)');
        }
        
        gameStatus = gameData.gameStatus || 'in_progress';
        window.gameStatus = gameStatus; // Update global reference
        gameCompleted = gameData.gameCompleted === true; // Explicitly check for true
        window.gameCompleted = gameCompleted; // Update global reference
        console.log('Restored game state:', { gameStatus, gameCompleted, gameDataGameCompleted: gameData.gameCompleted });
        console.log('gameCompleted type:', typeof gameCompleted, 'value:', gameCompleted);
        
        // Restore keyboard state
        if (gameData.keys) {
          Object.keys(gameData.keys).forEach(key => {
            keys[key] = gameData.keys[key];
          });
        }
        
        // Wait a bit to ensure DOM is ready, then display the saved game grid
        // Use a longer delay to ensure grid is fully initialized
        setTimeout(() => {
          console.log('About to call displaySavedGame, gameCompleted:', gameCompleted, 'window.gameCompleted:', window.gameCompleted);
          displaySavedGame();
          
          // Double-check gameCompleted from both sources
          const isCompleted = gameCompleted === true || window.gameCompleted === true;
          console.log('Final check - isCompleted:', isCompleted);
          
          // Ensure keyboard is disabled if game is completed
          if (isCompleted) {
            console.log('Game is completed - disabling keyboard and showing popups');
            updateKeyboard();
            
            // Force hide keyboard with multiple attempts
            const keyboard = document.getElementById('keyboard');
            if (keyboard) {
              keyboard.style.display = 'none';
              keyboard.style.visibility = 'hidden';
              console.log('Keyboard hidden');
            }
            
            // Force show answer popup ONLY if game was lost
            if (gameStatus === 'lost') {
              const answerPopup = document.getElementById('answerPopup');
              const answerMessage = document.getElementById('answerMessage');
              if (answerPopup && answerMessage) {
                answerMessage.innerText = SecretWord;
                answerPopup.classList.remove('hidden');
                answerPopup.style.display = 'flex';
                answerPopup.style.visibility = 'visible';
                answerPopup.style.opacity = '1';
                console.log('Answer popup shown (game lost)');
              }
            } else {
              console.log('Game was won - not showing answer popup');
            }
            
            // Force show "See results" button (primary button only)
            const buttonsContainer = document.getElementById('gameOverButtons');
            if (buttonsContainer) {
              buttonsContainer.classList.remove('hidden');
              buttonsContainer.style.display = 'flex';
              buttonsContainer.style.visibility = 'visible';
              console.log('See results button shown');
            }
            
            // Hide the secondary button container to avoid duplicates
            const seeResultsBtn = document.getElementById('seeResultsBtn');
            if (seeResultsBtn) {
              seeResultsBtn.classList.add('hidden');
              seeResultsBtn.style.display = 'none';
            }
          } else {
            console.log('Game is NOT completed, gameCompleted value:', gameCompleted, 'window.gameCompleted:', window.gameCompleted);
          }
          
          console.log('Game state loaded:', { guesses: guesses.length, currentGuess: currentGuess.length, gameStatus, gameCompleted });
        }, 500);
        
        // Also try again after a longer delay as a fallback
        setTimeout(() => {
          if (gameCompleted === true || window.gameCompleted === true) {
            console.log('Fallback: Re-checking completed game state');
            displaySavedGame();
            const keyboard = document.getElementById('keyboard');
            if (keyboard) keyboard.style.display = 'none';
            // Only show answer popup if game was lost
            if (gameStatus === 'lost') {
              const answerPopup = document.getElementById('answerPopup');
              if (answerPopup) {
                answerPopup.classList.remove('hidden');
                answerPopup.style.display = 'flex';
              }
            }
            const buttonsContainer = document.getElementById('gameOverButtons');
            if (buttonsContainer) {
              buttonsContainer.classList.remove('hidden');
              buttonsContainer.style.display = 'flex';
            }
            
            // Hide the secondary button container to avoid showing duplicate buttons
            const seeResultsBtn = document.getElementById('seeResultsBtn');
            if (seeResultsBtn) {
              seeResultsBtn.classList.add('hidden');
              seeResultsBtn.style.display = 'none';
            }
            
            // Don't auto-show popup - let user click the button to see results
          }
        }, 1000);
      } else {
        console.log('No saved game state found for today, starting fresh');
        // Show grid and keyboard for new game
        const guessGrid = document.getElementById("guessGrid");
        if (guessGrid) {
          guessGrid.style.opacity = '1';
          guessGrid.style.visibility = 'visible';
        }
        const keyboard = document.getElementById("keyboard");
        if (keyboard) {
          keyboard.style.opacity = '1';
          keyboard.style.visibility = 'visible';
        }
      }
    } catch (error) {
      console.error('Error loading game state:', error);
    }
  }
  
  // Save game state to Firestore
  async function saveGameState() {
    // Check if user is logged in - try multiple ways to get current user
    let user = currentUser;
    if (!user && window.firebaseAuth && window.firebaseAuth.currentUser) {
      user = window.firebaseAuth.currentUser;
    }
    
    if (!user || !window.firebaseFirestoreFunctions) {
      console.log('User not logged in, not saving game state');
      console.log('currentUser:', currentUser);
      console.log('firebaseAuth.currentUser:', window.firebaseAuth?.currentUser);
      return;
    }
    
    try {
      const today = getTodayDateString();
      const gameStateRef = window.firebaseFirestoreFunctions.doc(
        window.firebaseDb, 
        'users', 
        user.uid,
        'dailyGames',
        today
      );
      
      // Prepare game state data
      // When game is completed, ensure currentGuess is empty (all guesses should be in guesses array)
      const finalCurrentGuess = gameCompleted ? [] : currentGuess.map(item => ({
        key: item.key,
        result: item.result
      }));
      
      // Ensure all guesses have results (colors) - convert constants to strings if needed
      // Firestore doesn't support nested arrays, so we need to flatten the structure
      // Convert array of arrays to array of objects with guessIndex
      const finalGuesses = [];
      guesses.forEach((guess, guessIndex) => {
        if (!Array.isArray(guess)) {
          console.error('Invalid guess format:', guess);
          return;
        }
        const guessItems = guess.map((item, itemIndex) => {
          if (!item || !item.key) {
            console.error('Invalid guess item:', item);
            return { key: '', result: '', guessIndex, itemIndex };
          }
          let resultValue = item.result;
          // Normalize result to string if it's a constant
          if (resultValue === Correct || resultValue === 'correct') {
            resultValue = 'correct';
          } else if (resultValue === Found || resultValue === 'found') {
            resultValue = 'found';
          } else if (resultValue === Wrong || resultValue === 'wrong') {
            resultValue = 'wrong';
          }
          return {
            key: item.key || '',
            result: resultValue || '',
            guessIndex: guessIndex,
            itemIndex: itemIndex
          };
        });
        // Add all items from this guess to the flat array
        finalGuesses.push(...guessItems);
      });
      
      // Validate that guesses have results before saving
      const guessesWithResults = finalGuesses.filter(guess => 
        guess.length > 0 && guess.every(item => item.result && (item.result === 'correct' || item.result === 'found' || item.result === 'wrong'))
      );
      
      if (guessesWithResults.length !== finalGuesses.length) {
        console.error('❌ Some guesses are missing results!', {
          total: finalGuesses.length,
          withResults: guessesWithResults.length,
          guesses: finalGuesses
        });
      }
      
      const gameStateData = {
        guesses: finalGuesses,
        currentGuess: finalCurrentGuess,
        gameStatus: gameStatus,
        gameCompleted: gameCompleted,
        keys: { ...keys }, // Save keyboard state
        secretWord: SecretWord, // Save the word for verification
        date: today,
        lastUpdated: window.firebaseFirestoreFunctions.serverTimestamp()
      };
      
      // Validate game state before saving
      if (gameCompleted && finalGuesses.length === 0) {
        console.error('❌ CRITICAL: Game is completed but guesses array is empty! This should not happen.');
        console.error('Current guesses state:', guesses);
        console.error('Final guesses:', finalGuesses);
        console.error('gameCompleted:', gameCompleted);
        console.error('gameStatus:', gameStatus);
        console.error('currentGuess:', currentGuess);
        // Don't save invalid state - this would cause the issue the user is seeing
        // But log extensively to help debug
        return;
      }
      
      // Also check if guesses array itself is empty (before processing)
      if (guesses.length === 0) {
        console.warn('⚠️ WARNING: guesses array is empty before saving. This might be a timing issue.');
        console.warn('gameCompleted:', gameCompleted);
        console.warn('gameStatus:', gameStatus);
        // Don't return - allow saving currentGuess if game is not completed
        if (gameCompleted) {
          console.error('❌ Cannot save completed game with no guesses!');
          return;
        }
      }
      
      await window.firebaseFirestoreFunctions.setDoc(gameStateRef, gameStateData, { merge: true });
      console.log('✅ Game state saved successfully!');
      console.log('Saved gameCompleted:', gameCompleted);
      console.log('Saved gameStatus:', gameStatus);
      console.log('Saved guesses count (flat):', finalGuesses.length);
      console.log('Saved currentGuess count:', finalCurrentGuess.length);
      if (finalGuesses.length > 0) {
        // Group by guessIndex for display
        const guessesByIndex = {};
        finalGuesses.forEach(item => {
          const idx = item.guessIndex || 0;
          if (!guessesByIndex[idx]) guessesByIndex[idx] = [];
          guessesByIndex[idx].push(item);
        });
        const guessCount = Object.keys(guessesByIndex).length;
        console.log('Saved guess groups:', guessCount);
        if (guessCount > 0) {
          const firstGuessGroup = guessesByIndex[0];
          console.log('First saved guess example:', firstGuessGroup.map(item => `${item.key}:${item.result}`).join(', '));
        }
      } else {
        console.error('❌ WARNING: No guesses to save! This should not happen for completed games.');
      }
    } catch (error) {
      console.error('Error saving game state:', error);
    }
  }
  
  // Display saved game grid
  function displaySavedGame() {
    console.log('displaySavedGame called with:', { guesses: guesses.length, gameCompleted, gameStatus });
    console.log('First guess details:', guesses[0]);
    
    // Show grid and keyboard now that we're ready to display
    const guessGrid = document.getElementById("guessGrid");
    if (guessGrid) {
      guessGrid.style.opacity = '1';
      guessGrid.style.visibility = 'visible';
    }
    
    const keyboard = document.getElementById("keyboard");
    if (keyboard && !gameCompleted) {
      // Only show keyboard if game is not completed
      keyboard.style.opacity = '1';
      keyboard.style.visibility = 'visible';
    }
    
    // Ensure grid cells exist before trying to display
    const firstCell = document.getElementById('00');
    if (!firstCell) {
      console.warn('Grid cells not ready yet, retrying in 100ms');
      setTimeout(() => displaySavedGame(), 100);
      return;
    }
    
    // Display all previous guesses with colors
    guesses.forEach((guess, rowIndex) => {
      guess.forEach((item, colIndex) => {
        const cell = document.getElementById(`${rowIndex}${colIndex}`);
        if (cell && item && item.key) {
          cell.textContent = item.key || '';
          // Remove any existing result classes first
          cell.classList.remove('filled', 'correct', 'found', 'wrong', 'flip');
          
          // Normalize result value to string
          let resultValue = item.result;
          if (resultValue === Correct || resultValue === 'correct') {
            resultValue = 'correct';
          } else if (resultValue === Found || resultValue === 'found') {
            resultValue = 'found';
          } else if (resultValue === Wrong || resultValue === 'wrong') {
            resultValue = 'wrong';
          }
          
          // Add result class if it exists
          if (resultValue && (resultValue === 'correct' || resultValue === 'found' || resultValue === 'wrong')) {
            cell.classList.add(resultValue);
            console.log(`Cell ${rowIndex}${colIndex}: ${item.key} -> ${resultValue} (with color)`);
          } else {
            // If no result, just show as filled (shouldn't happen for completed guesses)
            cell.classList.add('filled');
            console.warn(`Cell ${rowIndex}${colIndex}: ${item.key} -> filled (no result: ${resultValue})`);
          }
        } else {
          console.warn(`Cell ${rowIndex}${colIndex} not found in DOM or item is null/invalid`);
        }
      });
    });
    
    // Display current guess if in progress
    if (currentGuess.length > 0 && !gameCompleted) {
      const rowIndex = guesses.length;
      currentGuess.forEach((item, colIndex) => {
        const cell = document.getElementById(`${rowIndex}${colIndex}`);
        if (cell && item.key) {
          cell.textContent = item.key;
          cell.classList.add('filled');
        }
      });
    }
    
    // Update keyboard (will disable if game is completed)
    updateKeyboard();
    
    // If game is completed, hide keyboard and show appropriate popup
    if (gameCompleted) {
      // Hide keyboard when game is completed
      const keyboard = document.getElementById('keyboard');
      if (keyboard) {
        keyboard.style.display = 'none';
      }
      
      // Show answer popup with the secret word ONLY if game was lost
      if (gameStatus === 'lost') {
        const answerPopup = document.getElementById('answerPopup');
        const answerMessage = document.getElementById('answerMessage');
        if (answerPopup && answerMessage) {
          answerMessage.innerText = SecretWord;
          answerPopup.classList.remove('hidden');
          answerPopup.style.display = 'flex';
          answerPopup.style.visibility = 'visible';
        }
        
        // Game was lost - show game over popup
        const popup = document.getElementById('gameOverPopup');
        if (popup) {
          popup.classList.remove('hidden');
          popup.style.display = 'flex';
        }
      } else if (gameStatus === 'won') {
        // Game was won - don't show answer popup, user already knows the answer
        console.log('Game was already won today - not showing answer popup');
      }
      
      // Show "See results" button for both won and lost games
      // Only show the primary button (gameOverButton in gameOverButtons container)
      const buttonsContainer = document.getElementById('gameOverButtons');
      if (buttonsContainer) {
        buttonsContainer.classList.remove('hidden');
        buttonsContainer.style.display = 'flex';
        buttonsContainer.style.visibility = 'visible';
        console.log('✅ Showing gameOverButtons container');
      } else {
        console.warn('⚠️ gameOverButtons container not found');
      }
      
      const gameOverButton = document.getElementById('gameOverButton');
      if (gameOverButton) {
        gameOverButton.style.display = 'block';
        gameOverButton.style.visibility = 'visible';
        console.log('✅ Showing gameOverButton');
      } else {
        console.warn('⚠️ gameOverButton not found');
      }
      
      // Hide the secondary button container to avoid showing duplicate buttons
      const seeResultsBtn = document.getElementById('seeResultsBtn');
      if (seeResultsBtn) {
        seeResultsBtn.classList.add('hidden');
        seeResultsBtn.style.display = 'none';
        console.log('✅ Hiding seeResultsBtn container (using primary button instead)');
      }
      
      // Don't auto-show popup - let user click the button to see results
      // This provides better UX as user can see the game board first
    }
  }

  
  // Daily word mapping based on spreadsheet (dates in 2026)
  const dailyWordMap = {
    '2026-01-06': 'DAVIS',
    '2026-01-07': 'FDOC',
    '2026-01-08': 'KENAN',
    '2026-01-09': 'FRATCOURT',
    '2026-01-10': 'SUPDOGS',
    '2026-01-11': 'LENOIR',
    '2026-01-12': 'HOJO',
    '2026-01-13': 'GDTBATH',
    '2026-01-14': 'CAMPUSREC',
    '2026-01-15': 'WILSON',
    '2026-01-16': 'PIT',
    '2026-01-17': 'CUAB',
    '2026-01-18': 'CANVAS',
    '2026-01-19': 'GENOME',
    '2026-01-20': 'YOPO',
    '2026-01-21': 'GREENLAW',
    '2026-01-22': 'RAMESES',
    '2026-01-23': 'EHAUS',
    '2026-01-24': 'WELL',
    '2026-01-25': 'COBB',
    '2026-01-26': 'ROTC',
    '2026-01-27': 'GARDNER',
    '2026-01-28': 'CHASE',
    '2026-01-29': 'PID',
    '2026-01-30': 'UNION',
    '2026-01-31': 'BLUE',
    '2026-02-01': 'TOPO',
    '2026-02-02': 'CRAIGE',
    '2026-02-03': 'SUTTONS',
    '2026-02-04': 'SPENCER',
    '2026-02-05': 'MAW',
    '2026-02-06': 'HEELS',
    '2026-02-07': 'FOOKDOOK',
    '2026-02-08': 'FETZER',
    '2026-02-09': 'CCS',
    '2026-02-10': 'QUAD',
    '2026-02-11': 'WOOLLEN',
    '2026-02-12': 'CAROLINA',
    '2026-02-13': 'COSMIC',
    '2026-02-14': 'PHILIPS',
    '2026-02-15': 'KOURY',
    '2026-02-16': 'BUNS',
    '2026-02-17': 'HOOKER',
    '2026-02-18': 'CAUDILL',
    '2026-02-19': 'BOLO',
    '2026-02-20': 'RAMS',
    '2026-02-21': 'BAITY',
    '2026-02-22': 'DARTY',
    '2026-02-23': 'MOGE',
    '2026-02-24': 'TEAGUE',
    '2026-02-25': 'SASB',
    '2026-02-26': 'CALEB',
    '2026-02-27': 'MURPHEY',
    '2026-02-28': 'SENIOR',
    '2026-03-01': 'NCAA',
    '2026-03-02': 'BILL',
    '2026-03-03': 'UNC',
    '2026-03-04': 'MAYE',
    '2026-03-05': 'FRANKLIN',
    '2026-03-06': 'CHAPMAN',
    '2026-03-07': 'SAFEWALK',
    '2026-03-08': 'PARKER',
    '2026-03-09': 'GPA',
    '2026-03-10': 'HUBERT',
    '2026-03-11': 'AGORA',
    '2026-03-12': 'HORTON',
    '2026-03-13': 'BREAK',
    '2026-03-14': 'MATSON',
    '2026-03-15': 'HES',
    '2026-03-16': 'COCKER',
    '2026-03-17': 'ONYEN',
    '2026-03-18': 'FRAT',
    '2026-03-19': 'YIKYAK',
    '2026-03-20': 'GRAHAM',
    '2026-03-21': 'SCOOP',
    '2026-03-22': 'ALUMNI',
    '2026-03-23': 'CONNOR',
    '2026-03-24': 'TRU',
    '2026-03-25': 'HARDIN',
    '2026-03-26': 'POLK',
    '2026-03-27': 'WINSTON',
    '2026-03-28': 'JORDAN',
    '2026-03-29': 'BONCHON',
    '2026-03-30': 'ROY',
    '2026-03-31': 'MOREHEAD',
    '2026-04-01': 'PLAYA',
    '2026-04-02': 'DEAN',
    '2026-04-03': 'MANLY',
    '2026-04-04': 'SUBWAY',
    '2026-04-05': 'WHISTLER',
    '2026-04-06': 'DAVIE',
    '2026-04-07': 'KURAMA',
    '2026-04-08': 'BACOT',
    '2026-04-09': 'GRIMES',
    '2026-04-10': 'MACK',
    '2026-04-11': 'CRUMBL',
    '2026-04-12': 'MEANTIME',
    '2026-04-13': 'STACY',
    '2026-04-14': 'CAMPUS',
    '2026-04-15': 'HYDE',
    '2026-04-16': 'ZAYKA',
    '2026-04-17': 'CALEB',
    '2026-04-18': 'SWAIN',
    '2026-04-19': 'SENIOR',
    '2026-04-20': 'RUFFIN',
    '2026-04-21': 'BOSH',
    '2026-04-22': 'HUSSMAN',
    '2026-04-23': 'LWOC',
    '2026-04-24': 'JOYNER',
    '2026-04-25': 'HIBACHI',
    '2026-04-26': 'HANES',
    '2026-04-27': 'LDOC',
    '2026-04-28': 'STREAK',
    '2026-04-29': 'FINALS',
    '2026-04-30': 'DORRANCE',
    '2026-05-01': 'AYCOCK',
    '2026-05-02': 'BINGHAM',
    '2026-05-03': 'MANGUM',
    '2026-05-04': 'BSCHOOL',
    '2026-05-05': 'SHELTON',
    '2026-05-06': 'ARS',
    '2026-05-07': 'HOWELL',
    '2026-05-08': 'COKER',
    '2026-05-09': 'GRAD'
  };
  
  // Get daily word based on date (deterministic - same date = same word)
  function getDailyWord() {
    const today = new Date();
    // Use local date to match home page display
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    
    // Create date string in YYYY-MM-DD format
    const dateString = `${year}-${month}-${day}`;
    
    // Check if we have a word for this date in the mapping
    if (dailyWordMap[dateString]) {
      return dailyWordMap[dateString];
    }
    
    // Fallback: if date is not in mapping, use hash-based selection from words array
    // This handles dates beyond the spreadsheet range
    let hash = 0;
    for (let i = 0; i < dateString.length; i++) {
      const char = dateString.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    
    const index = Math.abs(hash) % words.length;
    return words[index].toUpperCase();
  }
  
  let SecretWord = getDailyWord();
  const NumberOfGuesses = 6;
  const Correct = 'correct';
  const Found = 'found';
  const Wrong = 'wrong';
  
  // Game state variables
  let gameStatus = 'in_progress'; // 'in_progress', 'won', 'lost'
  let gameCompleted = false;
  let isFlipping = false; // Track if tiles are currently flipping
  // Expose gameStatus and gameCompleted to global scope for share function
  window.gameStatus = gameStatus;
  window.gameCompleted = gameCompleted;
  window.isFlipping = isFlipping;
  
  function initialize() {
    // Ensure all popups are hidden on page load
    const popupIds = ['customPopup', 'invalidWordPopup', 'notEnoughLettersPopup', 'transferApplicationPopup', 'answerPopup', 'gameOverPopup', 'statsPopup', 'resultsPopup'];
    popupIds.forEach(popupId => {
      const popup = document.getElementById(popupId);
      if (popup) {
        popup.classList.add('hidden');
        popup.style.display = ''; // Remove any inline styles
      }
    });
    
    // Hide grid and keyboard initially to prevent flash of empty state
    // They will be shown after game state is loaded (or if no saved state exists)
    let guessGrid = document.getElementById("guessGrid");
    if (guessGrid) {
      guessGrid.style.opacity = '0'; // Hide initially
      guessGrid.style.visibility = 'hidden';
    }
    
    let keyboard = document.getElementById("keyboard");
    if (keyboard) {
      keyboard.style.opacity = '0'; // Hide initially
      keyboard.style.visibility = 'hidden';
    }
    
    // Create grid cells
    for (let i = 0; i < NumberOfGuesses; i++) { // This loop creates rows in the guess grid
      for (let j = 0; j < SecretWord.length; j++) { // This loop adds blocks based on the no. of letters in the secret
        guessGrid.innerHTML += `<div id="${i}${j}" class="key-guess"></div>`
      }
      guessGrid.innerHTML += '<br/>'
    }
  
    // Create keyboard buttons
    Object.keys(keys).forEach((key) => {
      if (key.includes('break')) {
        keyboard.innerHTML += '<br/>';
      } else {
        keyboard.innerHTML += `<button id="${key}" class="key" onclick="keyClick('${key}')">` + key + '</button>';
      }
    });
    
    // Check auth state quickly and show grid/keyboard
    // For non-logged-in users, show immediately
    // For logged-in users, wait for game state to load
    const checkAndShowGame = async () => {
      // Check if Firebase is ready
      if (window.firebaseAuth && window.firebaseAuth.currentUser) {
        const user = window.firebaseAuth.currentUser;
        if (!currentUser) {
          currentUser = user;
          isLoggedIn = true;
        }
        // User is logged in - load game state (will show grid/keyboard after loading)
        await loadGameState();
      } else if (currentUser) {
        // User was set but Firebase auth doesn't show them - load game state anyway
        await loadGameState();
      } else {
        // No user logged in - show grid and keyboard immediately for guest play
        console.log('No user logged in, showing game for guest play');
        const guessGrid = document.getElementById("guessGrid");
        if (guessGrid) {
          guessGrid.style.opacity = '1';
          guessGrid.style.visibility = 'visible';
        }
        const keyboard = document.getElementById("keyboard");
        if (keyboard) {
          keyboard.style.opacity = '1';
          keyboard.style.visibility = 'visible';
        }
      }
    };
    
    // Try immediately if Firebase is already loaded
    if (window.firebaseAuth) {
      checkAndShowGame();
    } else {
      // Wait a short time for Firebase to load, but check multiple times
      let attempts = 0;
      const maxAttempts = 10; // Check for up to 1 second (10 * 100ms)
      const checkInterval = setInterval(() => {
        attempts++;
        if (window.firebaseAuth || attempts >= maxAttempts) {
          clearInterval(checkInterval);
          if (window.firebaseAuth) {
            checkAndShowGame();
          } else {
            // Firebase not loaded after timeout - show game for guest play
            console.log('Firebase not loaded, showing game for guest play');
            const guessGrid = document.getElementById("guessGrid");
            if (guessGrid) {
              guessGrid.style.opacity = '1';
              guessGrid.style.visibility = 'visible';
            }
            const keyboard = document.getElementById("keyboard");
            if (keyboard) {
              keyboard.style.opacity = '1';
              keyboard.style.visibility = 'visible';
            }
          }
        }
      }, 100); // Check every 100ms
    }
  }
  
  // Wait for DOM to be ready before initializing
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initialize();
    });
  } else {
    initialize();
  }

  // Add keyboard event listener for physical keyboard input
  // Chrome-compatible version that works with both file:// and http:// protocols
  let keyboardListenerAttached = false;
  let lastKeyProcessed = null;
  let lastKeyTime = 0;
  let handleKeyDown = null;
  let clickHandler = null;
  let loadHandler = null;
  
  function attachKeyboardListener() {
    // Check if onscreen keyboard only mode is enabled
    // Use try-catch for Safari localStorage issues
    let onscreenKeyboardOnly = false;
    try {
      onscreenKeyboardOnly = localStorage.getItem('onscreenKeyboardOnly') === 'true';
    } catch (e) {
      console.warn('localStorage access failed (may be Safari private mode):', e);
    }
    if (onscreenKeyboardOnly) {
      console.log('Onscreen keyboard only mode enabled - skipping physical keyboard listener');
      return;
    }
    
    // Prevent attaching listener multiple times
    if (keyboardListenerAttached) {
      console.log('Keyboard listener already attached, skipping...');
      return;
    }
    keyboardListenerAttached = true;
    
    // Handler function for keyboard events
    handleKeyDown = function(event) {
      console.log('Key pressed:', event.key, 'Code:', event.code, 'KeyCode:', event.keyCode);
      
      // Check for modifier keys and special keys FIRST, before preventDefault
      // Explicitly ignore Tab
      if (event.key === 'Tab' || event.code === 'Tab' || event.keyCode === 9) {
        // Allow Tab to work normally (for accessibility), but don't process it
        return; // Don't prevent default - let Tab work for navigation
      }
      
      // Explicitly ignore CapsLock
      if (event.key === 'CapsLock' || event.code === 'CapsLock' || event.keyCode === 20) {
        // Allow CapsLock to work normally, but don't process it
        return; // Don't prevent default - let CapsLock work normally
      }
      
      // Explicitly ignore Shift keys (both left and right) - CHECK THIS FIRST
      if (event.key === 'Shift' || event.code === 'ShiftLeft' || event.code === 'ShiftRight' || event.keyCode === 16) {
        // Prevent default and stop propagation to prevent any processing
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        return; // Exit early - don't process Shift
      }
      
      // Explicitly ignore Control keys (both left and right)
      if (event.key === 'Control' || event.code === 'ControlLeft' || event.code === 'ControlRight' || event.keyCode === 17) {
        // Allow Control to work normally (for shortcuts), but don't process it
        return; // Don't prevent default - let Control work normally
      }
      
      // Explicitly ignore Alt keys (both left and right)
      if (event.key === 'Alt' || event.code === 'AltLeft' || event.code === 'AltRight' || event.keyCode === 18) {
        // Allow Alt to work normally (for shortcuts), but don't process it
        return; // Don't prevent default - let Alt work normally
      }
      
      // Explicitly ignore Meta keys (Command on Mac, Windows key on Windows) - CHECK THIS
      if (event.key === 'Meta' || event.code === 'MetaLeft' || event.code === 'MetaRight' || event.keyCode === 91 || event.keyCode === 92 || event.keyCode === 93) {
        // Prevent default and stop propagation to prevent any processing
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        return; // Exit early - don't process Meta/Command
      }
      
      // Explicitly ignore Arrow keys
      if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight' ||
          event.code === 'ArrowUp' || event.code === 'ArrowDown' || event.code === 'ArrowLeft' || event.code === 'ArrowRight' ||
          event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40) {
        // Prevent default and stop propagation to prevent any processing
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        return; // Exit early - don't process arrow keys
      }
      
      // Prevent default immediately to stop any other handlers (for valid keys)
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      
      // Debounce: prevent same key from being processed twice within 100ms
      const now = Date.now();
      const keyString = event.key + event.code;
      if (lastKeyProcessed === keyString && (now - lastKeyTime) < 100) {
        console.log('Duplicate key event ignored:', event.key);
        return;
      }
      lastKeyProcessed = keyString;
      lastKeyTime = now;
      
      // Handle backspace/delete first (most specific)
      if (event.key === 'Backspace' || event.key === 'Delete' || event.code === 'Backspace' || event.keyCode === 8) {
        console.log('Delete/Backspace detected!');
        backspace(); // Call backspace directly instead of through keyClick
        return; // Exit early to prevent other handlers
      }
      
      // Handle enter
      if (event.key === 'Enter') {
        keyClick('enter');
        return;
      }
      
      // Handle letter keys (both lowercase and uppercase) - only process these
      if ((event.key >= 'a' && event.key <= 'z') || (event.key >= 'A' && event.key <= 'Z')) {
        keyClick(event.key.toLowerCase()); // Convert to lowercase
        event.preventDefault(); // Prevent default behavior
        return;
      }
      
      // Ignore all other keys - prevent default and stop propagation
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    // Attach only to document to avoid duplicate events
    // Using capture phase for better compatibility
    document.addEventListener('keydown', handleKeyDown, true);
    
    // Ensure the page can receive keyboard events by focusing on load
    loadHandler = function() {
      // Try to focus the document body to ensure keyboard events work
      if (document.body) {
        document.body.focus();
        // Also make body focusable if needed
        if (!document.body.hasAttribute('tabindex')) {
          document.body.setAttribute('tabindex', '-1');
        }
      }
    };
    window.addEventListener('load', loadHandler);

    // Add click handler to ensure page receives focus when clicked (important for Chrome file://)
    clickHandler = function(event) {
      // If clicking on the page (not on an input/button), ensure body is focused
      if (event.target === document.body || !event.target.matches('input, button, a')) {
        if (document.body && document.activeElement !== document.body) {
          document.body.focus();
        }
      }
    };
    document.addEventListener('click', clickHandler, true);
  }

  function detachKeyboardListener() {
    if (!keyboardListenerAttached) {
      return;
    }
    
    if (handleKeyDown) {
      document.removeEventListener('keydown', handleKeyDown, true);
    }
    
    if (clickHandler) {
      document.removeEventListener('click', clickHandler, true);
    }
    
    if (loadHandler) {
      window.removeEventListener('load', loadHandler);
    }
    
    keyboardListenerAttached = false;
    handleKeyDown = null;
    clickHandler = null;
    loadHandler = null;
    console.log('Keyboard listener detached');
  }

  // Expose functions to window for access from play.html
  window.attachKeyboardListener = attachKeyboardListener;
  window.detachKeyboardListener = detachKeyboardListener;

  // Attach keyboard listener after DOM is ready (only if onscreen keyboard only is not enabled)
  function initKeyboardListener() {
    // Use try-catch for Safari localStorage issues
    let onscreenKeyboardOnly = false;
    try {
      onscreenKeyboardOnly = localStorage.getItem('onscreenKeyboardOnly') === 'true';
    } catch (e) {
      console.warn('localStorage access failed (may be Safari private mode):', e);
    }
    if (!onscreenKeyboardOnly) {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', attachKeyboardListener);
      } else {
        // If DOM is already ready, attach immediately
        attachKeyboardListener();
      }
    }
  }
  
  initKeyboardListener();
  
  // Track last keyClick call to prevent duplicates
  let lastKeyClick = null;
  let lastKeyClickTime = 0;
  
  function keyClick(key) {
    console.log('keyClick called with:', key, 'gameCompleted:', gameCompleted, 'window.gameCompleted:', window.gameCompleted, 'isFlipping:', isFlipping);
    
    // Prevent input if game is completed - check both local and global
    const isGameCompleted = gameCompleted === true || window.gameCompleted === true;
    if (isGameCompleted) {
      console.log('Game is completed - ignoring key input');
      return;
    }
    
    // Prevent input if tiles are currently flipping
    if (isFlipping || window.isFlipping) {
      console.log('Tiles are flipping - ignoring key input');
      return;
    }
    
    // Debounce: prevent same key from being processed twice within 50ms
    const now = Date.now();
    if (lastKeyClick === key && (now - lastKeyClickTime) < 50) {
      console.log('Duplicate keyClick ignored:', key);
      return;
    }
    lastKeyClick = key;
    lastKeyClickTime = now;
    
    switch (key) {
      case '⌫':
        if (!gameCompleted) {
          backspace();
        }
        break;
      case 'enter':
        enter().catch(error => {
          console.error('Error in enter function:', error);
          showInvalidWordAlert();
        });
        break;
      default:
        // Check both local and global gameCompleted flag
        const isGameCompleted = gameCompleted === true || window.gameCompleted === true;
        if (!isGameCompleted && currentGuess.length < SecretWord.length
          && guesses.length < NumberOfGuesses) {
          currentGuess.push({ key: key, result: '' });
          updateCurrentGuess();
          // Save game state after typing
          setTimeout(() => {
            saveGameState();
          }, 300);
        } else if (isGameCompleted) {
          console.log('Game completed - cannot add more letters');
        }
    }
  }
  
  function backspace() {
    // Prevent backspace if game is completed
    if (gameCompleted) {
      return;
    }
    
    // Prevent backspace if tiles are currently flipping
    if (isFlipping || window.isFlipping) {
      console.log('Tiles are flipping - ignoring backspace');
      return;
    }
    
    if (currentGuess.length > 0) {
      currentGuess.pop();
      updateCurrentGuess();
      // Save game state after backspace
      setTimeout(() => {
        saveGameState();
      }, 100);
    }
  }
  
  async function isValidWord(word) {
    const upperWord = word.toUpperCase();
    
    console.log('Checking word:', upperWord);
    console.log('Current SecretWord:', SecretWord);
    console.log('Is in words array:', words.includes(upperWord));
    
    // First check if it's the current answer (always valid)
    if (upperWord === SecretWord.toUpperCase()) {
      console.log('Word is the current answer - always valid');
      return true;
    }
    
    // Check for profanity/inappropriate words
    try {
      // Check if bad-words library is loaded (it exposes Filter globally)
      if (typeof Filter !== 'undefined') {
        const filter = new Filter();
        if (filter.isProfane(word.toLowerCase())) {
          console.log('Word contains profanity - rejected');
          return false;
        }
      } else if (typeof window !== 'undefined' && window.Filter) {
        // Alternative check for window.Filter
        const filter = new window.Filter();
        if (filter.isProfane(word.toLowerCase())) {
          console.log('Word contains profanity - rejected');
          return false;
        }
      }
    } catch (error) {
      console.log('Profanity filter not available or error:', error);
      // Continue with other checks if filter fails
    }
    
    // Then check if it's in our keyword list (UNC-specific words)
    // Convert all words to uppercase for case-insensitive comparison
    const upperWords = words.map(w => w.toUpperCase());
    if (upperWords.includes(upperWord)) {
      console.log('Word found in keywords list');
      return true;
    }
    
    // Check if it's in the English dictionary
    if (word_list.includes(upperWord)) {
      console.log('Word found in English dictionary');
      return true;
    }
    
    // Use dictionary API to check if word exists
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`);
      if (response.ok) {
        const data = await response.json();
        const isValid = data && data.length > 0;
        console.log('Dictionary API result:', isValid);
        return isValid;
      }
      console.log('Dictionary API failed, using pattern validation');
      return false;
    } catch (error) {
      console.error('Dictionary API error:', error);
      // Fallback to pattern validation if API fails
      const patternResult = isValidEnglishPattern(upperWord);
      console.log('Pattern validation result:', patternResult);
      return patternResult;
    }
  }
  
  function isValidEnglishPattern(word) {
    // Basic validation - reject obviously invalid patterns
    if (word.length < 2 || word.length > 15) {
      return false;
    }
    
    // Must contain only letters
    if (!/^[A-Z]+$/.test(word)) {
      return false;
    }
    
    // Reject patterns that are clearly not English words
    const invalidPatterns = [
      /^[BCDFGHJKLMNPQRSTVWXYZ]{5,}$/, // Too many consonants in a row
      /^[AEIOU]{4,}$/, // Too many vowels in a row
      /(.)\1{3,}/, // Same letter repeated 4+ times
      /^[QWZX]{2,}/, // Too many rare letters
    ];
    
    for (let pattern of invalidPatterns) {
      if (pattern.test(word)) {
        return false;
      }
    }
    
    // Must have at least one vowel
    if (!/[AEIOU]/.test(word)) {
      return false;
    }
    
    // For now, accept most words that pass basic validation
    // This is more permissive than the original approach
    return true;
  }

  async function enter() {
    // Prevent guesses if game is already completed - check both local and global
    const isGameCompleted = gameCompleted === true || window.gameCompleted === true;
    if (isGameCompleted) {
        console.log('Game already completed, cannot make more guesses');
        return;
    }
    
    // Prevent guesses if tiles are currently flipping
    if (isFlipping || window.isFlipping) {
        console.log('Tiles are flipping, cannot make guesses yet');
        return;
    }
    
    // Double-check: if we have a completed game for today, don't allow more guesses
    // This prevents edge cases where the flag might not be set correctly
    if (guesses.length > 0) {
      const lastGuess = guesses[guesses.length - 1];
      // If we have 6 guesses or the last guess was correct, game is done
      if (guesses.length >= NumberOfGuesses || 
          (lastGuess && lastGuess.every(cell => cell.result === Correct))) {
        console.log('Game already completed based on guesses, cannot make more guesses');
        gameCompleted = true;
        window.gameCompleted = true;
        return;
      }
    }
    
    // Check if user has entered enough letters
    if (currentGuess.length < SecretWord.length) {
        showNotEnoughLettersAlert();
        return; // Don't process the guess if not enough letters
    }

    if (currentGuess.length === SecretWord.length) {
        let guessedWord = currentGuess.map(c => c.key).join('').toUpperCase();
        
        // Check if the guessed word is valid
        const isValid = await isValidWord(guessedWord);
        
        if (!isValid) {
            showInvalidWordAlert();
            return; // Don't process the guess if word is invalid
        }
        
        let secret = SecretWord.toUpperCase();

        let secretLetterCount = {};
        for (let letter of secret) {
            if (secretLetterCount[letter]) {
                secretLetterCount[letter]++;
            } else {
                secretLetterCount[letter] = 1;
            }
        }

        // First pass: mark correct letters
        currentGuess.forEach((keyGuess, index) => {
            if (secret[index] === keyGuess.key.toUpperCase()) {
                keyGuess.result = Correct;
                secretLetterCount[keyGuess.key.toUpperCase()]--;
            }
        });

        // Second pass: mark found and wrong letters
        currentGuess.forEach((keyGuess, index) => {
            if (!keyGuess.result && secret.includes(keyGuess.key.toUpperCase()) && secretLetterCount[keyGuess.key.toUpperCase()] > 0) {
                keyGuess.result = Found;
                secretLetterCount[keyGuess.key.toUpperCase()]--;
            } else if (!keyGuess.result) {
                keyGuess.result = Wrong;
            }
        });

        // Update keyboard with best result for each letter
        currentGuess.forEach((keyGuess) => {
            const letter = keyGuess.key;
            const currentResult = keys[letter];
            const newResult = keyGuess.result;
            
            // Only update if the new result is better than the current one
            // Priority: correct > found > wrong
            if (!currentResult || 
                (newResult === 'correct') || 
                (newResult === 'found' && currentResult === 'wrong')) {
                keys[letter] = newResult;
            }
        });

        // Set up the guess with letters but no colors yet
        updateCurrentGuess(false);
        // Create a deep copy of currentGuess to ensure results are preserved
        const guessToAdd = currentGuess.map(item => ({
            key: item.key,
            result: item.result // This should already be set (Correct, Found, or Wrong)
        }));
        guesses.push(guessToAdd);
        window.guesses = guesses; // Update global reference
        console.log('Added guess to guesses array:', {
            guessIndex: guesses.length - 1,
            guess: guessToAdd.map(item => `${item.key}:${item.result}`).join(', '),
            totalGuesses: guesses.length
        });
        const previousGuess = [...currentGuess];
        currentGuess = [];
        
        // Then add flip animation to each cell and reveal colors during flip
        const isCorrect = (guessedWord === secret);
        flipAndRevealGuess(isCorrect);

        if (isCorrect) {
            // Game won
            gameStatus = 'won';
            window.gameStatus = gameStatus; // Update global reference
            gameCompleted = true;
            window.gameCompleted = gameCompleted; // Update global reference
            // Clear currentGuess since game is completed
            currentGuess = [];
            // Show alert after flip animation completes
            // flipAndRevealGuess will handle showing the alert
            await updateStatsOnWin(); // Update stats as a win
            // Calculate total flip time to save after animation completes
            const flipDelay = 250;
            const flipDuration = 800;
            const totalFlipTime = (SecretWord.length * flipDelay) + flipDuration;
            // Save game state after flip animation completes to ensure all colors are saved
            setTimeout(() => {
                console.log('Saving completed game state (won) with guesses:', guesses.length);
                console.log('Guesses array before save:', JSON.stringify(guesses));
                console.log('Game completed:', gameCompleted);
                console.log('Game status:', gameStatus);
                // Double-check that guesses array is populated
                if (guesses.length === 0) {
                    console.error('❌ ERROR: guesses array is empty when trying to save completed game!');
                    console.error('This should not happen - the guess should have been added before this point.');
                    // Try to recover by checking if we can reconstruct from DOM
                    console.error('Attempting to recover guesses from DOM...');
                }
                saveGameState(); // Save after flip animation completes
            }, totalFlipTime + 500);
        } else if (guesses.length >= NumberOfGuesses) {
            // Game lost
            gameStatus = 'lost';
            window.gameStatus = gameStatus; // Update global reference
            gameCompleted = true;
            window.gameCompleted = gameCompleted; // Update global reference
            // Clear currentGuess since game is completed
            currentGuess = [];
            // Calculate total flip time and wait for all tiles to finish flipping
            const flipDelay = 250; // Delay between each flip (in milliseconds)
            const flipDuration = 800; // Duration of each flip animation (in milliseconds)
            const totalFlipTime = (SecretWord.length * flipDelay) + flipDuration;
            // Show transfer application popup after all flips complete
            setTimeout(() => {
                showTransferApplicationPopup();
            }, totalFlipTime);
            // Show game over popup after transfer popup disappears (answer popup will show first)
            setTimeout(() => {
                showGameOverPopup(); // Exceeded max tries
            }, totalFlipTime + 2000);
            await updateStatsOnLoss(); // Update stats as a loss
            // Save game state after flip animation completes to ensure all colors are saved
            setTimeout(() => {
                console.log('Saving completed game state (lost) with guesses:', guesses.length);
                console.log('Guesses array before save:', JSON.stringify(guesses));
                console.log('Game completed:', gameCompleted);
                console.log('Game status:', gameStatus);
                // Double-check that guesses array is populated
                if (guesses.length === 0) {
                    console.error('❌ ERROR: guesses array is empty when trying to save completed game!');
                    console.error('This should not happen - the guess should have been added before this point.');
                    // Try to recover by checking if we can reconstruct from DOM
                    console.error('Attempting to recover guesses from DOM...');
                }
                saveGameState(); // Save after flip animation completes
            }, totalFlipTime + 500);
        } else {
            currentGuess = []; // Prepare for the next guess
            // Save game state after flip animation
            setTimeout(() => {
                saveGameState();
            }, 1500);
        }
        // Keyboard will be updated after flip animation completes in flipAndRevealGuess()
    }
}


function showAlert(message) {
    const popup = document.getElementById('customPopup');
    const messageEl = document.getElementById('popupMessage');
    if (popup && messageEl) {
        messageEl.innerText = message;
        popup.classList.remove('hidden');
        popup.style.display = 'flex'; // Use flex to match CSS
    }
    // Answer popup remains visible and does not auto-close
}


function showInvalidWordAlert() {
    console.log('=== showInvalidWordAlert called ===');
    console.trace('Call stack for showInvalidWordAlert');
    // Add shake animation to each cell in the current guess row
    const currentRow = guesses.length;
    for (let i = 0; i < SecretWord.length; i++) {
        const guessCell = document.getElementById(`${currentRow}${i}`);
        if (guessCell) {
            guessCell.classList.add('shake');
            // Remove shake class after animation completes
            setTimeout(() => {
                guessCell.classList.remove('shake');
            }, 500);
        }
    }

    // Show the invalid word alert 0.1 seconds after shake starts
    setTimeout(() => {
        const popup = document.getElementById('invalidWordPopup');
        const message = document.getElementById('invalidWordMessage');
        
        if (!popup) {
            console.error('invalidWordPopup element not found!');
            return;
        }
        if (!message) {
            console.error('invalidWordMessage element not found!');
            return;
        }
        
        console.log('Showing invalid word popup');
        console.log('Popup before changes:', {
            hasHidden: popup.classList.contains('hidden'),
            display: window.getComputedStyle(popup).display,
            visibility: window.getComputedStyle(popup).visibility
        });
        
        message.innerText = "Not in word list";
        // Remove hidden class and set display - same approach as answer popup
        popup.classList.remove('hidden');
        // Force display with multiple methods to ensure it shows
        popup.style.setProperty('display', 'flex', 'important');
        popup.style.setProperty('visibility', 'visible', 'important');
        popup.style.setProperty('opacity', '1', 'important');
        
        // Double-check after a tiny delay
        setTimeout(() => {
            console.log('Popup after changes:', {
                hasHidden: popup.classList.contains('hidden'),
                display: window.getComputedStyle(popup).display,
                visibility: window.getComputedStyle(popup).visibility,
                opacity: window.getComputedStyle(popup).opacity,
                position: window.getComputedStyle(popup).position,
                top: window.getComputedStyle(popup).top,
                zIndex: window.getComputedStyle(popup).zIndex,
                width: window.getComputedStyle(popup).width,
                height: window.getComputedStyle(popup).height
            });
        }, 10);

        // Auto-hide after 1 second
        setTimeout(() => {
            popup.classList.add('hidden');
            popup.style.display = ''; // Remove inline style to let CSS handle it
            console.log('Hiding invalid word popup');
        }, 1000);
    }, 100);
}

function showNotEnoughLettersAlert() {
    console.log('=== showNotEnoughLettersAlert called ===');
    console.trace('Call stack for showNotEnoughLettersAlert');
    // Add shake animation to each cell in the current guess row
    const currentRow = guesses.length;
    for (let i = 0; i < SecretWord.length; i++) {
        const guessCell = document.getElementById(`${currentRow}${i}`);
        if (guessCell) {
            guessCell.classList.add('shake');
            // Remove shake class after animation completes
            setTimeout(() => {
                guessCell.classList.remove('shake');
            }, 500);
        }
    }

    // Show the not enough letters alert 0.1 seconds after shake starts
    setTimeout(() => {
        const popup = document.getElementById('notEnoughLettersPopup');
        const message = document.getElementById('notEnoughLettersMessage');
        
        if (!popup || !message) {
            console.error('notEnoughLettersPopup or message element not found!');
            return;
        }
        
        console.log('Showing not enough letters popup');
        console.log('Popup before changes:', {
            hasHidden: popup.classList.contains('hidden'),
            display: window.getComputedStyle(popup).display,
            visibility: window.getComputedStyle(popup).visibility
        });
        
        message.innerText = "Not enough letters";
        // Remove hidden class and set display - same approach as answer popup
        popup.classList.remove('hidden');
        // Force display with multiple methods to ensure it shows
        popup.style.setProperty('display', 'flex', 'important');
        popup.style.setProperty('visibility', 'visible', 'important');
        popup.style.setProperty('opacity', '1', 'important');
        
        // Double-check after a tiny delay
        setTimeout(() => {
            console.log('Not enough letters popup after changes:', {
                hasHidden: popup.classList.contains('hidden'),
                display: window.getComputedStyle(popup).display,
                visibility: window.getComputedStyle(popup).visibility,
                opacity: window.getComputedStyle(popup).opacity,
                position: window.getComputedStyle(popup).position,
                top: window.getComputedStyle(popup).top,
                zIndex: window.getComputedStyle(popup).zIndex,
                width: window.getComputedStyle(popup).width,
                height: window.getComputedStyle(popup).height
            });
        }, 10);

        // Auto-hide after 1 second
        setTimeout(() => {
            popup.classList.add('hidden');
            popup.style.display = ''; // Remove inline style to let CSS handle it
        }, 1000);
    }, 100);
}

function closePopup() {
    // Hide the popup
    const popup = document.getElementById('customPopup');
    if (popup) {
        popup.classList.add('hidden');
        popup.style.display = ''; // Remove inline style to let CSS handle it
    }
}

function updateKeyboard() {
    for (const key in keys) {
        let keyElement = document.getElementById(key);
        if (keyElement) {
            keyElement.className = 'key'; // Reset the class
            if (['correct', 'found', 'wrong'].includes(keys[key])) {
                keyElement.classList.add(keys[key]); // Add the new class
            }
            // Disable keyboard visually and functionally when game is completed
            if (gameCompleted) {
                keyElement.style.opacity = '0.5';
                keyElement.style.cursor = 'not-allowed';
                keyElement.disabled = true;
            } else {
                keyElement.style.opacity = '1';
                keyElement.style.cursor = 'pointer';
                keyElement.disabled = false;
            }
        }
    }
}

  function flipAndRevealGuess(isCorrect = false) {
    const currentRow = guesses.length - 1; // Use the row that was just filled
    const flipDelay = 250; // Delay between each flip (in milliseconds) - slightly slower than Wordle
    const flipDuration = 800; // Duration of each flip animation (in milliseconds)
    const totalFlipTime = (SecretWord.length * flipDelay) + flipDuration; // Total time for all flips to complete
    
    // Set flipping flag to true to prevent input during animation
    isFlipping = true;
    window.isFlipping = true;
    console.log('Starting flip animation - input disabled');
    
    // Flip each cell one by one and reveal colors during flip
    for (let i = 0; i < SecretWord.length; i++) {
      setTimeout(() => {
        const guessCell = document.getElementById(`${currentRow}${i}`);
        if (guessCell && guesses[currentRow][i]) {
          // Add flip animation
          guessCell.classList.add('flip');
          
          // Add the color class at the midpoint of the flip (when it's rotated 90 degrees)
          setTimeout(() => {
            guessCell.classList.add(guesses[currentRow][i].result);
          }, flipDuration / 2); // Half of the flip duration (400ms)
          
          // Remove flip class after animation completes
          setTimeout(() => {
            guessCell.classList.remove('flip');
          }, flipDuration);
        }
      }, i * flipDelay);
    }
    
    // Re-enable input after all flips complete
    setTimeout(() => {
      isFlipping = false;
      window.isFlipping = false;
      console.log('Flip animation complete - input enabled');
      updateKeyboard();
    }, totalFlipTime + 250);
    
    // Show success message after all flips complete (only if correct)
    if (isCorrect) {
      // Calculate total flip time and wait for all tiles to finish flipping
      // Show transfer application popup after all flips complete with win message
      setTimeout(() => {
        showTransferApplicationPopup("Rah rah right answer");
      }, totalFlipTime);
      
      // Hide keyboard and show "See results" button after transfer popup disappears
      setTimeout(() => {
        const keyboard = document.getElementById('keyboard');
        const buttonsContainer = document.getElementById('gameOverButtons');
        
        if (keyboard) {
          keyboard.style.display = 'none';
        }
        
        if (buttonsContainer) {
          buttonsContainer.classList.remove('hidden');
          buttonsContainer.style.display = 'flex';
          buttonsContainer.style.visibility = 'visible';
          console.log('✅ Showing See results button after win');
        }
      }, totalFlipTime + 2000);
    }
  }

  function updateCurrentGuess(guessed = false) {
    let index = guesses.length;
    for (let i = 0; i < SecretWord.length; i++) {
      let guessGrid = document.getElementById(`${index}${i}`);
      if (currentGuess[i]) {
        guessGrid.innerHTML = currentGuess[i].key;
        // Add filled class for darker border when box has a letter
        guessGrid.classList.add('filled');
      } else {
        guessGrid.innerHTML = '';
        // Remove filled class when box is empty
        guessGrid.classList.remove('filled');
      }
      if (guessed && currentGuess[i]) {
        guessGrid.classList.add(currentGuess[i].result);
        // Remove filled class when box gets a result color (border will be set by result class)
        guessGrid.classList.remove('filled');
      }
    }
    if (guessed) {
      updateKeyboard();
    }
  }

  function makeGuess() {
    tries++;

    // ... check the guess ...

    if (correctGuess) {
        // ... handle correct guess ...
    } else if (tries >= maxTries) {
        // Reached maximum tries without correct guess
        showGameOverPopup();
    }
}

function showTransferApplicationPopup(message) {
    const popup = document.getElementById('transferApplicationPopup');
    const messageEl = document.getElementById('transferApplicationMessage');
    if (popup) {
        // Update message if provided, otherwise use default
        if (messageEl && message) {
            messageEl.innerText = message;
        } else if (messageEl && !message) {
            // Reset to default message if no message provided
            messageEl.innerText = "Time to start that transfer application";
        }
        popup.classList.remove('hidden');
        popup.style.display = 'flex';
        // Hide popup after 2 seconds and show answer popup (only if game was lost)
        setTimeout(() => {
            popup.classList.add('hidden');
            popup.style.display = '';
            // Show answer popup after transfer popup disappears (only if game was lost)
            if (gameStatus === 'lost') {
                showAnswerPopup();
            }
        }, 2000);
    }
}

function showAnswerPopup() {
    const popup = document.getElementById('answerPopup');
    const answerMessage = document.getElementById('answerMessage');
    if (popup && answerMessage) {
        // Access SecretWord - it should be in scope from the outer function
        answerMessage.innerText = SecretWord;
        popup.classList.remove('hidden');
        popup.style.display = 'flex';
        popup.style.visibility = 'visible';
        // This popup does not auto-hide
        
        // Wait 1 second, then hide keyboard and show "See results" button
        setTimeout(() => {
            const keyboard = document.getElementById('keyboard');
            const buttonsContainer = document.getElementById('gameOverButtons');
            
            if (keyboard) {
                keyboard.style.display = 'none';
            }
            
            if (buttonsContainer) {
                buttonsContainer.classList.remove('hidden');
                buttonsContainer.style.display = 'flex';
            }
        }, 1000);
    }
}

function showGameOverPopup() {
    // Include the correct word in the game over message
    const popup = document.getElementById('gameOverPopup');
    const messageEl = document.getElementById('gameOverMessage');
    
    if (popup && messageEl) {
        messageEl.innerText = SecretWord;
        popup.classList.remove('hidden');
        popup.style.display = 'flex'; // Set inline style to show
    }
    
    // Note: Keyboard hiding and "See results" button showing is now handled by showAnswerPopup()
    // Don't auto-show stats popup - let user click "See results" button
}

function closeGameOverPopup() {
    const popup = document.getElementById('gameOverPopup');
    if (popup) {
        popup.classList.add('hidden');
        popup.style.display = ''; // Remove inline style to let CSS handle it
    }
}

// Make function globally accessible
// Global function to show results popup (for logged-out users)
window.showResultsPopup = function showResultsPopup() {
    const resultsPopup = document.getElementById('resultsPopup');
    if (resultsPopup) {
        resultsPopup.classList.remove('hidden');
        resultsPopup.style.display = 'flex';
    }
    // Keep the game over buttons visible
};

// Helper function to show appropriate popup based on login status
window.showResultsOrStatsPopup = function showResultsOrStatsPopup() {
    // Check if user is logged in
    const isLoggedIn = (window.firebaseAuth && window.firebaseAuth.currentUser) || 
                      window.isLoggedIn || 
                      window.currentUser;
    
    // Keep the game over buttons visible
    
    if (isLoggedIn) {
        // Logged in: show stats popup
        if (window.showStatsPopup) {
            window.showStatsPopup();
        }
    } else {
        // Not logged in: show results popup
        if (window.showResultsPopup) {
            window.showResultsPopup();
        }
    }
};

// Load game history for calendar
async function loadGameHistory() {
    if (!currentUser || !window.firebaseFirestoreFunctions) {
        return { wins: new Set(), losses: new Set() };
    }
    
    try {
        const dailyGamesRef = window.firebaseFirestoreFunctions.collection(
            window.firebaseDb,
            'users',
            currentUser.uid,
            'dailyGames'
        );
        
        // Get all daily games (document IDs are dates in YYYY-MM-DD format)
        const querySnapshot = await window.firebaseFirestoreFunctions.getDocs(dailyGamesRef);
        const winDates = new Set();
        const lossDates = new Set();
        
        // Date range for calendar
        const startDate = '2026-01-01';
        const endDate = '2026-05-31';
        
        querySnapshot.forEach((doc) => {
            const docId = doc.id; // Document ID is the date string
            const data = doc.data();
            
            // Check if date is in range
            if (docId >= startDate && docId <= endDate) {
                // Check game status
                if (data.gameStatus === 'won' || (data.gameCompleted && data.gameStatus === 'won')) {
                    winDates.add(docId);
                } else if (data.gameStatus === 'lost' || (data.gameCompleted && data.gameStatus === 'lost')) {
                    lossDates.add(docId);
                }
            }
        });
        
        return { wins: winDates, losses: lossDates };
    } catch (error) {
        console.error('Error loading game history:', error);
        return { wins: new Set(), losses: new Set() };
    }
}

// Calendar state
let currentCalendarMonth = 0; // 0 = January, 4 = May
let calendarGameHistory = { wins: new Set(), losses: new Set() };

// Render calendar for Jan 2026 to May 2026 (one month at a time)
function renderCalendar(gameHistory) {
    const container = document.getElementById('statsCalendarContainer');
    if (!container) {
        console.error('statsCalendarContainer not found');
        return;
    }
    
    // Store game history for navigation
    calendarGameHistory = gameHistory || { wins: new Set(), losses: new Set() };
    
    // Define months array first (before it's used)
    const months = [
        { name: 'January', days: 31 },
        { name: 'February', days: 28 }, // 2026 is not a leap year
        { name: 'March', days: 31 },
        { name: 'April', days: 30 },
        { name: 'May', days: 31 }
    ];
    
    // Clear container completely
    container.innerHTML = '';
    console.log('=== CALENDAR RENDER START ===');
    console.log('Rendering calendar for month index:', currentCalendarMonth);
    console.log('Total months available:', months.length);
    
    const calendarDiv = document.createElement('div');
    calendarDiv.className = 'stats-calendar';
    
    const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    
    // Navigation header
    const navDiv = document.createElement('div');
    navDiv.className = 'stats-calendar-nav';
    
    const prevButton = document.createElement('button');
    prevButton.className = 'stats-calendar-nav-button';
    prevButton.textContent = '←';
    prevButton.disabled = currentCalendarMonth === 0;
    prevButton.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (currentCalendarMonth > 0) {
            currentCalendarMonth--;
            renderCalendar(calendarGameHistory);
        }
    };
    navDiv.appendChild(prevButton);
    
    const title = document.createElement('div');
    title.className = 'stats-calendar-month-title';
    title.textContent = `${months[currentCalendarMonth].name} 2026`;
    navDiv.appendChild(title);
    
    const nextButton = document.createElement('button');
    nextButton.className = 'stats-calendar-nav-button';
    nextButton.textContent = '→';
    nextButton.disabled = currentCalendarMonth === months.length - 1;
    nextButton.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (currentCalendarMonth < months.length - 1) {
            currentCalendarMonth++;
            renderCalendar(calendarGameHistory);
        }
    };
    navDiv.appendChild(nextButton);
    
    calendarDiv.appendChild(navDiv);
    
    // Calculate day of week for the first day of the current month
    const firstDayOfMonth = new Date(2026, currentCalendarMonth, 1);
    let dayOfWeek = firstDayOfMonth.getDay();
    
    const month = months[currentCalendarMonth];
    const monthDiv = document.createElement('div');
    monthDiv.className = 'stats-calendar-month';
    
    const weekdaysDiv = document.createElement('div');
    weekdaysDiv.className = 'stats-calendar-weekdays';
    weekdays.forEach(day => {
        const weekdayDiv = document.createElement('div');
        weekdayDiv.className = 'stats-calendar-weekday';
        weekdayDiv.textContent = day;
        weekdaysDiv.appendChild(weekdayDiv);
    });
    monthDiv.appendChild(weekdaysDiv);
    
    const daysDiv = document.createElement('div');
    daysDiv.className = 'stats-calendar-days';
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < dayOfWeek; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'stats-calendar-day empty';
        daysDiv.appendChild(emptyDay);
    }
    
    // Add days of the month
    // Use local date to match home page display (which uses toLocaleDateString)
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth() + 1;
    const todayDay = today.getDate();
    
    // Ensure calendarGameHistory has the right structure
    if (!calendarGameHistory || !calendarGameHistory.wins || !calendarGameHistory.losses) {
        calendarGameHistory = { wins: new Set(), losses: new Set() };
    }
    
    for (let day = 1; day <= month.days; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'stats-calendar-day';
        
        const dateStr = `2026-${String(currentCalendarMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const dateObj = new Date(dateStr + 'T00:00:00');
        dateObj.setHours(0, 0, 0, 0);
        const todayForCompare = new Date();
        todayForCompare.setHours(0, 0, 0, 0);
        const isPastDate = dateObj < todayForCompare;
        const isToday = dateObj.getTime() === todayForCompare.getTime();
        
        // Check if this date matches today using local time (accounting for year difference)
        // Calendar shows 2026, but we need to check if today is in 2026 and matches month/day
        const isTodayDate = (todayYear === 2026 && 
                            currentCalendarMonth + 1 === todayMonth && 
                            day === todayDay);
        
        // Check game status for this date
        // First check if it's in the loaded game history
        if (calendarGameHistory.wins && calendarGameHistory.wins.has(dateStr)) {
            // User guessed right = Carolina blue
            dayDiv.classList.add('win');
        } else if (calendarGameHistory.losses && calendarGameHistory.losses.has(dateStr)) {
            // User got it wrong = Duke blue
            dayDiv.classList.add('loss');
        } else if (isTodayDate) {
            // Check current game state for today (even if not saved to DB yet)
            const currentGameStatus = typeof gameStatus !== 'undefined' ? gameStatus : (window.gameStatus || null);
            const currentGameCompleted = typeof gameCompleted !== 'undefined' ? gameCompleted : (window.gameCompleted || false);
            
            if (currentGameStatus === 'won' && currentGameCompleted) {
                // Today's game was won = Carolina blue
                dayDiv.classList.add('win');
            } else if (currentGameStatus === 'lost' && currentGameCompleted) {
                // Today's game was lost = Duke blue
                dayDiv.classList.add('loss');
            } else {
                // Today with no completed game = didn't play = yellow
                dayDiv.classList.add('no-play');
            }
        } else if (isPastDate) {
            // Past date with no game data = didn't play = yellow
            dayDiv.classList.add('no-play');
        }
        // Future dates with no game data = white (default, no class)
        
        dayDiv.textContent = day;
        daysDiv.appendChild(dayDiv);
        
        dayOfWeek = (dayOfWeek + 1) % 7;
    }
    
    monthDiv.appendChild(daysDiv);
    calendarDiv.appendChild(monthDiv);
    
    container.appendChild(calendarDiv);
    console.log('=== CALENDAR RENDER COMPLETE ===');
    console.log('Rendered month:', months[currentCalendarMonth].name);
    console.log('Number of month divs in container:', container.querySelectorAll('.stats-calendar-month').length);
}

window.showStatsPopup = async function showStatsPopup(hideShareButton = false) {
    // Check if user is logged in - if not, show login prompt popup
    // Also check Firebase auth directly in case of timing issues
    let userIsLoggedIn = isLoggedIn && currentUser;
    
    // Double-check with Firebase auth if available and update currentUser
    if (window.firebaseAuth && window.firebaseAuth.currentUser) {
        currentUser = window.firebaseAuth.currentUser;
        isLoggedIn = true;
        userIsLoggedIn = true;
    }
    
    if (!userIsLoggedIn) {
        console.log('User not logged in - showing stats login prompt popup');
        const loginPromptPopup = document.getElementById('statsLoginPromptPopup');
        if (loginPromptPopup) {
            loginPromptPopup.classList.remove('hidden');
            loginPromptPopup.style.display = 'flex';
            return;
        } else {
            console.error('statsLoginPromptPopup element not found');
        }
    }
    
    // Reload stats from Firestore before showing popup (in case they were updated elsewhere)
    // Ensure we have the latest user reference
    if (window.firebaseAuth && window.firebaseAuth.currentUser) {
        currentUser = window.firebaseAuth.currentUser;
        isLoggedIn = true;
    }
    
    if (isLoggedIn && currentUser) {
        await loadUserStats();
    }
    
    const popup = document.getElementById('statsPopup');
    const gamesPlayedEl = document.getElementById('gamesPlayed');
    const winPercentageEl = document.getElementById('winPercentage');
    const currentStreakEl = document.getElementById('currentStreak');
    const maxStreakEl = document.getElementById('maxStreak');
    
    if (popup && gamesPlayedEl && winPercentageEl && currentStreakEl && maxStreakEl) {
        // Calculate win percentage
        const winPercentage = gamesPlayed > 0 ? Math.round((gamesWon / gamesPlayed) * 100) : 0;
        
        gamesPlayedEl.innerText = gamesPlayed;
        winPercentageEl.innerText = winPercentage;
        currentStreakEl.innerText = currentStreak;
        maxStreakEl.innerText = maxStreak;
        
        // Load and render calendar (always show, even if no data)
        // Reset to first month when opening popup
        currentCalendarMonth = 0;
        let gameHistory = { wins: new Set(), losses: new Set() };
        if (isLoggedIn && currentUser) {
            gameHistory = await loadGameHistory();
        }
        renderCalendar(gameHistory);
        
        // Show or hide the share results button based on the parameter
        const shareButtonContainer = document.getElementById('statsShareButtonContainer');
        if (shareButtonContainer) {
            if (hideShareButton) {
                shareButtonContainer.style.display = 'none';
            } else {
                shareButtonContainer.style.display = 'flex';
            }
        }
        
        popup.classList.remove('hidden');
        popup.style.display = 'flex'; // Set inline style to show
    }
};

function closeStatsPopup() {
    const popup = document.getElementById('statsPopup');
    if (popup) {
        popup.classList.add('hidden');
        popup.style.display = ''; // Remove inline style to let CSS handle it
    }
    // Possibly reset the game or redirect the user here
}

function closeStatsLoginPrompt() {
    const popup = document.getElementById('statsLoginPromptPopup');
    if (popup) {
        popup.classList.add('hidden');
        popup.style.display = '';
    }
}

// Make function globally accessible
window.closeStatsLoginPrompt = closeStatsLoginPrompt;

// Calculate points for a win
function calculateWinPoints(guessesUsed, currentStreak) {
    // Base points for winning
    let points = 3;
    
    // Guess bonus: fewer guesses = more points
    // 6 guesses = +0, 5 = +1, 4 = +2, 3 = +3, 2 = +3, 1 = +3
    const guessBonus = Math.max(0, Math.min(3, 7 - guessesUsed));
    points += guessBonus;
    
    // Streak bonus: 1 point per day, capped at 5 points per game
    const streakBonus = Math.min(5, currentStreak);
    points += streakBonus;
    
    return points;
}

// Update these functions as necessary to handle user's stats updates
async function updateStatsOnWin() {
    const guessesUsed = guesses.length; // Number of guesses it took to win
    
    if (isLoggedIn && currentUser && window.firebaseFirestoreFunctions) {
        gamesPlayed++;
        gamesWon++;
        const oldStreak = currentStreak;
        currentStreak++;
        maxStreak = Math.max(maxStreak, currentStreak);
        
        // Calculate points for this win
        const pointsEarned = calculateWinPoints(guessesUsed, oldStreak);
        
        // Update stats in Firestore
        try {
            const userDocRef = window.firebaseFirestoreFunctions.doc(window.firebaseDb, 'users', currentUser.uid);
            const userDoc = await window.firebaseFirestoreFunctions.getDoc(userDocRef);
            const currentPoints = userDoc.exists() ? (userDoc.data().points || 0) : 0;
            const newPoints = currentPoints + pointsEarned;
            
            await window.firebaseFirestoreFunctions.updateDoc(userDocRef, {
                gamesPlayed: gamesPlayed,
                gamesWon: gamesWon,
                currentStreak: currentStreak,
                maxStreak: maxStreak,
                points: newPoints
            });
            console.log('Stats updated on win:', { gamesPlayed, gamesWon, currentStreak, maxStreak, pointsEarned, totalPoints: newPoints });
        } catch (error) {
            console.error('Error updating stats on win:', error);
        }
    } else {
        // Update local stats even if not logged in (won't persist)
        gamesPlayed++;
        gamesWon++;
        currentStreak++;
        maxStreak = Math.max(maxStreak, currentStreak);
        console.log('Stats updated locally (not logged in):', { gamesPlayed, gamesWon, currentStreak, maxStreak });
    }
}

async function updateStatsOnLoss() {
    if (isLoggedIn && currentUser && window.firebaseFirestoreFunctions) {
        gamesPlayed++;
        currentStreak = 0;
        
        // Give 1 participation point for playing (even if lost)
        const pointsEarned = 1;
        
        // Update stats in Firestore (preserve gamesWon and maxStreak)
        try {
            const userDocRef = window.firebaseFirestoreFunctions.doc(window.firebaseDb, 'users', currentUser.uid);
            const userDoc = await window.firebaseFirestoreFunctions.getDoc(userDocRef);
            const currentPoints = userDoc.exists() ? (userDoc.data().points || 0) : 0;
            const newPoints = currentPoints + pointsEarned;
            
            await window.firebaseFirestoreFunctions.updateDoc(userDocRef, {
                gamesPlayed: gamesPlayed,
                currentStreak: currentStreak,
                points: newPoints
            });
            console.log('Stats updated on loss:', { gamesPlayed, gamesWon, currentStreak, maxStreak, pointsEarned, totalPoints: newPoints });
        } catch (error) {
            console.error('Error updating stats on loss:', error);
        }
    } else {
        // Update local stats even if not logged in (won't persist)
        gamesPlayed++;
        currentStreak = 0;
        console.log('Stats updated locally (not logged in):', { gamesPlayed, gamesWon, currentStreak, maxStreak });
    }
}
