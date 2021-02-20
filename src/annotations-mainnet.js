// Small file test results
//
// This are based on a test run (usually once a day) where I attempt
// to make deals for a small file (about ~90kB) with as many miners as
// possible. It is expected that most miners will filter based on size.

// Additional testing will be performed with larger files with
// selected miners (>128MiB of data)

// See annotations-spacerace-slingshot-medium.js for larger file results

const annotations = {
  // New

  // Active

  f03339: 'active, China, Luzhou, benxun', // 1594223 about 2 hours
  f016203: 'active, China, Chengdu', // 1594291 about 2 hours
  f030347: 'active, China, Zhejiang', // 1594150 about 4 hours
  f039515: 'active, China, Chongqing', // 1594187 about 2 hours
  f053088: 'active, China, Shanghai', // 1594192 about 2 hours
  f066804: 'active, China, Zhejiang', // 1593805 about 2 hours
  f081644: 'active, China, Wenzhou', // 1593806 about 4 hours
  f094374: 'active, China, Nanyang', // 1593797 about 2 hours
  f096974: 'active, China, Chongqing', // 1594191 about 3 hours
  f096976: 'active, Russia', // 1593610 about 9 hours
  f0106949: 'active, Korea, Seoul', // 1594568 about 3 hours
  f0110768: 'active, Korea, Gwangju', // 1594146 about 3 hours
  f0146751: 'active, China, Jiangsu', // 1593579 about 2 hours
  f0156207: 'active, Korea, Ulsan', // 1594157 about 2 hours

  // Active-sealing (active, with in-flight sealing)

  // Sealing

  f02540: 'sealing, USA, Mobile', // 1594145
  f02822: 'sealing, China, Chengdu', // 1594194
  f03345: 'sealing, China, Fuzhou, chh', // 1594196
  f08019: 'sealing, China, Yantai, 三合', // 1594193
  f010513: 'sealing, China, Chongqing', // 1594337
  f015233: 'sealing, China, Nanjing', // 1593798
  f016276: 'sealing, China, Beijing', // 1593917
  f019806: 'sealing, China, Beijing', // 1593916
  f020489: 'sealing, China, Lioaning', // 1593802
  f020928: 'sealing, China, Deyang + Singapore', // 1593918
  f022261: 'sealing, China, Luzhou', // 1593946
  f024468: 'sealing, China, Shenzhen', // 1594147
  f024944: 'sealing, Korea, Yeongdeungpo-dong', // 1593799
  f029665: 'sealing, China, Shenyang', // 1593830
  f033036: 'sealing, China, Liaoning', // 1593803
  f044160: 'sealing, China, Guangzhou, muxing', // 1593801
  f055102: 'sealing, Vietman, Ho Chi Minh City + China', // 1593925
  f055132: 'sealing, Vietman, Ho Chi Minh City + China', // 1593924
  f078621: 'sealing, Korea, Uiwang', // 1594602
  f086151: 'sealing, China, Dongguan', // 1593829
  f089840: 'sealing, Korea, Yeongdeungpo-gu', // 1594188
  f092516: 'sealing, USA, Boardman', // 1594230
  f098664: 'sealing, China, Jiangsu', // 1593800
  f0102313: 'sealing, Korea, Gangseo-gu', // 1594226
  f0105074: 'sealing, China, Shanghai', // 1594269
  f0107753: 'sealing, China, Shanghai', // 1594569
  f0113331: 'sealing, Korea, Jinju + USA', // 1594367
  f0116766: 'sealing, USA, Westford', // 1593607
  f0129805: 'sealing, China, Zhejiang + Australia, Adelaide', // 1593684
  f0149444: 'sealing, Korea, Gangseo-gu', // 1594576
  f0156452: 'sealing, Korea, Ulsan', // 1594595
  f0165539: 'sealing, Japan, Yokohama', // 1594254

  // Stuck

  f091355: 'stuck, China, Chengdu', // CheckForAcceptance: 2 days
  f0114687: 'stuck, China, Dongguan', // carry-over
  f0118769: 'stuck, China, Fujian', // carry-over
  f0145385: 'stuck, Malaysia, Petaling Jaya', // CheckForAcceptance: 3 days
  f0165643: 'stuck, China, Guangzhou', // Transferring: about 12 hours

  // Busy

  f015734: 'busy, China, Qingdao', // cannot seal a sector before 520925

  // Min Size

  f01234: 'min-size, Belgium, Bonheiden', // 65536 < 3221225472
  f01238: 'min-size, Vietnam, Hanoi, FILECOIN-VIETNAM', // carry-over
  f01240: 'min-size, Netherlands, HidNand', // carry-over
  f01272: 'min-size, Singapore', // carry-over
  f01276: 'min-size, Canada, Brampton, NBFS Canada', // carry-over
  f01278: 'min-size, USA, Grand Rapids, MiMiner', // carry-over
  f02387: 'min-size, Canada, Brampton, NBFS Canada', // carry-over
  f02401: 'min-size, Canada, Chambly, NBFS Canada', // carry-over
  f02416: 'min-size, China, Guangdong, 星际无限', // carry-over
  f02419: 'min-size, China, Shanghai, yuantai', // carry-over
  f02423: 'min-size, Ukraine, Kyiv', // 65536 < 134217728
  f02576: 'min-size, Denmark, Gjerlev, BenjaminH', // carry-over
  f02619: 'min-size, China, Beijing, Blockcasting', // carry-over
  f02620: 'min-size, Poland, Krakow, @magik6k', // carry-over
  f03224: 'min-size, Ukraine, Kyiv', // 65536 < 134217728
  f03624: 'min-size, Germany, Chemnitz, ode', // carry-over
  f07998: 'min-size, China, Hangzhou', // carry-over
  f08240: 'min-size, Russia, Novosibirsk, Rabinovitch', // carry-over
  f08399: 'min-size, USA, Sammamish', // carry-over
  f08403: 'min-size, UK, Lower Slaughter, TippyFlits', // carry-over
  f09848: 'min-size, USA, Irvine, BigBearLake', // carry-over
  f010035: 'min-size, Netherlands + China, Suzhou', // carry-over
  f010254: 'min-size, Japan, Minamata', // carry-over
  f010446: 'min-size, Netherlands, Angelo', // carry-over
  f010479: 'min-size, France, Fontenay-sous-Bois, s0nik42', // carry-over
  f010507: 'min-size, China, Hangzhou', // 131072 < 1073741824
  f010617: 'min-size, Canada, Surrey, kernelogic2, @feiya200', // carry-over
  f014768: 'min-size, Singapore, Funktafide, @Funk', // carry-over
  f015927: 'min-size, USA, East Islip, CDImine', // carry-over
  f018501: 'min-size, China, Beijing', // carry-over
  f019002: 'min-size, China, Xiamen', // carry-over
  f019104: 'min-size, Canada, Chambly, NBFS DEV', // carry-over
  f019279: 'min-size, Canada, Calgary', // 65536 < 8589934592
  f019362: 'min-size, China, Hangzhou, 青青子衿', // carry-over
  f019399: 'min-size, Korea, Busan', // carry-over
  f019551: 'min-size, UK, Birmingham, @Neofix AF', // carry-over
  f020378: 'min-size, Bulgaria, Asenovgrad', // carry-over
  f020385: 'min-size, Korea, Incheon', // carry-over
  f020436: 'min-size, China, Beijing', // carry-over
  f020904: 'min-size, Korea, Uijeongbu-si, FILTop', // carry-over
  f021255: 'min-size, Netherlands + China, Suzhou', // carry-over
  f021716: 'min-size, New Zealand, Wellington', // carry-over
  f022142: 'min-size, USA, Queens, Nelson SR2', // carry-over
  f022163: 'min-size, dns:fil.akasha.network', // carry-over
  f022289: 'min-size, China, Mianyang', // 131072 < 4294967296
  f022352: 'min-size, Norway, Borgen, TechHedge, @Reiers', // carry-over
  f022399: 'min-size, China, Beijing', // 131072 < 1573031772
  f023467: 'min-size, Norway, Oslo, PhiMining.io', // carry-over
  f023565: 'min-size, China, Fuzhou', // carry-over
  f023660: 'min-size, China, Fuzhou', // carry-over
  f023662: 'min-size, China, Fuzhou', // carry-over
  f023854: 'min-size, China, Fuzhou', // carry-over
  f023855: 'min-size, China, Fuzhou', // carry-over
  f023858: 'min-size, China, Fuzhou', // carry-over
  f023859: 'min-size, China, Fuzhou', // carry-over
  f023861: 'min-size, China, Fuzhou', // carry-over
  f023868: 'min-size, China, Fuzhou', // carry-over
  f023869: 'min-size, China, Fuzhou', // carry-over
  f023870: 'min-size, China, Fuzhou', // carry-over
  f023871: 'min-size, China, Fuzhou', // carry-over
  f023928: 'min-size, China, Fuzhou', // carry-over
  f023971: 'min-size, USA', // 131072 < 2147483648
  f023977: 'min-size, China, Fuzhou', // carry-over
  f023978: 'min-size, China, Fuzhou', // carry-over
  f023980: 'min-size, China, Fuzhou', // carry-over
  f023981: 'min-size, China, Fuzhou', // carry-over
  f024006: 'min-size, China, Fuzhou', // carry-over
  f024007: 'min-size, China, Fuzhou', // carry-over
  f024008: 'min-size, China, Fuzhou', // carry-over
  f024012: 'min-size, China, Fuzhou', // carry-over
  f024013: 'min-size, China, Fuzhou', // carry-over
  f024014: 'min-size, China, Fuzhou', // carry-over
  f024081: 'min-size, undefined', // carry-over
  f024084: 'min-size, China, Fuzhou', // carry-over
  f024136: 'min-size, China, Fuzhou', // carry-over
  f024146: 'min-size, China, Fuzhou', // carry-over
  f024147: 'min-size, China, Fuzhou', // carry-over
  f024148: 'min-size, China, Fuzhou', // carry-over
  f024511: 'min-size, China, Shenzhen', // carry-over
  f025017: 'min-size, China, Hefei, 一三科技-913', // carry-over
  f030335: 'min-size, China, Fujian', // carry-over
  f032934: 'min-size, Korea, Incheon', // carry-over
  f034047: 'min-size, China, Hangzhou', // carry-over
  f039940: 'min-size, China, Mianyang', // 131072 < 134217728
  f047419: 'min-size, USA, Waukesha', // carry-over
  f048669: 'min-size, NR', // carry-over
  f049882: 'min-size, Netherlands, De Rijp, Chipz', // carry-over
  f062353: 'min-size, Germany, Frankfurt', // carry-over
  f064218: 'min-size, USA, Kirkland', // carry-over
  f064668: 'min-size, China, Hong Kong', // carry-over
  f065200: 'min-size, China, Yibin', // 65536 < 33554432
  f066596: 'min-size, USA, San Diego', // carry-over
  f078522: 'min-size, NR', // 131072 < 4294967296
  f079007: 'min-size, China, Jinan', // 131072 < 1048576
  f079817: "min-size, Russia, Ul'yanovka", // carry-over
  f082617: 'min-size, China, Fujian', // carry-over
  f083920: 'min-size, NR', // carry-over
  f085899: 'min-size, China, Wuxi', // carry-over
  f097618: 'min-size, China, Suzhou', // 131072 < 524288000
  f097777: 'min-size, Ukraine, Ivano-Frankivsk', // 65536 < 104857600
  f099608: 'min-size, Latvia, Riga', // 65536 < 268435456
  f0100116: 'min-size, Korea, Uljin County', // 131072 < 1073741824
  f0104671: 'min-size, Japan, Ota-ku', // 65536 < 4294967296
  f0104967: 'min-size, Ukraine, Ternopil', // 65536 < 2147483648
  f0113664: 'min-size, France', // 65536 < 4294967296
  f0116707: 'min-size, Germany, Dusseldorf', // 65536 < 4294967296
  f0118360: 'min-size, China, Hangzhou', // 131072 < 4294967296
  f0121768: 'min-size, China, Guangdong', // 131072 < 1073741824
  f0124335: 'min-size, Finland, Helsinki', // 65536 < 1073741824
  f0126868: 'min-size, Ukraine, Vinnytsia', // 65536 < 10485760
  f0127896: 'min-size, Bulgaria, Sofia', // 65536 < 17179869184
  f0145162: 'min-size, Japan, Kumamoto', // 65536 < 1073741824
  f0145874: 'min-size, Canada, Brampton', // 65536 < 17179869184
  f0157535: 'min-size, Canada, Brampton', // 65536 < 17179869184
  f0165400: 'min-size, Canada, Brampton', // 65536 < 17179869184
  f0187709: 'min-size, Russia, Moscow', // 65536 < 1073741824

  // Max Size

  // Min Ask

  f01241: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f01277: 'min-ask, Sweden, Stockholm', // 20000000 < 61035156250000
  f01280: 'min-ask, China, Wuxi', // 20000000 < 6103515625000000
  f01799: 'min-ask, China, Jinan + Singapore', // 20000000 < 12207031250000000
  f02381: 'min-ask, China, Dongguan', // 20000000 < 6103515625000
  f02415:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 61035156250000
  f02500: 'min-ask, Korea, Seongnam-si', // 20000000 < 610351562500
  f02501: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f02514: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f02606: 'min-ask, China, Zhejiang', // 20000000 < 122070312
  f02622: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f02623: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f02633:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 61035156250000
  f02645:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 61035156250000
  f03143: 'min-ask, Vietman, Ho Chi Minh City + China, Beijing + Shijiazhuang', // 20000000 < 122070312500000
  f03223: 'min-ask, USA', // 20000000 < 305175781250000
  f03273: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f03274: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f03275: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f03364: 'min-ask, China, Inner Mongolia', // 20000000 < 6103515625000000
  f03482: 'min-ask, China, Karamay', // 20000000 < 6103515625000000
  f03488: 'min-ask, Korea, Yeongdeungpo-dong', // 20000000 < 24414062500
  f03491:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 61035156250000
  f05315: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f05316: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f05317: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f05664: 'min-ask, China, Hong Kong', // 20000000 < 24414062500000
  f07850: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f07945: 'min-ask, China, Guangzhou', // 20000000 < 122070312500000000
  f07990:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 61035156250000
  f08025:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 61035156250000
  f08103: 'min-ask, China, Foshan', // 20000000 < 61035156
  f08257: 'min-ask, China, Zhejiang + Singapore', // 20000000 < 12207031250
  f08383: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f09693: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f09696: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f010010: 'min-ask, China, Changzhou', // 20000000 < 6103515625000000000000000
  f010253: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f010405: 'min-ask, China, Foshan', // 20000000 < 122070312500000
  f015897: 'min-ask, China, Hong Kong', // 20000000 < 6103515625000000
  f017665: 'min-ask, China, Shenyang', // 20000000 < 122070312500000
  f018780:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f018781:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f018782: 'min-ask, Singapore + USA + Germany, Frankfurt + UK, London', // 20000000 < 122070312500000
  f018783:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f018784:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f018785:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f019240: 'min-ask, China, Beijing', // 20000000 < 122070312500000
  f020747: 'min-ask, China, Xiamen', // 20000000 < 122070312
  f022308: 'min-ask, China, Bozhou', // 20000000 < 6103515625
  f022522: 'min-ask, China, Dongguan', // 20000000 < 61035156250000000
  f023152: 'min-ask, China, Shandong', // 20000000 < 12207031250000000000000000
  f023495: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f023825: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f023843: 'min-ask, China, Zhangjiakou', // 20000000 < 12207031250000000
  f024015: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f024016: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f024156: 'min-ask, USA', // 20000000 < 122070312500000
  f024184: 'min-ask, Korea, Yeongdeungpo-dong', // 20000000 < 24414062500
  f029401: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f029404: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f030203: 'min-ask, China, Shenzhen', // 20000000 < 6103515625000000
  f030379: 'min-ask, Korea, Uiwang', // 20000000 < 1220703125
  f030384: 'min-ask, China, Shenzhen', // 20000000 < 12207031250000
  f032913: 'min-ask, China, Shenzhen', // 20000000 < 122070312500
  f033123: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f033356: 'min-ask, Korea, Yeongdeungpo-dong', // 20000000 < 24414062500
  f039800: 'min-ask, China, Chengdu', // 20000000 < 122070312500000
  f040218: 'min-ask, China, Wuxi', // 20000000 < 12207031250000000
  f042540: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f042558: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f042635: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f050022: 'min-ask, China, Changsha', // 20000000 < 6103515625000
  f052447: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f054370: 'min-ask, China, Dongguan', // 20000000 < 12207031250
  f056611: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f057614: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f057698: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f058000: 'min-ask, China, Suzhou', // 20000000 < 24414062
  f060072: 'min-ask, China, Chongqing', // 20000000 < 305175781250000
  f061740: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f062260: 'min-ask, China, Guangzhou', // 20000000 < 61035156250000
  f062318: 'min-ask, Korea, Naju', // 20000000 < 12207031250
  f062334: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f062770: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f062811: 'min-ask, China, Fuzhou', // 20000000 < 6103454589843750000
  f062982: 'min-ask, China, Fuzhou', // 20000000 < 6103454589843750000
  f065103: 'min-ask, USA + China, Suzhou + Guangzhou + Karamay', // 20000000 < 61035156250000
  f066104: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f069915: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f069919: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f070501: 'min-ask, USA + China, Hong Kong + Guangzhou', // 20000000 < 122070312500000
  f070999: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f071664: 'min-ask, China, Shangdong', // 20000000 < 6103515625000000000000000
  f071980: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f073552: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f074738: 'min-ask, Korea, Icheon-si', // 20000000 < 610351562500
  f078772: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f079197: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f079247: 'min-ask, USA + China, Guangzhou + Beijing + Dongguan + Shenzhen', // 20000000 < 61035156250000
  f079301: 'min-ask, China, Guangzhou + Dongguan + Shenzhen, USA', // 20000000 < 122070312500000
  f080444: 'min-ask, China, Chengdu', // 20000000 < 122070312500000
  f080480: 'min-ask, Ukraine, Lviv', // 20000000 < 61035156
  f082356: 'min-ask, China, Jiaxing', // 20000000 < 610351562500
  f082452: 'min-ask, China, Dongguan', // 20000000 < 1220581054687500000
  f083625: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f083903: "min-ask, China, Xi'an", // 20000000 < 122192382812500
  f084879: 'min-ask, Korea, Seongnam-si', // 20000000 < 1220703125000
  f092514: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f094614: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f097386: 'min-ask, China, Beijing', // 20000000 < 12206909179687500000
  f098706: 'min-ask, Korea, Icheon-si', // 20000000 < 1220703125000
  f099239: 'min-ask, China, Hong Kong', // 20000000 < 12207031250000000
  f099884: 'min-ask, China, Chengdu', // 20000000 < 610351562500000
  f0100082: 'min-ask, Korea, Seongnam-si', // 20000000 < 1220703125000
  f0101087: 'min-ask, Korea', // 20000000 < 122070312500000
  f0102374: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0102375: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0102376: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f0102513: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f0102641: 'min-ask, China, Guangzhou', // 20000000 < 1220581054687500000
  f0102670: 'min-ask, China, Xiamen', // 20000000 < 121948242187500000
  f0103851: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f0107308: 'min-ask, China, Shenyang', // 20000000 < 121948242187500000
  f0109713: 'min-ask, China, Beijing', // 20000000 < 12206909179687500000
  f0110283: 'min-ask, China, Zhongshan', // 20000000 < 12207031250000000000000000
  f0110442: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0110936: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0114808: 'min-ask, China, Shanghai', // 20000000 < 12207031250000000
  f0114924: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0115744: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0120983: 'min-ask, China, Fujian', // 20000000 < 1220581054687500000
  f0121450: 'min-ask, China, Fujian', // 20000000 < 610290527343750000
  f0121958: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0123931: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0124102: 'min-ask, China, Beijing', // 20000000 < 12206909179687500000
  f0128974: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0129072: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0131464: 'min-ask, USA, Ashburn', // 20000000 < 122070312500000000
  f0131654: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0132706: 'min-ask, China, Beijing', // 20000000 < 12207031250000000
  f0133999: 'min-ask, China, Changsha', // 20000000 < 610351562
  f0134565: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0134682: 'min-ask, China, Beijing', // 20000000 < 6103454589843750000
  f0134778: 'min-ask, China, Beijing', // 20000000 < 6103454589843750000
  f0134991: 'min-ask, China, Foshan', // 20000000 < 12206909179687500000
  f0135738: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0141614: 'min-ask, China, Fujian', // 20000000 < 1220703124877929687500000
  f0141634: 'min-ask, China, Changsha', // 20000000 < 122070312500000
  f0145313: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0146165: 'min-ask, China, Huizhou', // 20000000 < 122070190429687500000
  f0146875: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f0148399: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0149765: 'min-ask, China, Beijing', // 20000000 < 6103454589843750000
  f0149768: 'min-ask, China, Dongguan', // 20000000 < 122070312500000
  f0151281: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0151692: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0152747: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0152854: 'min-ask, China, Huizhou', // 20000000 < 1220581054687500000
  f0153176: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0154988: 'min-ask, China, Dongguan', // 20000000 < 61035095214843750000
  f0157769: 'min-ask, China, Changsha', // 20000000 < 122070312500000
  f0157941: 'min-ask, China, Changsha', // 20000000 < 122070312500000
  f0158142: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0158468: 'min-ask, China, Guangzhou', // 20000000 < 12206909179687500000
  f0165111: 'min-ask, China, Guangzhou', // 20000000 < 1220703125000000000
  f0215704: 'min-ask, Korea, Icheon-si', // 20000000 < 1220703125000

  // Error

  f03134: 'error, China, Cangzhou, 乔木信息', // deal failed: (State=26) handing off deal to node: write |1: broken pipe
  f07709: 'error, Korea, Dongjak-gu', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: SysErrOutOfGas(7)
  f09689: 'error, USA, Portland', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f010241: 'error, China, Beijing + USA, Portland, 6Block-P', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 2.385595691070875808 FIL, balance: 1.137184564132064476 FIL): not enough funds to execute transaction
  f014569: 'error, China, Yangzhou', // stream reset
  f016398: 'error, China, Shanghai', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f017193: "error, China, Xi'an + Singapore", // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f017242: 'error, China, Guangdong', // stream reset
  f019100: 'error, Romania, Cluj-Napoca', // stream reset
  f019824: 'error, USA', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.179999999964086239 FIL, balance: 0.092668830630241061 FIL): not enough funds to execute transaction
  f022820: 'error, China, Guangdong', // stream reset
  f023179: 'error, China, Fuzhou', // AddPiece failed: adding piece to sector: writing piece: no suitable P1 workers found
  f023198: 'error, NR', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f025025: 'error, China, Qingdao', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999952103408 FIL, balance: 0.010414142589193078 FIL): not enough funds to execute transaction
  f030125: 'error, China, Nantong', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.29999999996578962 FIL, balance: 0.171655331867495893 FIL): not enough funds to execute transaction
  f042567: 'error, China, Jinhua', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 4.0664434553250786 FIL, balance: 0.311183058722651253 FIL): not enough funds to execute transaction
  f054415: 'error, NR', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f079370: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f085777: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f090052: 'error, China, Suqian', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f093658: 'error, China, Fujian', // deal failed: (State=26) handing off deal to node: write |1: broken pipe
  f094901: 'error, Korea, Bucheon-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.49999999998919005 FIL, balance: 0.362365118512101744 FIL): not enough funds to execute transaction
  f0101387: 'error, China, Shenzhen', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.5415333073434099 FIL, balance: 0.489326159491395194 FIL): not enough funds to execute transaction
  f0109040: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0109043: 'error, China, Karamay', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 3.57070054909691776 FIL, balance: 0.415811107476371135 FIL): not enough funds to execute transaction
  f0110133: 'error, China, Ningbo', // stream reset
  f0116436: 'error, Singapore', // EOF
  f0116445: 'error, Singapore', // EOF
  f0123536: 'error, China, Fuzhou', // stream reset
  f0131901: 'error, Korea, Daejeon', // deal failed: (State=11) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 10.793043594817418846 FIL, balance: 10.498216165137382625 FIL): validation failure
  f0137489: 'error, UK, Deeside', // deal failed: (State=26) error calling node: AddFunds exit code: SysErrOutOfGas(7)
  f0145018: 'error, Korea', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.249999999955096349 FIL, balance: 0.139644554642297562 FIL): not enough funds to execute transaction
  f0148143: 'error, China, Tianjin', // AddPiece failed: adding piece to sector: writing piece: storage call error 0: creating unsealed sector file: writing trailer: writing trailer length: write /fcfs/f0148143/unsealed/s-t0148143-24949.tmp: operation not supported
  f0150782: 'error, China, Xiamen', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0151341: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0151366: 'error, China, Fuzhou + Xiamen', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0158993: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0162183: "error, China, Xi'an", // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported

  // Dial backoff

  f015767: 'backoff, Russia, Khabarovsk + Japan, Khabarovsk + USA', // carry-over
  f073628: 'backoff, USA, New Castle', // carry-over

  // Rejected

  f01247: 'rejected, Canada, Montreal', // carry-over
  f01289: 'rejected, China, Ningbo', // carry-over
  f02299: 'rejected, China, Beijing', // no online
  f02301: 'rejected, USA', // carry-over
  f02303: 'rejected, Singapore', // carry-over
  f02421: 'rejected, China, Deyang + Singapore', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f02529: 'rejected, China, Chongqing + Singapore',
  f02609: 'rejected, China, Shanghai', // carry-over
  f02613: 'rejected, China, Chongqing + Singapore',
  f02625: 'rejected, China, Shanghai', // no online
  f02626: 'rejected, Singapore', // carry-over
  f02665: 'rejected, Netherlands, Amsterdam, fm-ops', // carry-over
  f02856: 'rejected, China, Chengdu', // carry-over
  f03000: 'rejected, China, Chengdu', // no online
  f03249: 'rejected, China, Yunfu',
  f03344: 'rejected, China, Guangzhou', // no online
  f03362: 'rejected, Germany, Berlin', // carry-over
  f08094: 'rejected, China, Guangzhou', // no online
  f08157: 'rejected, China, Beijing + Germany, Frankfurt, 超星际', // carry-over
  f08197: 'rejected, China, Foshan',
  f09620: 'rejected, China, Weifang', // carry-over
  f09642: 'rejected, Sweden, Alvsjo',
  f09710: 'rejected, China, Shenzhen',
  f010038: 'rejected, China, Hangzhou + Singapore',
  f010400: 'rejected, China, Shenyang',
  f010493: 'rejected, China, Shanghai', // carry-over
  f010498: 'rejected, China, Shenzhen', // carry-over
  f010505: 'rejected, China, Wuhan, Interstellar Roewe', // carry-over
  f010528: 'rejected, China, Chongqing, Interstellar Roewe', // carry-over
  f014233: 'rejected, China, Shanghai + USA', // no online
  f014251: 'rejected, China, Shenzhen', // carry-over
  f014327:
    'rejected, China, Ningbo + Japan, Heiwajima + Germany, Frankfurt + USA + Canada, Toronto', // no online
  f014683: 'rejected, China, Dongguan',
  f015747: 'rejected, Japan, Setagaya-ku', // carry-over
  f017229: 'rejected, China, Sichuan',
  f019041: 'rejected, China, Zhejiang + Singapore', // no online
  f019099: 'rejected, China, Hong Kong + Guangzhou', // no online
  f019422: 'rejected, China, Guangzhou', // no online
  f020523: 'rejected, China, Suzhou, changjiang', // carry-over
  f021254: 'rejected, NR', // carry-over
  f021504: 'rejected, NR', // carry-over
  f021536: 'rejected, NR', // carry-over
  f021714: 'rejected, China, Hong Kong',
  f021870: 'rejected, China, Jieyang',
  f021961: 'rejected, China, Fuzhou', // carry-over
  f022072: 'rejected, China, Jieyang', // carry-over
  f022125: 'rejected, China, Shenzhen', // no online
  f022566: 'rejected, China, Nanchong',
  f022748: 'rejected, China, Xinyang', // carry-over
  f022832: 'rejected, China, Beijing',
  f022853: 'rejected, China, Fuzhou', // carry-over
  f023534: 'rejected, China, Chongqing',
  f023982: 'rejected, China, Chengdu',
  f023983: 'rejected, China, Chongqing',
  f029490: 'rejected, NR', // carry-over
  f032888: 'rejected, China, Weifang',
  f033501: 'rejected, China, Shenzhen',
  f034258: 'rejected, China, Mianyang',
  f034567: 'rejected, China, Shenzhen',
  f034777: 'rejected, China, Chengdu', // carry-over
  f035436: 'rejected, China, Jiangsu', // carry-over
  f040332: 'rejected, China, Shenzhen', // carry-over
  f042391: 'rejected, China, Fuzhou', // carry-over
  f042896: 'rejected, China, Deyang', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f045756: 'rejected, China, Hangzhou', // carry-over
  f046248: 'rejected, China, Dongguan',
  f047843: 'rejected, China, Xiamen', // carry-over
  f047857: 'rejected, China, Fuzhou', // carry-over
  f047868: 'rejected, China, Fuzhou', // carry-over
  f048135: 'rejected, China, Chongqing, password interstellar', // carry-over
  f048968: 'rejected, NR', // carry-over
  f050260: 'rejected, China, Suzhou', // carry-over
  f052701: 'rejected, China, Beijing', // carry-over
  f053140: 'rejected, China, Shenzhen',
  f053141: 'rejected, China, Shenzhen',
  f055335: 'rejected, NR', // carry-over
  f056226: 'rejected, NR', // carry-over
  f056406: 'rejected, China, Taizhou', // no online
  f056573: 'rejected, China, Sichuan', // carry-over
  f057466: 'rejected, China, Guangzhou', // carry-over
  f060114: 'rejected, China, Shenzhen',
  f062937: 'rejected, NR', // carry-over
  f063869: 'rejected, NR', // carry-over
  f066270: 'rejected, China, Dongguan', // carry-over
  f066781: 'rejected, China, Beijing',
  f066790: 'rejected, China, Beijing', // carry-over
  f068528: 'rejected, China, Shanghai', // no online
  f068560: 'rejected, China, Changsha', // carry-over
  f071624: 'rejected, USA, Boyne City', // no online
  f073697: 'rejected, China, Karamay',
  f078899: 'rejected, NR', // carry-over
  f079618: 'rejected, China, Beijing', // carry-over
  f079815: 'rejected, China, Hangzhou', // carry-over
  f080468: 'rejected, NR', // carry-over
  f081323: 'rejected, UK, Cambridge', // no online
  f083065: 'rejected, China, Taizhou', // carry-over
  f083638: 'rejected, China, Chongqing', // carry-over
  f085710: 'rejected, China, Chengdu', // carry-over
  f085735: "rejected, China, Ya'an", // carry-over
  f086423: 'rejected, China, Chengdu', // carry-over
  f087256: 'rejected, China, Hangzhou', // carry-over
  f087530: 'rejected, China, Shenzhen', // carry-over
  f089551: 'rejected, NR', // carry-over
  f090387: 'rejected, China, Fuzhou', // carry-over
  f090864: 'rejected, NR', // carry-over
  f098770: 'rejected, USA, Pontiac', // no online
  f0102358: 'rejected, China, Guizhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f0107118: 'rejected, China, Hangzhou + Zhejiang', // no online
  f0109272: 'rejected, China, Dongguan', // carry-over
  f0111544: 'rejected, Korea, Seoul', // no online
  f0111658: 'rejected, China, Fuzhou', // carry-over
  f0112075: 'rejected, Korea, Seoul', // no online
  f0112087: 'rejected, China, Xiamen', // carry-over
  f0112691: 'rejected, Korea, Seoul', // no online
  f0116628: 'rejected, China, Shanghai', // carry-over
  f0118317: 'rejected, Singapore',
  f0118330: 'rejected, Singapore',
  f0118837: 'rejected, Korea, Seoul', // no online
  f0120546: 'rejected, Korea, Seoul', // no online
  f0120793: 'rejected, Korea, Seoul', // no online
  f0120909: 'rejected, China, Changsha', // carry-over
  f0121260: 'rejected, China, Quinzhou', // carry-over
  f0121602: 'rejected, China, Hong Kong', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0124036: 'rejected, China, Nanchang', // no online
  f0126037: 'rejected, Korea, Seoul', // no online
  f0126038: 'rejected, Korea, Seoul', // no online
  f0126824: 'rejected, Korea, Seongnam-si', // no online
  f0127352: 'rejected, Korea, Seoul', // no online
  f0127353: 'rejected, Korea, Seoul', // no online
  f0127354: 'rejected, Korea, Seoul', // no online
  f0128580: 'rejected, Korea, Seoul', // no online
  f0128581: 'rejected, Korea, Seoul', // no online
  f0128582: 'rejected, Korea, Seoul', // no online
  f0129976: 'rejected, Korea, Gwangju', // no online
  f0131331: 'rejected, China, Beijing',
  f0131611: 'rejected, Korea, Jeju City', // no online
  f0132178: 'rejected, China, Ningbo',
  f0134285: "rejected, China, Ya'an + USA", // no online
  f0134516: 'rejected, Singapore',
  f0134518: 'rejected, China, Guangdong',
  f0135078: 'rejected, USA, Denver', // no online
  f0143160: 'rejected, China, Ningbo',
  f0143500: 'rejected, China, Zhejiang', // no online
  f0143928: 'rejected, China, Beijing',
  f0146301: 'rejected, China, Shenzhen', // no online
  f0146393: 'rejected, China, Foshan', // no online
  f0147284: 'rejected, Korea, Seongnam-si', // no online
  f0147565: 'rejected, China, Shenzhen',
  f0148391: 'rejected, China, Changsha + Japan, Tokyo', // no online
  f0149026: 'rejected, China, Shenzhen',
  f0151993: 'rejected, Korea, Icheon-si', // no online
  f0153986: 'rejected, China, Changsha', // syntax error at /filecoin/lotusminer/dealfilter.pl line 13, near "my "Global symbol "$denylist" requires explicit package name (did you forget to declare "my $denylist"?) at /filecoin/lotusminer/dealfilter.pl line 13.BEGIN not safe after errors--compilation aborted at /filecoin/lotusminer/dealfilter.pl line 17.
  f0155384: 'rejected, Korea, Seongnam-si', // no online
  f0155467: 'rejected, Korea, Seongnam-si', // no online
  f0156333: 'rejected, China, Ningbo',

  // Dial

  f01235: 'dial, Singapore', // carry-over
  f01248: 'dial, Germany, Frankfurt', // carry-over
  f01274: 'dial, China, Guangdong', // carry-over
  f01287: 'dial, China, Jiaxing, MaiTian', // carry-over
  f01291: 'dial, Sweden, Stockholm, tvsthlm', // carry-over
  f01782: 'dial, China, Shanghai', // carry-over
  f01800: 'dial, China, Shenzhen + Chengdu', // carry-over
  f02405: 'dial, China, Shenzhen', // carry-over
  f02422: "dial, China, Xi'an", // * [/ip4/117.38.4.82/tcp/22347] dial tcp4 0.0.0.0:40873->117.38.4.82:22347: i/o timeout
  f02438: 'dial, China, Guangdong', // carry-over
  f02490: 'dial, China, Fujian', // carry-over
  f02520: 'dial, China, Hong Kong + Dongguan', // carry-over
  f02528: 'dial, Singapore', // carry-over
  f02668: 'dial, China, Chengdu', // carry-over
  f03225: 'dial, China, Guyuan', // carry-over
  f03328: 'dial, China, Xinxiang, Golden Miner', // carry-over
  f03347: 'dial, China, Shenzhen', // carry-over
  f07819: 'dial, China, Wuxi, YC--wuxi', // carry-over
  f07919: 'dial, China, Beijing, Shanghai, Hunan', // carry-over
  f08264: 'dial, China, Xianning', // carry-over
  f08285: 'dial, Latvia, Riga, stander', // carry-over
  f08532: 'dial, USA', // carry-over
  f09037: 'dial, Singapore', // carry-over
  f09652: 'dial, Singapore', // carry-over
  f010247: 'dial, China, Yantai', // carry-over
  f010399: 'dial, China, Guangzhou', // carry-over
  f010491: 'dial, China, Shenzhen', // carry-over
  f010501: 'dial, China, Hangzhou, Interstellar Roewe', // carry-over
  f010523: 'dial, China, Beijing, Interstellar Roewe', // carry-over
  f014394: 'dial, China, Suzhou, IPFSCloud', // carry-over
  f014395: 'dial, China, Dongguan', // carry-over
  f015941: 'dial, Ukraine, Kyiv', // carry-over
  f015942: 'dial, China, Ningbo', // carry-over
  f016594: 'dial, Germany', // carry-over
  f019029: 'dial, Serbia, Boljevac', // carry-over
  f019354: 'dial, Germany, Frankfurt', // * [/ip4/128.1.78.98/tcp/31437] dial tcp4 0.0.0.0:40873->128.1.78.98:31437: i/o timeout
  f020223: 'dial, China, Guiyang', // carry-over
  f021075: 'dial, China, Chengdu', // carry-over
  f023001: 'dial, China, Changsha', // carry-over
  f023219: 'dial, China, Beijing + Zhangjiakou', // * [/ip4/116.132.221.24/tcp/42990] dial tcp4 0.0.0.0:40873->116.132.221.24:42990: i/o timeout
  f023581: 'dial, China, Hong Kong, mine-much', // carry-over
  f023853: 'dial, China, Fuzhou', // carry-over
  f023876: 'dial, China, Fuzhou', // carry-over
  f024085: 'dial, China, Fuzhou', // carry-over
  f025007: 'dial, Korea, Gyeonggi-do, PINBYTES-eCUBE', // carry-over
  f025019: 'dial, China, Taiwan, Hsinchu', // carry-over
  f030327: 'dial, China, Beijing', // carry-over
  f033549: 'dial, China, Quzhou', // carry-over
  f034544: 'dial, NR', // carry-over
  f034545: 'dial, NR', // carry-over
  f034548: 'dial, NR', // carry-over
  f034592: 'dial, NR', // carry-over
  f034701: 'dial, China, Shenzhen', // carry-over
  f046043: 'dial, China, Shanghai', // carry-over
  f046073: 'dial, China, Shanghai', // carry-over
  f046074: 'dial, China, Shanghai', // carry-over
  f048172: 'dial, China, Suzhou', // carry-over
  f048192: 'dial, China, Suzhou', // carry-over
  f049911: 'dial, China, Yunfu', // carry-over
  f053229: 'dial, NR', // carry-over
  f054163: 'dial, China, Dongguan', // carry-over
  f054420: 'dial, NR', // carry-over
  f054677: 'dial, Finland, Helsinki', // carry-over
  f055123: 'dial, Korea, Busan', // carry-over
  f055522: 'dial, USA', // * [/ip4/207.2.201.158/tcp/24002] dial tcp4 0.0.0.0:33373->207.2.201.158:24002: i/o timeout
  f057070: 'dial, NR', // carry-over
  f057127: 'dial, China, Suzhou', // carry-over
  f057842: 'dial, Korea, Gyeonggi-do', // carry-over
  f061043: 'dial, China, Changsha', // carry-over
  f061158: 'dial, China, Guangdong', // carry-over
  f061959: 'dial, NR', // carry-over
  f062375: 'dial, Korea, Gyeonggi-do', // carry-over
  f062492: 'dial, China, Hong Kong', // carry-over
  f062931: 'dial, NR', // carry-over
  f063173: 'dial, Korea, Gyeonggi-do', // carry-over
  f064442: 'dial, Japan', // carry-over
  f065732: 'dial, Korea, Gyeonggi-do', // carry-over
  f066102: 'dial, NR', // carry-over
  f066259: 'dial, NR', // carry-over
  f066566: 'dial, Korea, Gwangju', // carry-over
  f066568: 'dial, Korea, Gwangju, aoc-0002', // carry-over
  f067083: 'dial, Russia, Moscow', // carry-over
  f067195: 'dial, China, Huizhou', // carry-over
  f067314: 'dial, China, Ningbo', // carry-over
  f067545: 'dial, Canada, Kitchener', // carry-over
  f068096: 'dial, China, Sichuan', // carry-over
  f071190: 'dial, Korea, Gyeonggi-do', // carry-over
  f071914: 'dial, China, Beijing', // carry-over
  f073048: 'dial, Korea, Gyeonggi-do', // carry-over
  f073448: 'dial, NR', // carry-over
  f073535: 'dial, Korea, Gyeonggi-do', // carry-over
  f078425: 'dial, Korea, Bucheon-si', // carry-over
  f079285: 'dial, NR', // carry-over
  f080103: 'dial, Korea, Seongnam-si', // carry-over
  f082095: 'dial, NR', // carry-over
  f082250: 'dial, China, Guilin', // carry-over
  f082669: 'dial, USA, Daytona Beach', // carry-over
  f082730: 'dial, NR', // carry-over
  f082958: 'dial, NR', // carry-over
  f083235: 'dial, Serbia, Belgrade', // carry-over
  f085904: 'dial, China, Chongqing', // carry-over
  f086610: 'dial, Korea, Gyeonggi-do', // carry-over
  f087931: 'dial, China, Beijing', // carry-over
  f088305: 'dial, Korea, Gyeonggi-do', // carry-over
  f088404: 'dial, Korea, Gyeonggi-do', // carry-over
  f089201: 'dial, Korea, Gyeonggi-do', // carry-over
  f090086: 'dial, Korea', // carry-over
  f090363: 'dial, China, Beijing', // carry-over
  f090747: 'dial, Korea, Anyang-si', // carry-over
  f091139: 'dial, Korea, Gyeonggi-do', // carry-over
  f092630: 'dial, Korea, Gyeonggi-do', // carry-over
  f092776: 'dial, Korea, Gimhae', // carry-over
  f094085: 'dial, Japan, Ota-ku', // carry-over
  f094128: 'dial, China, Shenzhen', // carry-over
  f094765: 'dial, NR', // carry-over
  f094899: 'dial, Korea', // carry-over
  f095049: 'dial, Korea, Bucheon-si', // carry-over
  f095296: 'dial, China, Suqian', // * [/ip4/222.187.238.207/tcp/24001] failed to negotiate security protocol: read tcp4 66.70.191.245:33373->222.187.238.207:24001: read: connection reset by peer
  f095506: 'dial, China, Ningxia', // carry-over
  f096224: 'dial, China, Chongqing', // carry-over
  f0130961: 'dial, Korea, Seongnam-si', // * [/ip4/121.165.242.197/tcp/24001] dial tcp4 121.165.242.197:24001: i/o timeout
  f0213894: 'dial, China, Hangzhou', // carry-over

  // XNR (Not routable)

  f01231: 'xnr, Singapore', // carry-over
  f02388: 'xnr, Netherlands, Amersfoort, Kroketje', // carry-over
  f02769: 'xnr, NR', // carry-over
  f02770: 'xnr, China, Hong Kong', // carry-over
  f02775: 'xnr, China, Hong Kong', // carry-over
  f02777: 'xnr, NR', // carry-over
  f02778: 'xnr, NR', // carry-over
  f02779: 'xnr, NR', // carry-over
  f010202: 'xnr, Singapore', // carry-over
  f010213: 'xnr, NR', // carry-over
  f010222: 'xnr, NR', // carry-over
  f010227: 'xnr, China, Xiamen', // carry-over
  f010244: 'xnr, USA, Newton', // carry-over
  f010248: 'xnr, China, Yibin', // carry-over
  f010265: 'xnr, China, Zhengzhou', // carry-over
  f010275: 'xnr, Korea, Cheongju-si + USA', // carry-over
  f010277: 'xnr, France, Fontenay-sous-Bois', // carry-over
  f010281: 'xnr, China, Shanghai', // carry-over
  f010282: 'xnr, USA, San Francisco', // carry-over
  f010283: 'xnr, Brazil, Sao Paulo', // carry-over
  f010292: 'xnr, NR', // carry-over
  f010293: 'xnr, China, Xiamen', // carry-over
  f010297: 'xnr, USA, Howell', // carry-over
  f010303: 'xnr, China, Guangdong', // carry-over
  f010305: 'xnr, NR', // carry-over
  f010310: 'xnr, Canada, Surrey', // carry-over
  f010313: 'xnr, NR', // carry-over
  f010315: 'xnr, Canada, Surrey', // carry-over
  f010346: 'xnr, China, Karamay', // carry-over
  f010382: 'xnr, NR', // carry-over
  f010402: 'xnr, China, Shenyang', // carry-over
  f010425: 'xnr, NR', // carry-over
  f010433: 'xnr, Korea, Seoul', // carry-over
  f010438: 'xnr, USA', // carry-over
  f010453: 'xnr, China, Shaanxi', // carry-over
  f010468: 'xnr, China, Guangzhou', // carry-over
  f010490: 'xnr, NR', // carry-over
  f010517: 'xnr, China, Chongqing', // carry-over
  f010520: 'xnr, China, Hangzhou', // carry-over
  f010542: 'xnr, China, Ordos', // carry-over
  f010549: 'xnr, China, Ordos', // carry-over
  f010551: 'xnr, China, Shenyang', // carry-over
  f010559: 'xnr, China, Shenyang', // carry-over
  f010566: 'xnr, NR', // carry-over
  f010591: 'xnr, China, Wuhan', // carry-over
  f010601: 'xnr, NR', // carry-over
  f010602: 'xnr, China, Guangdong', // carry-over
  f010603: 'xnr, China, Baoding', // carry-over
  f010612: 'xnr, USA, Mountain View', // carry-over
  f014207: 'xnr, USA', // carry-over
  f014261: 'xnr, China, Fuzhou', // carry-over
  f014271: 'xnr, China, Fuzhou', // carry-over
  f014314: 'xnr, Korea, Bucheon-si', // carry-over
  f014331: 'xnr, China, Chongqing', // carry-over
  f014335: 'xnr, NR', // carry-over
  f014354: 'xnr, USA, Concord', // carry-over
  f014366: 'xnr, USA, Mountain View', // carry-over
  f014388: 'xnr, China, Guangdong', // carry-over
  f014389: 'xnr, China, Chongqing', // carry-over
  f014407: 'xnr, China, Shanghai', // carry-over
  f014419: 'xnr, USA, San Diego', // carry-over
  f014420: 'xnr, Russia, Samara', // carry-over
  f014425: 'xnr, Singapore', // carry-over
  f014477: 'xnr, China, Hangzhou', // carry-over
  f014478: 'xnr, Finland', // carry-over
  f014486: 'xnr, NR', // carry-over
  f014495: 'xnr, China, Hong Kong', // carry-over
  f014514: 'xnr, China, Fuzhou', // carry-over
  f014533: 'xnr, China, Fuzhou', // carry-over
  f014540: 'xnr, USA, Newton', // carry-over
  f014556: 'xnr, Korea, Bucheon-si', // carry-over
  f014629: 'xnr, NR', // carry-over
  f014660: 'xnr, Korea, Busan', // carry-over
  f014685: 'xnr, Hong Kong', // carry-over
  f014686: 'xnr, Singapore', // carry-over
  f014708: 'xnr, China, Beijing', // carry-over
  f014741: 'xnr, China, Wuhan', // carry-over
  f014745: 'xnr, China, Shenyang', // carry-over
  f014749: 'xnr, China, Chongqing', // carry-over
  f014764: 'xnr, Korea, Wanju', // carry-over
  f014793: 'xnr, China, Hangzhou', // carry-over
  f014799: 'xnr, China, Chongqing', // carry-over
  f015061: 'xnr, Australia, Sydney', // carry-over
  f015232: 'xnr, Poland, Warsaw', // carry-over
  f015647: 'xnr, China, Shenzhen', // carry-over
  f015709: 'xnr, China, Hefei', // carry-over
  f015724: 'xnr, China, Guangdong', // carry-over
  f015753: 'xnr, China, Guyuan', // carry-over
  f015797: 'xnr, Germany, Rostock', // carry-over
  f015798: 'xnr, Germany', // carry-over
  f015799: 'xnr, Germany, Rostock', // carry-over
  f015800: 'xnr, Germany, Sankt Andreasberg', // carry-over
  f015802: 'xnr, Germany', // carry-over
  f015805: 'xnr, Germany', // carry-over
  f015808: 'xnr, Germany', // carry-over
  f015809: 'xnr, Germany', // carry-over
  f015810: 'xnr, Germany', // carry-over
  f015811: 'xnr, Germany, Lanshut', // carry-over
  f015812: 'xnr, Germany', // carry-over
  f015827: 'xnr, Russia', // carry-over
  f015829: 'xnr, China, Beijing', // carry-over
  f015833: 'xnr, China, Baoding', // carry-over
  f015867: 'xnr, Netherlands, Amsterdam', // carry-over
  f015870: 'xnr, China, Hangzhou', // carry-over
  f015875: 'xnr, China, Fuzhou', // carry-over
  f015877: 'xnr, China, Jiaxing + USA', // carry-over
  f015885: 'xnr, China, Jiaxing', // carry-over
  f015891: 'xnr, China, Shanghai', // carry-over
  f015901: 'xnr, Germany', // carry-over
  f015902: 'xnr, Germany', // carry-over
  f015920: 'xnr, China, Guangdong', // carry-over
  f015932: 'xnr, NR', // carry-over
  f015935: 'xnr, China, Sichuan', // carry-over
  f015938: 'xnr, Canada, Waterloo', // carry-over
  f015940: 'xnr, Netherlands, Amsterdam', // carry-over
  f016140: 'xnr, China, Beijing', // carry-over
  f016162: 'xnr, France, Borgo', // carry-over
  f016172: 'xnr, China, Guangdong', // carry-over
  f016217: 'xnr, China, Nanchong', // carry-over
  f016228: 'xnr, China, Chengdu', // carry-over
  f016234: 'xnr, China, Chengdu', // carry-over
  f016262: 'xnr, China, Fuzhou', // carry-over
  f016271: 'xnr, Korea, Seodaemun-gu', // carry-over
  f016299: 'xnr, China, Shanghai', // carry-over
  f016303: 'xnr, USA, Boardman', // carry-over
  f016304: 'xnr, USA, Boardman', // carry-over
  f016305: 'xnr, USA, Boardman', // carry-over
  f016306: 'xnr, USA, Boardman', // carry-over
  f016408: 'xnr, NR', // carry-over
  f016426: 'xnr, NR', // carry-over
  f016436: 'xnr, Korea, Seoul', // carry-over
  f016456: 'xnr, China, Zhejiang', // carry-over
  f016462: 'xnr, USA, Clarksville', // carry-over
  f016482: 'xnr, USA, Aliquippa', // carry-over
  f016628: 'xnr, NR', // carry-over
  f016688: 'xnr, Germany, Frankfurt', // carry-over
  f016706: 'xnr, China, Guangzhou', // carry-over
  f017117: 'xnr, Russia, Samara', // carry-over
  f017171: 'xnr, NR', // carry-over
  f017181: 'xnr, China, Nanchong', // carry-over
  f017186: 'xnr, China, Jiaxing', // carry-over
  f017209: 'xnr, NR', // carry-over
  f017215: 'xnr, Finland', // carry-over
  f017216: 'xnr, NR', // carry-over
  f017236: 'xnr, NR', // carry-over
  f017251: 'xnr, USA', // carry-over
  f017294: 'xnr, China, Shenzhen', // carry-over
  f017323: 'xnr, Poland, Warsaw', // carry-over
  f017334: 'xnr, China, Fuzhou', // carry-over
  f017430: 'xnr, Australia, Alexandria-cfa', // carry-over
  f017618: 'xnr, Korea, Wanju', // carry-over
  f017628: 'xnr, Brazil, Sao Paulo', // carry-over
  f017655: 'xnr, NR', // carry-over
  f017722: 'xnr, NR', // carry-over
  f017747: 'xnr, NR', // carry-over
  f017793: 'xnr, NR', // carry-over
  f018081: 'xnr, Germany', // carry-over
  f018095: 'xnr, Colombia, Medellin', // carry-over
  f018128: 'xnr, China, Dongguan', // carry-over
  f018164: 'xnr, USA, Howell', // carry-over
  f018311: "xnr, China, Xi'an, <23h", // carry-over
  f018369: 'xnr, NR', // carry-over
  f018393: 'xnr, Colombia, Medellin', // carry-over
  f018397: 'xnr, USA, Howell', // carry-over
  f018425: 'xnr, USA, Howell', // carry-over
  f018437: 'xnr, NR', // carry-over
  f018441: 'xnr, USA', // carry-over
  f018445: 'xnr, NR', // carry-over
  f018446: 'xnr, China, Dongguan', // carry-over
  f018456: 'xnr, Brazil, Sao Paulo', // carry-over
  f018474: 'xnr, China, Xiamen', // carry-over
  f018484: 'xnr, China, Shanghai', // carry-over
  f018490: 'xnr, Korea, Hwaseong-si', // carry-over
  f018513: 'xnr, NR', // carry-over
  f018517: 'xnr, USA, Columbus', // carry-over
  f018518: "xnr, China, Xi'an", // carry-over
  f018520: 'xnr, China', // carry-over
  f018530: 'xnr, China, Shaanxi', // carry-over
  f018531: 'xnr, China, Shaanxi', // carry-over
  f018537: 'xnr, China, Shaanxi', // carry-over
  f018538: 'xnr, China, Huzhou', // carry-over
  f018542: 'xnr, China, Chongqing', // carry-over
  f018754: 'xnr, China, Dali', // carry-over
  f018761: 'xnr, Russia, St. Petersburg', // carry-over
  f018790: 'xnr, China, Chengdu', // carry-over
  f018802: 'xnr, China, Dongguan', // carry-over
  f018812: 'xnr, South Africa, Cape Town', // carry-over
  f018836: 'xnr, NR', // carry-over
  f018837: 'xnr, China, Shaanxi', // carry-over
  f018844: 'xnr, NR', // carry-over
  f018864: 'xnr, Korea, Busan', // carry-over
  f018865: 'xnr, China, Chengdu', // carry-over
  f018869: 'xnr, NR', // carry-over
  f018879: 'xnr, Korea, Geumcheon-gu', // carry-over
  f018899: 'xnr, China, Shanghai', // carry-over
  f019017: 'xnr, China, Wenzhou-cfa', // carry-over
  f019024: 'xnr, China, Sichuan', // carry-over
  f019031: 'xnr, NR', // carry-over
  f019042: 'xnr, China, Shanghai', // carry-over
  f019048: 'xnr, Brazil, Sao Paulo', // carry-over
  f019062: 'xnr, Germany', // carry-over
  f019069: 'xnr, NR', // carry-over
  f019109: 'xnr, USA, Howell', // carry-over
  f019114: 'xnr, USA, Howell', // carry-over
  f019118: 'xnr, China, Jiaxing', // carry-over
  f019123: 'xnr, China, Dongguan', // carry-over
  f019160: 'xnr, USA, Fremont', // carry-over
  f019173: 'xnr, China, Nanchong', // carry-over
  f019184: 'xnr, China, Yibin', // carry-over
  f019218: 'xnr, China, Dali', // carry-over
  f019239: 'xnr, China, Jiaxing', // carry-over
  f019264: 'xnr, NR', // carry-over
  f019284: 'xnr, China, Foshan', // carry-over
  f019376: 'xnr, NR', // carry-over
  f019378: 'xnr, China, Changzhou', // carry-over
  f019401: 'xnr, Brazil, Sao Paulo', // carry-over
  f019423: 'xnr, South Africa, Johannesburg', // carry-over
  f019434: 'xnr, NR', // carry-over
  f019437: 'xnr, Korea, Guro-gu', // carry-over
  f019525: 'xnr, USA, Berkeley', // carry-over
  f019528: 'xnr, Peru', // carry-over
  f019547: 'xnr, Peru', // carry-over
  f019645: 'xnr, Russia, St. Petersburg', // carry-over
  f019723: 'xnr, China, Zhongshan', // carry-over
  f019734: 'xnr, NR', // carry-over
  f019757: 'xnr, NR', // carry-over
  f019804: 'xnr, China, Chengdu', // carry-over
  f019809: 'xnr, NR', // carry-over
  f019812: 'xnr, NR', // carry-over
  f019825: 'xnr, China, Hong Kong', // carry-over
  f020241: 'xnr, NR', // carry-over
  f020260: 'xnr, NR', // carry-over
  f020276: 'xnr, China, Xiamen', // carry-over
  f020281: 'xnr, Korea, Uijeongbu-si', // carry-over
  f020352: 'xnr, NR', // carry-over
  f020361: 'xnr, Colombia, Medellin', // carry-over
  f020366: 'xnr, China, Chengdu', // carry-over
  f020369: 'xnr, NR', // carry-over
  f020379: 'xnr, NR', // carry-over
  f020386: 'xnr, Russia', // carry-over
  f020390: 'xnr, NR', // carry-over
  f020398: 'xnr, China, Zhangjiakou', // carry-over
  f020408: 'xnr, China, Hong Kong', // carry-over
  f020432: 'xnr, Korea, Wanju', // carry-over
  f020433: 'xnr, NR', // carry-over
  f020439: 'xnr, China, Chengdu', // carry-over
  f020450: 'xnr, NR', // carry-over
  f020451: 'xnr, NR', // carry-over
  f020453: 'xnr, China, Chengdu', // carry-over
  f020457: 'xnr, NR', // carry-over
  f020525: 'xnr, China, Dongguan', // carry-over
  f020559: 'xnr, China, Liaoning', // carry-over
  f020563: 'xnr, China, Dongguan', // carry-over
  f020578: 'xnr, Korea, Wanju', // carry-over
  f020641: 'xnr, NR', // carry-over
  f020678: 'xnr, China, Wenzhou', // carry-over
  f020682: 'xnr, NR', // carry-over
  f020683: 'xnr, China, Changsha', // carry-over
  f020691: 'xnr, NR', // carry-over
  f020739: 'xnr, China, Dongguan', // carry-over
  f020763: 'xnr, China, Luzhou', // carry-over
  f020775: 'xnr, Japan, Osaka', // carry-over
  f020786: 'xnr, China, Shenzhen', // carry-over
  f020788: 'xnr, China, Chengdu', // carry-over
  f020789: 'xnr, NR', // carry-over
  f020791: 'xnr, China, Hangzhou', // carry-over
  f020819: 'xnr, China, Chengdu', // carry-over
  f020822: 'xnr, China, Shanghai', // carry-over
  f020896: 'xnr, NR', // carry-over
  f020899: 'xnr, China, Chengdu', // carry-over
  f020914: 'xnr, NR', // carry-over
  f020934: 'xnr, NR', // carry-over
  f020939: 'xnr, NR', // carry-over
  f020957: 'xnr, NR', // carry-over
  f020961: 'xnr, China, Shanghai', // carry-over
  f020975: 'xnr, China, Shandong', // carry-over
  f020993: 'xnr, China, Hong Kong', // carry-over
  f021069: 'xnr, USA', // carry-over
  f021083: 'xnr, NR', // carry-over
  f021092: 'xnr, NR', // carry-over
  f021095: 'xnr, NR', // carry-over
  f021265: 'xnr, China, Wuhan', // carry-over
  f021274: 'xnr, China, Shanghai', // carry-over
  f021286: 'xnr, China, Shaanxi', // carry-over
  f021307: 'xnr, China, Chengdu', // carry-over
  f021311: 'xnr, NR', // carry-over
  f021337: 'xnr, China, Beijing', // carry-over
  f021339: 'xnr, China, Jiaxing', // carry-over
  f021346: 'xnr, China, Shanghai', // carry-over
  f021357: 'xnr, China, Shanghai', // carry-over
  f021418: 'xnr, NR', // carry-over
  f021494: 'xnr, NR', // carry-over
  f021500: 'xnr, NR', // carry-over
  f021505: 'xnr, NR', // carry-over
  f021509: 'xnr, China, Fuzhou', // carry-over
  f021527: 'xnr, NR', // carry-over
  f021535: 'xnr, China, Chengdu', // carry-over
  f021555: 'xnr, NR', // carry-over
  f021574: 'xnr, NR', // carry-over
  f021580: 'xnr, NR', // carry-over
  f021583: 'xnr, China, Jiaxing', // carry-over
  f021684: 'xnr, NR', // carry-over
  f021695: 'xnr, USA', // carry-over
  f021699: 'xnr, NR', // carry-over
  f021704: 'xnr, NR', // carry-over
  f021710: 'xnr, China, Shijiazhuang', // carry-over
  f021725: 'xnr, NR', // carry-over
  f021976: 'xnr, NR', // carry-over
  f022015: 'xnr, China, Hangzhou', // carry-over
  f022016: 'xnr, NR', // carry-over
  f022030: 'xnr, NR', // carry-over
  f022033: 'xnr, NR', // carry-over
  f022038: 'xnr, NR', // carry-over
  f022070: 'xnr, China, Jieyang', // carry-over
  f022084: 'xnr, China, Shaanxi', // carry-over
  f022089: 'xnr, China, Beijing', // carry-over
  f022091: 'xnr, NR', // carry-over
  f022093: 'xnr, NR', // carry-over
  f022108: 'xnr, China, Luzhou', // carry-over
  f022119: 'xnr, USA, Lovettsville', // carry-over
  f022122: 'xnr, NR', // carry-over
  f022132: 'xnr, China, Dongguan', // carry-over
  f022171: 'xnr, China, Shanghai', // carry-over
  f022202: 'xnr, USA, Howell', // carry-over
  f022250: 'xnr, NR', // carry-over
  f022262: 'xnr, China, Hong Kong', // carry-over
  f022276: 'xnr, Korea, Seoul', // carry-over
  f022284: 'xnr, China, Shaanxi', // carry-over
  f022287: 'xnr, China, Dongguan', // carry-over
  f022303: 'xnr, NR', // carry-over
  f022313: 'xnr, NR', // carry-over
  f022321: 'xnr, China, Hong Kong', // carry-over
  f022326: 'xnr, China, Zhongshan', // carry-over
  f022333: 'xnr, China, Dongguan', // carry-over
  f022336: 'xnr, NR', // carry-over
  f022337: 'xnr, NR', // carry-over
  f022338: 'xnr, NR', // carry-over
  f022343: 'xnr, China, Dongguan', // carry-over
  f022361: 'xnr, NR', // carry-over
  f022372: 'xnr, China, Chengdu', // carry-over
  f022373: 'xnr, Singapore', // carry-over
  f022374: 'xnr, NR', // carry-over
  f022376: 'xnr, China, Dongguan', // carry-over
  f022494: 'xnr, China, Dongguan', // carry-over
  f022501: 'xnr, Japan, Osaka', // carry-over
  f022503: 'xnr, NR', // carry-over
  f022505: 'xnr, China, Shanghai', // carry-over
  f022517: 'xnr, China, Taiwan, Taipei', // carry-over
  f022562: 'xnr, NR', // carry-over
  f022564: 'xnr, NR', // carry-over
  f022683: 'xnr, NR', // carry-over
  f022755: 'xnr, China, Shenzhen', // carry-over
  f022776: 'xnr, Korea, Guri-si', // carry-over
  f022786: 'xnr, NR', // carry-over
  f022790: 'xnr, China, Luzhou', // carry-over
  f022791: 'xnr, NR', // carry-over
  f022797: 'xnr, NR', // carry-over
  f022834: 'xnr, NR', // carry-over
  f022836: 'xnr, China, Chongqing', // carry-over
  f022838: 'xnr, China, Hong Kong', // carry-over
  f022841: 'xnr, China, Zhongshan', // carry-over
  f022857: 'xnr, NR', // carry-over
  f022880: 'xnr, NR', // carry-over
  f022906: 'xnr, NR', // carry-over
  f022911: 'xnr, China, Hong Kong', // carry-over
  f022912: 'xnr, NR', // carry-over
  f022922: 'xnr, China, Shenzhen, CAAP-MEG', // carry-over
  f022926: 'xnr, NR', // carry-over
  f022930: 'xnr, NR', // carry-over
  f022954: 'xnr, NR', // carry-over
  f022967: 'xnr, Korea, Seoul', // carry-over
  f022969: 'xnr, China, Chengdu', // carry-over
  f022970: 'xnr, NR', // carry-over
  f022996: 'xnr, NR', // carry-over
  f023021: 'xnr, Korea, Yeongdeungpo-dong', // carry-over
  f023108: 'xnr, China, Dongguan', // carry-over
  f023159: 'xnr, NR', // carry-over
  f023207: 'xnr, NR', // carry-over
  f023210: 'xnr, China, Dongguan', // carry-over
  f023254: 'xnr, NR', // carry-over
  f023463: 'xnr, NR', // carry-over
  f023482: 'xnr, NR', // carry-over
  f023499: 'xnr, NR', // carry-over
  f023501: 'xnr, China, Mianyang', // carry-over
  f023505: 'xnr, NR', // carry-over
  f023526: 'xnr, China, Chongqing', // carry-over
  f023535: 'xnr, China, Hong Kong', // carry-over
  f023560: 'xnr, NR', // carry-over
  f023568: 'xnr, NR', // carry-over
  f023571: 'xnr, NR', // carry-over
  f023626: 'xnr, NR', // carry-over
  f023627: 'xnr, China, Zhongwei', // carry-over
  f023643: 'xnr, NR', // carry-over
  f023647: 'xnr, Korea, Gangseo-gu', // carry-over
  f023649: 'xnr, Korea, Seoul, LS&NIHON', // carry-over
  f023651: 'xnr, NR', // carry-over
  f023661: 'xnr, China, Zhejiang', // carry-over
  f023678: 'xnr, China, Jiaxing', // carry-over
  f023798: 'xnr, China, Shanghai', // carry-over
  f023801: 'xnr, China, Dongguan', // carry-over
  f023826: 'xnr, USA, Germantown', // carry-over
  f023881: 'xnr, China, Fuzhou', // carry-over
  f023939: 'xnr, NR', // carry-over
  f023943: 'xnr, USA, Ashburn', // carry-over
  f023965: 'xnr, NR', // carry-over
  f023986: 'xnr, Korea, Seoul', // carry-over
  f024031: 'xnr, NR', // carry-over
  f024074: 'xnr, NR', // carry-over
  f024129: 'xnr, China, Zhejiang', // carry-over
  f024153: 'xnr, NR', // carry-over
  f024165: 'xnr, NR', // carry-over
  f024168: 'xnr, USA, Ashburn', // carry-over
  f024483: 'xnr, NR', // carry-over
  f024496: 'xnr, China, Dongguan', // carry-over
  f024526: 'xnr, Korea', // carry-over
  f024556: 'xnr, NR', // carry-over
  f024557: 'xnr, NR', // carry-over
  f024558: 'xnr, NR', // carry-over
  f024559: 'xnr, NR', // carry-over
  f024563: 'xnr, NR', // carry-over
  f024611: 'xnr, China, Dongguan', // carry-over
  f024802: 'xnr, NR', // carry-over
  f024894: 'xnr, NR', // carry-over
  f024895: 'xnr, undefined', // carry-over
  f024902: 'xnr, Korea, Incheon', // carry-over
  f024903: 'xnr, undefined', // carry-over
  f024969: 'xnr, NR', // carry-over
  f024972: 'xnr, undefined', // carry-over
  f025005: 'xnr, NR', // carry-over
  f025028: 'xnr, NR', // carry-over
  f025032: 'xnr, China, Beijing', // carry-over
  f025044: 'xnr, undefined', // carry-over
  f029368: 'xnr, Korea, Gangseo-gu', // carry-over
  f029421: 'xnr, undefined', // carry-over
  f029477: 'xnr, undefined', // carry-over
  f029529: 'xnr, China, Dongguan', // carry-over
  f029546: 'xnr, NR', // carry-over
  f029566: 'xnr, NR', // carry-over
  f029595: 'xnr, undefined', // carry-over
  f029619: 'xnr, undefined', // carry-over
  f029632: 'xnr, undefined', // carry-over
  f029649: 'xnr, China, Beijing', // carry-over
  f030230: 'xnr, China, Sichuan', // carry-over
  f030231: 'xnr, China, Hunan', // carry-over
  f030249: 'xnr, NR', // carry-over
  f030272: 'xnr, undefined', // carry-over
  f030386: 'xnr, NR', // carry-over
  f030509: 'xnr, undefined', // carry-over
  f030510: 'xnr, undefined', // carry-over
  f030511: 'xnr, undefined', // carry-over
  f030514: 'xnr, NR', // carry-over
  f030518: 'xnr, China, Wuhan', // carry-over
  f030521: 'xnr, China, Hong Kong', // carry-over
  f030531: 'xnr, NR', // carry-over
  f030608: 'xnr, China, Mianyang', // carry-over
  f030641: 'xnr, China, Shaanxi', // carry-over
  f030649: 'xnr, NR', // carry-over
  f032833: 'xnr, NR', // carry-over
  f032850: 'xnr, NR', // carry-over
  f032865: 'xnr, USA, Redmond', // carry-over
  f032887: 'xnr, undefined', // carry-over
  f032904: 'xnr, undefined', // carry-over
  f032922: 'xnr, undefined', // carry-over
  f033014: 'xnr, NR', // carry-over
  f033028: 'xnr, China, Mianyang', // carry-over
  f033111: 'xnr, China, Shanghai', // carry-over
  f033124: 'xnr, China, Shanghai', // carry-over
  f033125: 'xnr, NR', // carry-over
  f033130: 'xnr, NR', // carry-over
  f033209: 'xnr, NR', // carry-over
  f033224: 'xnr, NR', // carry-over
  f033384: 'xnr, NR', // carry-over
  f033399: 'xnr, NR', // carry-over
  f033456: 'xnr, NR', // carry-over
  f033463: 'xnr, NR', // carry-over
  f033475: 'xnr, NR', // carry-over
  f033517: 'xnr, China, Changsha', // carry-over
  f033545: 'xnr, China, Shenzhen + USA', // carry-over
  f034084: 'xnr, China, Chongqing', // carry-over
  f034229: 'xnr, USA, Minneapolis', // carry-over
  f034311: 'xnr, Korea, Gangnam-gu', // carry-over
  f034362: 'xnr, China, Sichuan', // carry-over
  f034566: 'xnr, NR', // carry-over
  f034581: 'xnr, NR', // carry-over
  f034652: 'xnr, Korea, Yeongdeungpo-dong', // carry-over
  f034666: 'xnr, NR', // carry-over
  f034707: 'xnr, NR', // carry-over
  f034710: 'xnr, NR', // carry-over
  f035160: 'xnr, NR', // carry-over
  f035161: 'xnr, NR', // carry-over
  f035364: 'xnr, NR', // carry-over
  f039992: 'xnr, NR', // carry-over
  f040137: 'xnr, NR', // carry-over
  f040432: 'xnr, NR', // carry-over
  f040468: 'xnr, NR', // carry-over
  f040665: 'xnr, NR', // carry-over
  f040971: 'xnr, NR', // carry-over
  f042344: 'xnr, Korea', // carry-over
  f042584: 'xnr, Australia, Basin View', // carry-over
  f042839: 'xnr, Korea, Pocheon-si', // carry-over
  f043376: 'xnr, Korea, Incheon', // carry-over
  f044143: 'xnr, China, Taiwan, Taipei', // carry-over
  f044315: 'xnr, NR', // carry-over
  f044788: 'xnr, NR', // carry-over
  f045743: 'xnr, NR', // carry-over
  f046078: 'xnr, China, Shaanxi', // carry-over
  f046315: 'xnr, NR', // carry-over
  f046317: 'xnr, China, Nanyang', // carry-over
  f047327: 'xnr, China, Hong Kong', // carry-over
  f047536: 'xnr, NR', // carry-over
  f047858: 'xnr, China, Wuhan', // carry-over
  f048545: 'xnr, China, Chengdu', // carry-over
  f048975: 'xnr, NR', // carry-over
  f048986: 'xnr, NR', // carry-over
  f049990: 'xnr, Korea, Incheon', // carry-over
  f052503: 'xnr, NR', // carry-over
  f052562: 'xnr, NR', // carry-over
  f052740: 'xnr, China, Shaanxi', // carry-over
  f053446: 'xnr, NR', // carry-over
  f054120: 'xnr, NR', // carry-over
  f054267: 'xnr, NR', // carry-over
  f054389: 'xnr, China, Chongqing', // carry-over
  f054412: 'xnr, NR', // carry-over
  f054414: 'xnr, NR', // carry-over
  f054417: 'xnr, NR', // carry-over
  f054418: 'xnr, NR', // carry-over
  f054422: 'xnr, NR', // carry-over
  f054464: 'xnr, NR', // carry-over
  f054526: 'xnr, NR', // carry-over
  f055040: 'xnr, China, Fujian', // carry-over
  f055446: 'xnr, NR', // carry-over
  f056227: 'xnr, NR', // carry-over
  f056393: 'xnr, NR', // carry-over
  f057115: 'xnr, China, Nanyang', // carry-over
  f057560: 'xnr, NR', // carry-over
  f057618: 'xnr, NR', // carry-over
  f057683: 'xnr, NR', // carry-over
  f058003: 'xnr, China, Shenzhen', // carry-over
  f058321: 'xnr, China, Dongguan', // carry-over
  f058349: 'xnr, NR', // carry-over
  f059280: 'xnr, China, Shenzhen', // carry-over
  f059652: 'xnr, China, Beijing', // carry-over
  f059705: 'xnr, Korea, Naju', // carry-over
  f059813: 'xnr, NR', // carry-over
  f060693: 'xnr, NR', // carry-over
  f060754: 'xnr, NR', // carry-over
  f060780: 'xnr, Korea, Goyang-si', // carry-over
  f060805: 'xnr, NR', // carry-over
  f061059: 'xnr, China, Beijing', // carry-over
  f061170: 'xnr, NR', // carry-over
  f061174: 'xnr, NR', // carry-over
  f061196: 'xnr, Korea, Yeongdeungpo-dong', // carry-over
  f061407: 'xnr, China, Shenzhen', // carry-over
  f061430: 'xnr, Korea, Naju', // carry-over
  f061503: 'xnr, NR', // carry-over
  f062245: 'xnr, NR', // carry-over
  f062445: 'xnr, China, Shenzhen', // carry-over
  f062449: 'xnr, NR', // carry-over
  f062473: 'xnr, NR', // carry-over
  f062475: 'xnr, NR', // carry-over
  f062552: 'xnr, NR', // carry-over
  f062587: 'xnr, NR', // carry-over
  f062619: 'xnr, NR', // carry-over
  f062735: 'xnr, China, Hong Kong', // carry-over
  f063628: 'xnr, NR', // carry-over
  f063780: 'xnr, China, Shenyang', // carry-over
  f063921: 'xnr, China, Ili', // carry-over
  f063996: 'xnr, China, Sichuan', // carry-over
  f064688: 'xnr, NR', // carry-over
  f064855: 'xnr, NR', // carry-over
  f064908: 'xnr, NR', // carry-over
  f065113: 'xnr, NR', // carry-over
  f065132: 'xnr, Denmark, Vipperod', // carry-over
  f065174: 'xnr, NR', // carry-over
  f065225: 'xnr, China, Dongguan', // carry-over
  f065250: 'xnr, NR', // carry-over
  f065266: 'xnr, China, Hefei', // carry-over
  f065280: 'xnr, Korea, Songpa-gu, Data Store Ltd', // carry-over
  f065391: 'xnr, NR', // carry-over
  f065426: 'xnr, Korea, Gimpo-si', // carry-over
  f065477: 'xnr, NR', // carry-over
  f065578: 'xnr, NR', // carry-over
  f065610: 'xnr, NR', // carry-over
  f065686: 'xnr, NR', // carry-over
  f065689: 'xnr, NR', // carry-over
  f065718: 'xnr, China, Taiwan, Hsinchu', // carry-over
  f065853: 'xnr, Korea, Seongnam-si', // carry-over
  f065941: 'xnr, NR', // carry-over
  f066075: 'xnr, NR', // carry-over
  f066210: 'xnr, NR', // carry-over
  f066289: 'xnr, NR', // carry-over
  f066302: 'xnr, NR', // carry-over
  f066465: 'xnr, NR', // carry-over
  f066476: 'xnr, NR', // carry-over
  f066734: 'xnr, NR', // carry-over
  f066845: 'xnr, China, Dongguan', // carry-over
  f067185: 'xnr, Korea, Gwangju', // carry-over
  f067283: 'xnr, Korea, Seongnam-si', // carry-over
  f067375: 'xnr, NR', // carry-over
  f067598: 'xnr, NR', // carry-over
  f068253: 'xnr, NR', // carry-over
  f068556: 'xnr, NR', // carry-over
  f068809: 'xnr, NR', // carry-over
  f068898: 'xnr, China, Fuzhou', // carry-over
  f069448: 'xnr, NR', // carry-over
  f069450: 'xnr, NR', // carry-over
  f069661: 'xnr, China, Wuxi', // carry-over
  f070045: 'xnr, NR', // carry-over
  f070288: 'xnr, China, Zhangzhou', // carry-over
  f070337: 'xnr, China, Zhangzhou', // carry-over
  f070475: 'xnr, China, Guyuan', // carry-over
  f070730: 'xnr, NR', // carry-over
  f070747: 'xnr, China, Shenzhen', // carry-over
  f070756: 'xnr, China, Beijing', // carry-over
  f070802: 'xnr, NR', // carry-over
  f070824: 'xnr, Taiwan, Hsinchu', // carry-over
  f070932: 'xnr, NR', // carry-over
  f071114: 'xnr, China, Shenyang', // carry-over
  f071692: "xnr, China, Xi'an", // carry-over
  f073525: 'xnr, NR', // carry-over
  f073783: 'xnr, NR', // carry-over
  f073844: 'xnr, NR', // carry-over
  f073878: 'xnr, NR', // carry-over
  f073888: 'xnr, NR', // carry-over
  f073904: 'xnr, NR', // carry-over
  f073931: 'xnr, NR', // carry-over
  f077761: 'xnr, NR', // carry-over
  f078516: 'xnr, NR', // carry-over
  f079092: 'xnr, NR', // carry-over
  f079425: 'xnr, NR', // carry-over
  f079719: 'xnr, NR', // carry-over
  f080131: 'xnr, NR', // carry-over
  f080868: 'xnr, NR', // carry-over
  f080945: 'xnr, China, Shenzhen', // carry-over
  f081969: 'xnr, NR', // carry-over
  f082054: 'xnr, China, Hefei', // carry-over
  f082175: 'xnr, China, Shenyang', // carry-over
  f082543: 'xnr, Korea, Osan', // carry-over
  f082590: 'xnr, China, Taizhou', // carry-over
  f082635: 'xnr, NR', // carry-over
  f082698: "xnr, USA, Xi'an", // carry-over
  f083419: 'xnr, NR', // carry-over
  f083474: 'xnr, NR', // carry-over
  f083542: 'xnr, NR', // carry-over
  f083983: 'xnr, NR', // carry-over
  f084135: 'xnr, NR', // carry-over
  f084155: 'xnr, NR', // carry-over
  f084419: 'xnr, NR', // carry-over
  f084907: 'xnr, NR', // carry-over
  f085226: 'xnr, Korea, Busan', // carry-over
  f085415: 'xnr, NR', // carry-over
  f085435: 'xnr, NR', // carry-over
  f085437: 'xnr, NR', // carry-over
  f085682: 'xnr, NR', // carry-over
  f085947: 'xnr, NR', // carry-over
  f086028: 'xnr, NR', // carry-over
  f086204: 'xnr, NR', // carry-over
  f086222: 'xnr, NR', // carry-over
  f086240: 'xnr, NR', // carry-over
  f086366: 'xnr, NR', // carry-over
  f086381: 'xnr, NR', // carry-over
  f086439: 'xnr, NR', // carry-over
  f086442: 'xnr, NR', // carry-over
  f086450: 'xnr, NR', // carry-over
  f086572: 'xnr, NR', // carry-over
  f086988: 'xnr, NR', // carry-over
  f087096: 'xnr, NR', // carry-over
  f087868: 'xnr, NR', // carry-over
  f088002: 'xnr, NR', // carry-over
  f088290: 'xnr, NR', // carry-over
  f089819: 'xnr, NR', // carry-over
  f089920: 'xnr, NR', // carry-over
  f090104: 'xnr, China, Dongguan', // carry-over
  f090481: 'xnr, NR', // carry-over
  f090484: 'xnr, NR', // carry-over
  f090492: 'xnr, NR', // carry-over
  f090851: 'xnr, China, Ningxia', // carry-over
  f091095: 'xnr, Korea, Gwangju + Buk-gu', // carry-over
  f091143: 'xnr, NR', // carry-over
  f091243: 'xnr, NR', // carry-over
  f091395: 'xnr, NR', // carry-over
  f092157: 'xnr, NR', // carry-over
  f092228: 'xnr, NR', // carry-over
  f092724: 'xnr, China, Beijing', // carry-over
  f092887: 'xnr, NR', // carry-over
  f092971: 'xnr, China, Chongqing', // carry-over
  f093212: 'xnr, Netherlands', // carry-over
  f093554: 'xnr, China, Zhangzhou', // carry-over
  f093701: 'xnr, NR', // carry-over
  f093907: 'xnr, NR', // carry-over
  f094003: 'xnr, NR', // carry-over
  f094625: 'xnr, NR', // carry-over
  f094675: 'xnr, NR', // carry-over
  f094785: 'xnr, China, Shanghai', // carry-over
  f094825: 'xnr, Korea, Gwangju', // carry-over
  f094847: 'xnr, NR', // carry-over
  f094869: 'xnr, China, Shanghai', // carry-over
  f094894: 'xnr, Korea, Gwangju', // carry-over
  f095398: 'xnr, Korea, Sejong', // carry-over
  f095528: 'xnr, China, Hangzhou', // carry-over
  f095833: 'xnr, Korea, Yongin-si', // carry-over
  f0136014: 'xnr, China, Suzhou',
  f0142135: "xnr, China, Ya'an + USA",
  f0158265: 'xnr, China, Hefei',

  // Delisted

  f01000: 'delist, NR - bootstrap', // carry-over
  f01001: 'delist, NR - bootstrap', // carry-over
  f01002: 'delist, NR - bootstrap', // carry-over
  f01013: 'delist, NR', // carry-over
  f01101: 'delist, China, Shanghai', // carry-over
  f01102: 'delist, China, Shandong', // carry-over
  f01156: 'delist, China, Hangzhou', // carry-over
  f01232: 'delist, China, Hangzhou', // carry-over
  f02304: 'delist, USA, Mountain View', // carry-over
  f02382: 'delist, China, Zhongshan-cfa', // carry-over
  f02385: 'delist, USA, East Islip', // carry-over
  f02398: 'delist, China, Hong Kong', // carry-over
  f02404: 'delist, Korea, Seoul', // carry-over
  f02424: 'delist, Korea, Wanju', // carry-over
  f02436: 'delist, Netherlands', // carry-over
  f02506: 'delist, USA, Clarksville', // carry-over
  f02515: 'delist, China, Hangzhou', // carry-over
  f02518: 'delist, China, Shaanxi', // carry-over
  f02575: 'delist, USA, Davis', // carry-over
  f02608: 'delist, USA, San Jose', // carry-over
  f02666: 'delist, China, Chengdu', // carry-over
  f02768: 'delist, China, Hong Kong', // carry-over
  f02774: 'delist, Australia, Sydney', // carry-over
  f02824: 'delist, China, Chengdu', // carry-over
  f03264: 'delist, Korea, Bucheon-si', // carry-over
  f03319: 'delist, NR', // carry-over
  f03341: 'delist, NR', // carry-over
  f03346: 'delist, China, Huzhou, wckj', // carry-over
  f03361: 'delist, China, Guangzhou', // carry-over
  f03428: 'delist, China, Beijing + Jiaxing + Germany, Frankfurt', // carry-over
  f03487: 'delist, China, Yibin', // carry-over
  f03544: 'delist, China, Guiyang', // carry-over
  f03619: 'delist, China, Xiamen', // carry-over
  f03622: 'delist, 黑犇科技', // carry-over
  f03765: 'delist, Colombia, Medellin', // carry-over
  f04444: 'delist, NR', // carry-over
  f06262: 'delist, China, Guangzhou', // carry-over
  f07717: 'delist, China, Shenyang', // carry-over
  f07731: 'delist, NR', // carry-over
  f07772: 'delist, China, Dongguan', // carry-over
  f07796: 'delist, China, Hunan', // carry-over
  f07827: 'delist, China, Wuhan, 天际合', // carry-over
  f07843: 'delist, NR', // carry-over
  f07866: 'delist, China, Foshan', // carry-over
  f07924: 'delist, USA', // carry-over
  f07931: 'delist, NR', // carry-over
  f07959: 'delist, NR', // carry-over
  f07964: 'delist, USA, Ashburn', // carry-over
  f07987: 'delist, China, Beijing', // carry-over
  f08022: 'delist, China, Yibin', // carry-over
  f08053: 'delist, NR', // carry-over
  f08061: 'delist, China, Foshan', // carry-over
  f08095: 'delist, Canada, Surrey', // carry-over
  f08097: 'delist, Korea, Pyeongtaek-si', // carry-over
  f08136: "delist, China, Xi'an", // carry-over
  f08171: 'delist, NR', // carry-over
  f08183: 'delist, USA, Irvine', // carry-over
  f08207: 'delist, Australia, Brisbane', // carry-over
  f08223: 'delist, NR', // carry-over
  f08225: 'delist, Australia, Sydney', // carry-over
  f08238: 'delist, NR', // carry-over
  f08246: 'delist, USA', // carry-over
  f08280: 'delist, NR', // carry-over
  f08284: 'delist, China, Liaoning', // carry-over
  f08290: 'delist, NR', // carry-over
  f08311: 'delist, China, Shenzhen', // carry-over
  f08315: 'delist, China, Chongqing', // carry-over
  f08319: 'delist, NR', // carry-over
  f08322: 'delist, China, Chongqing', // carry-over
  f08327: 'delist, NR', // carry-over
  f08349: 'delist, China, Guangzhou, hkicloud', // carry-over
  f08361: 'delist, Malaysia, Kulai', // carry-over
  f08385: 'delist, NR', // carry-over
  f08388: 'delist, China, Taizhou', // carry-over
  f08390: 'delist, China, Shenzhen', // carry-over
  f08393: 'delist, NR', // carry-over
  f08402: 'delist, China, Sichuan', // carry-over
  f08406: 'delist, China, Shenzhen', // carry-over
  f08424: 'delist, China, Chengdu', // carry-over
  f08425: 'delist, NR', // carry-over
  f08429: 'delist, yfeing', // carry-over
  f08432: 'delist, China, Taizhou', // carry-over
  f08440: 'delist, France, Fontenay-sous-Bois', // carry-over
  f08460: 'delist, NR', // carry-over
  f08482: 'delist, USA, Athol, @why', // carry-over
  f08503: 'delist, NR', // carry-over
  f08574: 'delist, USA', // carry-over
  f08787: 'delist, China, Yibin', // carry-over
  f08789: 'delist, China, Fuzhou', // carry-over
  f08791: 'delist, NR', // carry-over
  f08893: 'delist, NR', // carry-over
  f08902: 'delist, NR', // carry-over
  f08911: 'delist, Korea, Wanju', // carry-over
  f08964: 'delist, NR', // carry-over
  f08980: 'delist, USA, San Jose', // carry-over
  f08988: 'delist, Korea, Hwaseong-si', // carry-over
  f08994: 'delist, NR', // carry-over
  f09006: 'delist, NR', // carry-over
  f09007: 'delist, Korea, Hwaseong-si', // carry-over
  f09035: 'delist, NR', // carry-over
  f09053: 'delist, China, Shenzhen', // carry-over
  f09055: 'delist, China, Jieyang', // carry-over
  f09076: 'delist, NR', // carry-over
  f09084: 'delist, NR', // carry-over
  f09529: 'delist, NR', // carry-over
  f09538: 'delist, NR', // carry-over
  f09569: 'delist, China, Beijing', // carry-over
  f09578: 'delist, NR', // carry-over
  f09594: 'delist, NR', // carry-over
  f09610: 'delist, China, Beijing', // carry-over
  f09629: 'delist, NR', // carry-over
  f09662: 'delist, Canada, Surrey', // carry-over
  f09707: 'delist, China, Guangdong', // carry-over
  f09712: 'delist, China, Chengdu', // carry-over
  f09719: 'delist, Korea, Geumcheon-gu', // carry-over
  f09731: 'delist, China, Guiyang', // carry-over
  f09733: 'delist, China, Chongqing', // carry-over
  f09736: 'delist, China, Guangdong', // carry-over
  f09753: 'delist, Korea, Pyeongtaek-si', // carry-over
  f09762: 'delist, China, Guangdong', // carry-over
  f09805: 'delist, China, Fuzhou', // carry-over
  f09833: 'delist, USA, San Jose', // carry-over
  f09840: 'delist, China, Baoding', // carry-over
  f09912: 'delist, USA, Concord', // carry-over
  f09966: 'delist, NR', // carry-over
  f09974: 'delist, Canada, Calgary', // carry-over
  f09997: 'delist, USA', // carry-over
  f010005: 'delist, China, Zhongshan', // carry-over
  f010009: 'delist, USA, East Islip', // carry-over
  f010028: 'delist, USA, Berkeley', // carry-over
  f010033: 'delist, NR', // carry-over
  f010040: 'delist, China, Shenzhen', // carry-over
  f010041: 'delist, USA, Jackson', // carry-over
  f010078: 'delist, China, Zhangjiakou + Hong Kong', // carry-over
  f010173: 'delist, Korea, Pyeongtaek-si', // carry-over
  f010200: 'delist, NR', // carry-over
  f065259: 'delist, NR' // carry-over
}

export default annotations
