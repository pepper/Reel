var mongo = require("../utilities/database");

exports.createNews = function(req, res){
	mongo.database.collection("news", function(err, collection){
		collection.insert([{
			Key: "20130601",
			Date: "6月1日 2013",
			HeadNews: true,
			Title: "芮欧百货六月开启全家欢乐之旅",
			ShortDescription: "缤纷夏日，芮欧百货邀您全家总动员，开启欢乐之旅！6月1日起，芮欧百货开启一系列温馨活动，点亮今夏。在儿童节欢乐气氛的萦绕中，爸爸妈妈除了陪伴小孩尽情嬉戏，也可找回久违的童年回忆，享受与孩子们的幸福时光。",
			Description: "2013年6月1日至16日，在儿童节欢乐气氛的萦绕中，芮欧百货为孩子们精心打造的巨型“芮欧涂鸦墙”在百货4楼亮相。清新可爱的画面背景，小朋友们在留白处随心涂鸦，并留下署名，共同创作巨型绘画作品，作品完成后将继续展览至6月30日。同时，芮欧百货4楼还为小朋友们准备了好吃的糖果和有趣的游乐设施。爸爸妈妈除了陪伴小孩尽情嬉戏，也可找回久违的童年回忆，与孩子们一起欢度儿童节假期。\n6月1日至30日，芮欧百货盛大启动“双重惊喜欢乐购”活动，顾客除享受购物优惠，更可凭任意消费，有机会赢得东京迪士尼乐园及香港迪士尼乐园“家庭随心游”。6月17日至30日，芮欧百货“夏日狂欢”积分换礼活动全年首轮启动回馈消费者，凭芮欧百货消费记录卡累计金额即可兑换不等值精致礼品，与家人一同分享喜悦。\n6月23日，由法国领事馆和上海市文化局联合举办的夏日音乐节，将在芮欧百货1楼RAT TAR ART BAR举办盛大音乐派对，在盛夏到来之前将城市的激情点燃。当日下午16时至晚上23时，来自全城的音乐爱好者将在芮欧百货RAT TAR ART BAR汇聚，感受世界知名乐队Monkey Philosophy、Crazy 88及众多音乐家的精彩表演。演出当日，音乐家们将在16时至17时特别举办一场儿童音乐会，邀请芮欧百货的小朋友客人和爸爸妈妈一起享受家庭欢聚的美好时光。\n6月30日，第三届“星光宝贝“初赛将在芮欧百货4楼闪亮开幕。届时，众多星光小宝贝们将身着芮欧百货内驻法国高级童装品牌Sergent Major，秀出独特才艺和气质，将六月专属的儿童假期和家庭欢聚的热闹气氛完美演绎。\n缤纷夏日，芮欧百货邀您全家总动员，来芮欧百货，开启欢乐之旅吧！",
			ImageQuantity: 2,
			Language: "Ch"
		},{
			Key: "20130504",
			Date: "5月4日 2013",
			Title: "芮欧百货 Réel Sexy Party",
			ShortDescription: "位于上海中心商务区亦是最繁华路段南京西路的芮欧百货当天傍晚举行了“女性专场Réel Sexy派对”。",
			Description: "2013年5月4日，位于上海中心商务区亦是最繁华路段南京西路的芮欧百货当天傍晚举行了“女性专场Réel Sexy派对”。\nRéel Sexy 乐为女人·我有我姿态！ Réel Sexy派对在与芮欧旗下的众多内衣系列品牌互动的同时，为女性朋友营造了更完美精致的购物体验。活动吸引了众多时尚媒体、潮流先锋及艺术爱好人士等高端群体的参加。现场精彩的特邀DJ表演、诱惑内衣秀、神秘塔罗牌占卜，加上性感男模与现场来宾的激情互动，将整个派对推上了高潮，每一位在场嘉宾都领略到了芮欧百货独有的惊艳和魅力。\n本次活动作为5月芮欧女人季Réel Celebrates being a woman活动的第一波，为5月的缤纷活动拉开了序幕。此后，芮欧将精彩延续，推出Réel Love亲子涂鸦世界和Being Réel我型我秀炫自我街拍活动，彰显时尚购物的生活情趣与态度。\n颠覆传统精品百货的经营模式，打造新颖个性化的购物乐趣！芮欧百货将继续创造更多惊喜，构筑宠爱现代女性的甜蜜空间。\n缤纷夏日，芮欧百货邀您全家总动员，来芮欧百货，开启欢乐之旅吧！",
			ImageQuantity: 3,
			BackgroundType:	"Type1",
			Language: "Ch"
		},{
			Key: "20130308",
			Date: "3月8日 2013",
			Title: "芮欧百货 Fashion Month",
			ShortDescription: "位于上海中心商务区亦是最繁华路段南京西路的芮欧百货当天傍晚举行了 Fashion Month 开幕派对。",
			Description: "2013年3月8日，位于上海中心商务区亦是最繁华路段南京西路的芮欧百货当天傍晚举行了Fashion Month 开幕派对。芮欧百货自开业以来一直将目光锁定于当前的时尚爱好者，为其提供焕然一新、与众不同的购物体验。今年春夏，芮欧百货更是为时尚前沿的都市男女打造了一个购物且食乐的好去处。芮欧百货除了囊括了国外新兴的时尚奢侈品牌，同样也拥有中国消费者挚爱的经典奢华品牌。芮欧百货专注于将品牌以精致、完美的形式呈现给阅历丰富的中国消费者，满足对高质量、高要求的主张。Fashion Month系列活动，是芮欧百货专为追求精品生活的时尚主义人士倾情打造的个性之旅，力图以天马行空的创意和充满乐趣的活动将国际时尚界的平台同步呈现于具有“东方巴黎”之称的上海。芮欧百货Fashion Month活动旨在与品牌互动的同时，为顾客创造全新的购物环境和体验，迎接各大品牌的春季新品上市。活动当天，Fashion Month派对迎来了众多媒体以及艺术时尚爱好者。现场的糖果工艺，花店的新鲜气息，还有漂亮可爱的自拍大头贴以及小丑们与现场来宾的互动，成为了整个派对的焦点，让在场每一位都领略到了芮欧百货春夏季的新风尚。芮欧百货的奢侈时尚，创意多彩，新鲜有趣将会在不久的将来成为上海最受欢迎的时尚购物消费地之一。",
			ImageQuantity: 2,
			BackgroundType:	"NoBackground",
			Language: "Ch"
		},{
			Key: "20130125",
			Date: "1月25日 2013",
			Title: "芮欧百货RAT TAR ART BAR 正式开幕",
			ShortDescription: "芮欧百货1楼Rat Tar Art Bar举行了开幕酒会，迎来了各界人士的参与，气氛热烈。",
			Description: "20世纪末的艺术之心纽约，荟萃来自世界各地的艺术家，满怀着才华和理想涌向这头角峥嵘的耀眼舞台。\n作为全球的创作前沿与艺术核心，无论是艺术家、鉴赏家甚至于收藏家，只要是对现代艺术充满热情的人，几乎没有不向往纽约的。艺术家们散居在只有路名而没有门牌号的Mott Street、Carmine Street及Spring Street旧厂房里.也通过几处固定的酒吧, 聚餐共饮, 交流和分享彼此的创作与思想。在苏活区一带，无论是挂起画作彼此品评，抑或互相研读新创的剧本作品，甚至毫无拘束的载歌载舞，每一次的欢聚总令人意犹未尽，流连忘返，直至天明。\n在频繁的交流之际，催生出数个知名的纽约艺术家俱乐部，例如Max’s Kansas City 、The Mudd Club、The Milk Bar 和 Cedar Tavern等等，也曾创造许多传奇的事迹。想象一下，当地下绒丝乐团的卢·里德（Lou Reed）在台上激越演唱时，坎蒂·妲玲（Candy Darling）从后台打转到沃霍尔（Andy Warhol）的桌旁；此时，杜库宁（DeKooning）与蓬斯（Larry Poons）则潇洒地坐在吧台的另一端，与罗伯特·劳申伯格（Robert Rauschenberg）和约翰·凯奇（John Cage）共思音乐的创作……\nKris Ruhs，纽约艺术家，1970年代起便活跃于纽约艺术界，始终是一颗众所瞩目的艺术明星。他深刻地感受到，今日高速发展的上海已急起直追纽约，同样需要一处可以共同探讨艺术、聆听艺术、欣赏艺术，甚至于还能使人融入艺术世界并充分地感受到艺术能量的场所。Kris Ruhs在上海感受到似曾相似的艺术创作活力，矢志在上海营造能够激发艺术家活跃生气的氛围。\n上海也该有个艺术酒吧（Art Bar）。 这样的想法一直萦绕在Kris Ruhs的脑海中，而Rat Tar Art Bar正是他的梦想起点。随着 的诞生，上海的艺术能量将有如时代的光华，来时刹那却隽绵永恒。也许你还来不及察觉此刻究竟已发生了什么变化，兴许来一趟RAT TAR ART BAR，便能找到答案。",
			ImageQuantity: 12,
			BackgroundType:	"Type3",
			Language: "Ch"
		},{
			Key: "20121115",
			Date: "11月15日 2012",
			Title: "芮欧百货美人季，开启冬日玩美之旅",
			ShortDescription: "2012年11月15日-11月25日，百货芮欧百货举行了以芮欧百货美人季为主题的化妆品推广活动。",
			Description: "2012年11月15日-11月25日，百货芮欧百货举行了以芮欧百货美人季为主题的化妆品推广活动。本次活动历时两周，围绕芮欧B1层众多国际一线化妆品牌，推出多重惊喜活动，并通过微博聚集了广大粉丝的关注和互动。本次芮欧百货美人季活动以魅力讲堂、凯文老师的美人计、美丽互动和玩美体验四大部分为主。\n魅力讲堂，由BOBBIBROWN，Clinique，SK-II，Lancome等多家知名化妆品牌带来秋冬最新最潮流的彩妆趋势和保养秘诀，吸引了众多爱美的消费者现场参与。\n美丽互动以当下最流行的二维码为触机，在各化妆品专柜与消费者趣味互动，只要累计刷齐五个二维码便有机会获得价值100元的芮欧美食街消费卡一张。\n玩美体验则是消费即可享受的芮欧专献的独家玩美妆容体验：BOBBIBROWN一分钟底妆体验，Clinique15分钟减龄5岁面部按摩、M.A.C45分钟全妆体验，Sisley30分钟至臻面部护理…款款“心动专享”，迅速为活动积攒起了超高人气。\n亚洲造型天王凯文老师的到来，为 芮欧百货美人季再添点睛之笔。11月18日，凯文老师亲临芮欧B1层，献上专场美容讲座，并欣然与在座的爱美女性们分享护肤心得，面授美肤机宜，并以简单几招，轻松搞掂冬日护肤。此外，凯文老师还悉心提点今冬美妆潮流，带来OL日常妆VS夜晚派对妆的快速转换秘笈。凯文老师亲切风趣的讲解，令现场气氛不断升温，台上台下展开热烈互动，消费者真真切切感受到了芮欧带来的美丽体验。\n芮欧百货美人计主题活动有效提高了B1层化妆品区的知名度，以更多的创意和趣致，带给消费者最直接和实际的体验，是一次沪上爱美女性的惊艳之旅。",
			ImageQuantity: 2,
			BackgroundType:	"Type4",
			Language: "Ch"
		},{
			Key: "20120907",
			Date: "9月7日 2012",
			Title: "芮欧百货倾情呈现时尚购物盛宴",
			ShortDescription: "2012年9月7日起至9月30日期间，芮欧百货倾情呈献 Twenty-four Hour Beauty 购物盛宴！",
			Description: "徘徊在秋夏之间，城市中繁忙的24小时，我的美丽依然不变，2012年9月7日起至9月30日期间，芮欧百货倾情呈献Twenty-four Hour Beauty购物盛宴，丰富的品牌优惠，各种奢华幸运大奖，芮欧百货为消费者量身打造，奉上最具魅惑的时尚飨宴，完美点亮这一季的时尚盛会！\n芮欧百货秉承一贯打造新颖个性化的购物乐趣的理念，活动期间举办一系列活动如：丰厚的幸运抽奖，集点送好礼，双倍集点，银行刷卡礼等。在芮欧单笔消费满5,000即可获得抽奖机会，有机会赢取Alexander McQueen经典丝巾, Balenciaga, Stella McCartney, Ralph Lauren 2012最新款手包，Gucci石英腕表，Porter限量版斜挎包等奢华好礼。\n芮欧消费集点可兑换New iPad, iPod nano等各式精选礼品。中国银行，中国工商银行，浦发银行也倾情加盟，献上丰富的刷卡礼，持浦发银行借记卡和中国工商银行信用卡消费即有机会获赠芮欧50元乐享卡，持中国银行信用卡消费即有机会获赠迪斯尼床品三件套。\nB1化妆品区单笔消费满2,000元就有机会获赠Wagas下午茶套餐，其中各大国际一线化妆品倾情专献美丽专享的品牌日活动，在品牌日指定专柜消费即可享芮欧双倍集点，同时提供品牌特惠套装，限量产品，超值买赠，只在芮欧专享。芮欧以精致贴心的服务，在秋夏之间，为时尚女性量身打造美丽的舞台。",
			ImageQuantity: 2,
			BackgroundType:	"NoBackground",
			Language: "Ch"
		},{
			Key: "20120725",
			Date: "7月25日 2012",
			Title: "芮欧百货启动国际美食广场 Réel Kitchen",
			ShortDescription: "芮欧百货宣布启动以国际化与精致美食著称的 Réel Kitchen引领悦活美食新风尚。",
			Description: "2011年7月25日，芮欧百货宣布启动以国际化与精致美食著称的Réel Kitchen。位于南京西路的精致美食广场Réel Kitchen座拥优越便捷的地理环境，地处南京西路奢华酒店、咖啡馆、写字楼的繁华地带，毗邻2号线及7号线静安寺地铁站，于高楼林立的上海大都会取一片恬美的安静与优雅之地，诚意为热爱美食与精致生活的人士打造新鲜愉悦的美食体验。\n臻于细节的私人厨房\n细节的坚持，创新的热情是Réel Kitchen的核心理念。在6200m2的美食区域中，Réel Kitchen提供了超过1000个用餐座席。为了营造市中取静优雅舒适的用餐环境，Réel Kitchen将用餐空间划分为416个公共座席和700个大餐厅座席，并按照轻食与热食将整个美食广场划分为相对独立的区域，既照顾到顾客口味与喜好的差异，同时又营造轻松惬意的美食体验。\n与很多美食广场不同，Réel Kitchen将更多的悉心周到融入日常的设计中，不着痕迹地为消费者营造如同私人厨房般的贴心环境：在Réel Kitchen，顾客可以直接于各美食店铺付款，完全省却了在前台办理美食卡的等候时间；在Réel Kitchen，随处可见以新鲜美食素材设计的创意笑脸食谱，处处充满Réel Kitchen式的幽默与谐趣，让顾客发自内心的会心微笑。\n由内而外的惬意空间\n整个Réel Kitchen层高超过三米，所有墙面都采用纯石材打造，设计师还匠心独具地在墙上放置了一系列垂吊型的绿色植物盆景，给人扑面而来的清新感觉；与此呼应，Réel Kitchen的地板全部采用充满光感的大理石材质。简约、典雅的环境伴随轻快流淌的涓涓乐曲，为顾客营造了惬意、贴心的用餐环境。\n从味蕾出发，又不止于味觉。Réel Kitchen带给顾客全方位的愉悦体验，不仅要满足对味道挑剔的饕客，更要让都市人在RéelKitchen里享受由内而外的轻松悠然。\n别具一格的世界美食品牌\n定位于国际美食广场的Réel Kitchen聚集了国际知名美食品牌，将中式、日式、韩式、越式、意式，美式等各国美食收入囊中，从小杨生煎这样的本土畅销品牌，到沃歌斯这样的国际流行美食，共有9家主题大店、24家轻食及11家热食。\n无论你是和闺蜜寻觅一个共聚的下午茶空间，还是在充满挑战的工作日为客户安排一次重要的商务午餐，或者是想要为shopping归来的自己找个悠闲放空的休憩处，Réel Kitchen都能让你摆脱都市生活的忙碌与烦忧，在各具风味的国际精品美食中，开心尽情享受既悠闲又优雅的时刻。",
			ImageQuantity: 3,
			BackgroundType:	"NoBackground",
			Language: "Ch"
		},{
			Key: "20130601",
			Date: "June 1, 2013",
			HeadNews: true,
			Title: "A Happy Family Trip in June at Réel Department",
			ShortDescription: "Starting from June 1st, a series of warm and sweet activities in Réel will highlight the whole summer.“Réel Grati Wall” on the fourth floor will oer children a space of imagination and creativity, where their fresh and lovely drawing...",
			Description: "A Happy Family Trip in June at Réel Department\nFrom June 1 to 16, 2013, in the convivial atmosphere of Children's Day, the huge “Réel Grati Wall” for kids to draw their grati and signatures at the white space on the fresh and lovely background was presented on the fourth floor of Réel Department Store. The co-created giant paintings would be exhibited till June 30. Meanwhile, on the same floor delicious candies and fun rides were prepared for young kids that mom and dad will not only enjoy the happy hours with their children here but also retrieve the long-lost childhood memories.\nFrom June 1 to 30, \"Double Surprise Happy Shopping\" activities were grandly held at Réel Department Store that customers may have a chance to win the \"Free Family Travel\" to Tokyo or Hong Kong Disneyland in addition to enjoying shopping discounts. From June 17 to 30, Réel Department Store launched the \"Summer Carnival\" point-for-gift activity to feedback consumers that they can exchange exquisite gifts of varied values with the accumulated points of their Réel Tracking Card to share the joy with their families.\nOn June 23, the Summer Music Festival co-sponsored by the French Consulate and Shanghai Municipal Bureau of Culture at RAT TAR ART BAR on the first floor of Réel Department Store ignited the passion of the whole city before the height of summer. From 16:00 to 23:00 on that day, music lovers from all over the city gathered at RAT TAR ART BAR to enjoy the performances of world- renowned bands Monkey Philosophy, Crazy 88, and many other musicians. Meanwhile, a special concert for children was held from 16:00 to 17:00 by the musicians, where the young kids were invited to share the happy hours with their mom and dad.\nOn June 30, preliminaries of the third \"Starlight Baby\" contest shone on the fourth floor of Réel Department Store. The star kids dressed in Sergent Major, a highclass children's clothing brand from France at the Department, and showed their unique talent and temperament, perfectly interpreting the lively atmosphere of children’s holiday and family’s get-together exclusive to the month of June.\nIn the colorful summer, come with your whole family to Réel Department Store and start a trip of happiness and joy!",
			ImageQuantity: 2,
			Language: "En"
		},{
			Key: "20130504",
			Date: "May 4, 2013",
			Title: "Réel Sexy Party",
			ShortDescription: "Réel Sexy Party for Ladies was held at Réel Department Store that is situated at Nanjing West Road, the CBD and ...",
			Description: "On May 4, 2013, Réel Sexy Party for Ladies was held at Réel Shanghai Department Store located at Nanjing West Road, CBD as well as the most prosperous section in Shanghai, that evening.\nRéel Sexy Celebrates being a woman— I have my attitude! Réel Sexy Party, with an interaction with numerous lingerie brands in Réel, created a more perfect and exquisite shopping experience for females, and attracted many high-end groups as fashion media, fashion vanguard and arts lovers. The wonderful DJ performances, seductive lingerie show, mysterious Tarot augury, plus passionate interaction between the sexy male models and guests at the site, all these pushed the whole party to a climax and convinced the guests presented the amazing charm unique for Réel Department Store.\nEnsuing the first round of series activities of “Réel Celebrates being a woman” in May, a riotous profusion of wonders like Réel Love Family Grati World and Being Réel My Show My Life Street Snapping would continue to highlight the life and attitudes of fashion shopping.. A subversion of the traditional business pattern of boutique department store and a creation of original and personalized shopping experience, Réel Department Store will keep on bringing more surprises, and building up a sweet space favoring modern women.",
			ImageQuantity: 3,
			BackgroundType:	"Type1",
			Language: "En"
		},{
			Key: "20130308",
			Date: "Mar 8, 2013",
			Title: "Réel Department Store Fashion Month",
			ShortDescription: "Fashion Month opening party was held at Réel Department Store that is situated at Nanjing West Road, the CBD and...",
			Description: "In the evening of March 8, 2013, the opening ceremony party of Fashion Month was held at Réel Shanghai Department Store located at Nanjing West Road, the CBD and most prosperous section in Shanghai. The Department Store eyed on the fashion lovers in the new era since its operation, providing them a completely new and distinctive shopping experience. This spring and summer, Réel would be considered as an ideal place of shopping and entertaining for urban men and women standing at the fashion front.\nRéel Department Store embraces not only the emerging fashion and luxury brands, but also the classic brand favored by Chinese consumers. Dedicating to present brands to the discerning Chinese consumers in an exquisite and perfect form, the Department Store endeavors to satisfy the demands for high quality and high standard. Fashion Month series activities, a personalized trip designed for fashion lovers who pursue a fine life, aimed to make Shanghai the \"Paris of the East\" in sync with international fashion trends through unrestrained activities full of originality and fun. Through interacting with brands and creating a completely new shopping environment and experience, the activities ushered in the new arrivals of those major brands in spring. The Fashion Month Party had witnessed amount presence of media and art and fashion lovers. The candy craftsmanship, fresh breath of flowers, cute selfies and clowns interacting with guests highlighted the party and brought the appreciation of the new trends of spring and summer fashion in Réel Department.\nBeing luxury, fashionable, original, colorful, fresh, and interesting, Réel Department Store will certainly become one of Shanghai's most popular fashion shopping destinations in the near future.",
			ImageQuantity: 2,
			BackgroundType:	"NoBackground",
			Language: "En"
		},{
			Key: "20130125",
			Date: "Jan 25, 2013",
			Title: "Rat Tar Art Bar formally opened",
			ShortDescription: "In the evening of January 25th, 2013, the opening reception of Rat Tar Art Bar at 1F of Réel Department Store saw the...",
			Description: "At Réel Shanghai\nThe heart of art at the end of the 20th century was NYC. All those who had any talent from anywhere, flowed like liquid lightning into one shining city at one shining moment, New York.\nNew York became the heart and guts of the artistic univrse. Anyone interested in contemporary art, making it, seeing it, buying it or selling it, anywhere on the planet, had to come to New York. And for those who found themselves spaces to live in old factory lofts on streets that had names instead of numbers, Mott Street, Carmine Street, Spring Street, also found that there were places they could meet. To get a drink, or have a bite to eat and share their work, hang their paintings, read their screenplays, dance on stage or sometimes on the tables and play their rock and roll until dawn in neighborhoods that were called the Village and SoHo.\nAnd when the artists of New York got together to have a coee, or a cocktail, they gave birth to the legendary night time happenings like Max’s Kansas City, The Mudd Club, the Milk Bar, or the Cedar Tavern, where Lou Reed sang upstairs while Candy Darling swirled through the back room to Andy’s table. And DeKooning and Poons sat drinking at the bar with Rauschenberg and John Cage making music.\nKris Ruhs, a native of New York and a part of the 1970’s art scene there, recalls the great energy he felt. Having places to go to talk art, hear art, see art and be a part of what makes art, the energy of the artists, is something he sees happening now in the art scene in Shanghai. Growing with the same lightning speed as New York, Ruhs intends to open a place next month where the artists and the energy they bring, could come together to share the energy of their creative ideas.\nRuhs thinks that it is time to open an art bar in Shanghai-The RAT TAR ART BAR. The spirit of the times for the times, and only for a brief time, to explore the energy of Shanghai before, like lightning, it is over and life moves on. And everyone will say, “What just happened?” and the answer will be, \"Whatever it was, it happened at the RAT TAR ART BAR.\"",
			ImageQuantity: 12,
			BackgroundType:	"Type3",
			Language: "En"
		},{
			Key: "20121115",
			Date: "Nov 15, 2012",
			Title: "Réel Beauty Season started the perfect tour in winter",
			ShortDescription: "From November 15 to 25, 2012, the cosmetics promotion themed with Réel Department Store Beauty Season was...",
			Description: "From November 15 to 25, 2012, the cosmetics promotion themed with Réel Department Beauty Season was held at the Department Store. During the two weeks, a series of activities with full of unexpected surprises highlighted numerous international cosmetic brands at B1 Floor of the Department Store and it were followed and interacted on Weibo (micro blog).\nThe Beauty Season activities featured four parts: \"Lectures on Charm\", \"Kevin’s Tips of Beauty\", \"Beauty Interaction\" and \"Make Perfect Makeup\". In \"Lectures on Charm\" session, the latest and most fashionable makeup trends and tips in autumn and winter were brought about by BOBBIBROWN, Clinique, SK-II, Lancôme and many other well-known cosmetic brands, and shared with many consumers on the spot.\nWith the most popular 2D bar code as the medium, \"Beauty Interaction\" provided consumers the chance of winning Réel Kitchen card worth of RMB 100 by accumulatively scanning five 2D codes at the cosmetic counters. \"Make Perfect Makeup\" oered consumers the exclusive makeup experience that can only be enjoyed at Réel Department upon the consumption: BOBBIBROWN one-minute foundation, Clinique 15-minute facial massage,\nM.A.C 45-minute full makeup, Sisley 30-minute facial care .... All the enchanting experience quickly won popularity for the activity.\nThe arrival of Kevin, King of Makeup in Asia, added the enlighten touch to Réel Beauty Season. On November 18, Kevin came to B1 Floor of Réel Department to share skincare and makeup tips, especially the secrets to skin care in winter with women in pursuit of beauty face to face. He also instructed the latest makeup trends in winter by presenting the quick switching of daily makeup to party look for oce ladies. His kind and witty instruction heated the atmosphere, and the lively interaction made consumers truly feel the beauty experience brought by Réel.\n\"Réel Department Beauty Season\" theme activity, a stunning journey of beauty for Shanghai women, eectively improved the popularity of B1 cosmetics, and brought consumers the most direct and practical experience of originality and beauty.",
			ImageQuantity: 2,
			BackgroundType:	"Type4",
			Language: "En"
		},{
			Key: "20120907",
			Date: "Sep 7, 2012",
			Title: "Réel fantastically presented a feast of fashion shopping",
			ShortDescription: "During September 7 to 30, 2012, the Twenty-four Hour Beauty shopping feast was presented at Réel Department Store.",
			Description: "\"Between summer and autumn, during the 24 hours of busy city life, my beauty remains\". From September 7 through 30, 2012, Réel Department fabulously presented \"Twenty-four Hour Beauty\" shopping feast with a variety of brand discounts and lucky luxury gifts, tailoring for consumers the most charming gala of fashion in this season.\nWith the consistency in creating novel and personalized enjoyment of shopping, a series of activities was held during the event period, including lucky draw, point for gift, double consumption points, and winning gifts by slotting credit cards. A spending of or over RMB 5,000 per purchase at Réel Department would gain a lucky draw to win the gift like a classic Alexander McQueen scarf, the latest Balenciaga, Stella McCartney, Ralph Lauren handbag of 2012, Gucci quartz watch, Porter’s limited edition messenger bag or other luxury gift. Réel consumption points would be redeemed for New iPad, iPod nano and other kinds of fabulous gifts. Meanwhile, card holders of Bank of China (BOC), Industrial and Commercial Bank of China (ICBC), and Shanghai Pudong Development Bank (SPDB) would have the chance of winning gifts by slotting bank cards. The consumption through SPDB’s debit cards or ICBC’s credit cards would have the opportunity to get a Réel consumption card worth of RMB 50,while the consumption through BOC’s credit card may be rewarded with a three- piece Disney bedding.\nA spending of or over RMB 2000 per purchase at the B1 cosmetics area would have a chance to win a Wagas afternoon tea set, and consumption at designated counters of major international cosmetic brands on the Brand Day could enjoy double consumption points; in the meanwhile, discount packages, products of limited edition, buying one to get one free, all were served at Réel Department. With attentive services, Réel Department built up a stage of beauty for women of fashion between summer and autumn.",
			ImageQuantity: 2,
			BackgroundType:	"NoBackground",
			Language: "En"
		},{
			Key: "20120725",
			Date: "Jul 25, 2012",
			Title: "The international food court Réel Kitchen led the trend of food and delight",
			ShortDescription: "On July 25, 2011, Réel Department Store announced the launching of Réel Kitchen known for its international style...",
			Description: "On July 25, 2011, Réel Department Store announced the launching of Réel Kitchen known for its international style and delicious food. The international food court enjoys an ideal location on Nanjing West Road in the neighborhood of luxury hotels, cafes, oce buildings, Metro Line 2 and Line 7, oering people who love food and fine life a fresh and enjoyable dining experience with its peacefulness and elegance in the woods of skyscrapers.\n A private kitchen of perfect details\nPassion for details and innovation is the core concept of Réel Kitchen. More than 1,000 dining seats are provided around the 6200m2food area. In order to create an elegant and comfortable dining environment in the bustling city, Réel Kitchen divides the dining space into 416 public seats and 700 restaurant ones; the whole food court is divided into several relatively separated areas according to the service of fast food and hot dishes, not only taking consumers’ dierent tastes and preferences into account, but also creating a relaxing dining experience.\nDierent from many other food courts, Réel Kitchen creates consumers an intimate environment of private kitchen by integrating more careful and thoughtful designs into daily service without trace: in Réel Kitchen, customers can pay directly at the food stalls without queuing for applying the food card at the reception desk; in Réel Kitchen, the smiling face recipes designed with fresh food materials and the Réel Kitchen sense of humour could be found everywhere, making customers smile from the inside.\nA snug space from the inside out\nThe over-three-meter storey height, all pure stone wall space, and hanging green plants bonsais on the walls present a blowing freshness, echoing with the lustrous marble floor. Simple, elegant surroundings accompanied by brisk melodies bring customers a cozy, intimate dining environment.\n\"It starts from the taste bud, but not ends at taste.\" Réel Kitchen gives customers a full range of pleasant experience, not only satisfying the discerning gourmands, but also pleasuring the city people with easiness and leisureliness from the inside out.\nThe unique international food brands Réel Kitchen positions itself as an international food court that gathers internationally renowned food brands from the local favorite Yang’s Fried Dumpling to international popularity Wagas and Chinese, Japanese, Korean, Vietnamese, Italian, American and other international cuisines together, enjoying 9 restaurants, 24 light meal kiosks and 11 delis.\nWhether you are looking for a space for afternoon tea with your female friends, or arranging an important business lunch for clients in the work days, or just finding a place for a break after shopping, Réel Kitchen oers you an ideal place where you can break away from the hustling urban life and worries and enjoy the relaxed and elegant moment with fine cuisines of international flavors.",
			ImageQuantity: 3,
			BackgroundType:	"NoBackground",
			Language: "En"
		}], function(err, data){
			res.send("Insert Default News OK");
		});
	});
	mongo.database.collection("faq", function(err, collection){
		collection.insert([{
			Title:"Card",
			Language: "Ch",
			QuestionList:[{
				Question:"・请问芮欧百货的购物记录卡是会员卡吗？",
				Answer:"芮欧百货的购物记录卡是积分卡，非会员卡，仅供于本商场消费时累积积点及活动时使用，非信用卡亦不具记账或任何其他用途。"
			},{
				Question:"・全馆都可以使用购物记录卡或会员卡集点吗？",
				Answer:"持购物记录卡及会员卡在芮欧百货（上海）有限公司B1F-5F部分商户内消费，可享有累积点数活动。活动内容视现场公告而定。<br />(餐饮类商铺、部分专柜和地下二层美食广场的消费金额恕不列入积分计算)"
			},{
				Question:"・购物记录卡及会员卡优惠在哪里可以使用？",
				Answer:"持购物记录卡及会员卡在芮欧百货（上海）有限公司B1F-5F部分 商户内消费，可享有累积点数、购物折扣、兑换礼品活动等优惠，优惠活动视各类卡别而有不同，依现场公告或明示为主。<br />(餐饮类商铺、部分专柜和地下二层美食广场的消费金额恕不列入积分计算)"
			},{
				Question:"・请问资格积分与礼品积分有何不同？",
				Answer:"资格积分：购买B1F-5F 商品  1元=1点（部分情况除外）：可让您更快速积分成为会员，易于累积、入会及升级。<br />礼品积分：购买B1F-5F 商品  100元=1点（部分情况除外）：可让您不定期兑换本馆推出之各类新奇商品与体验组合。<br />(餐饮类商铺、部分专柜和地下二层美食广场的消费金额恕不列入上述积分计算)"
			},{
				Question:"・非本人可以申办会员卡吗？",
				Answer:"需本人持有效证件(如：身份证、护照等)方可申办或领取会员卡，以免被冒名申办或领取。"
			},{
				Question:"・请问如何知道所持的购物记录卡是否已达升等资格？",
				Answer:"若您的购物记录卡卡内消费累计积分已达升等标准，我们会主动以短信或电子邮件方式通知您。您也可拨打客服专线：+86 21 22309788 或  4001559788查询。"
			},{
				Question:"・持购物记录卡具升等资格后，如何换发会员卡？",
				Answer:"您可持个人有效证件(如：身份证、护照等)与购物记录卡，至本馆三层贵宾室换发会员卡，现场申办，立即取卡，即享会员权益。"
			},{
				Question:"・请问会员有没有来店礼或生日礼？",
				Answer:"有，不定期推出卡友独享来店礼及生日礼。"
			},{
				Question:"・多张购物记录卡或会员卡的积分点数可以累积在一起使用吗？",
				Answer:"每人限办一张购物记录卡或会员卡。积分点数限本人使用，不可移转；不同卡号的任何积点均不可合并累计。"
			},{
				Question:"・购物记录卡或会员卡累计积分的方式？可以多张收银小票累积计算吗？",
				Answer:"于芮欧百货内地下一层~五层商铺/专柜消费时应主动出示购物记录卡或会员卡，由本公司服务人员将该次消费点数直接记录于卡片上；不可累积计算多张收银小票；<br />于芮欧百货内一层与二层商铺/专柜消费时，请持当日芮欧百货“消费小票顾客联”、商铺/专柜“购物收据”（如有）、“刷卡签购单”及购物记录卡/会员卡（如有）等凭证，至地下一层客户服务台或三层贵宾室办理开卡或卡面点数更新事宜。"
			},{
				Question:"・消费当日忘记带购物记录卡或会员卡，之后可以补登积分吗？",
				Answer:"为了维护购物记录卡持卡人及会员的合法权益，请在全馆消费结账时主动出示卡片以累计积分(B2F小吃餐厅餐饮类商户及部分专柜消费金额不列入计算)。若购物时未出示购物记录卡/会员卡，则该笔消费恕不能隔日补办或进行累计集点处理。"
			},{
				Question:"・请问如何查询购物记录卡/会员卡卡内资格积分及礼品积分累积点数？积分有效期？",
				Answer:"本馆提供多种积分查询方式，让您随时掌握兑换点数。可使用以下方式进行积分查询：<br />卡片上显示；<br />3F 贵宾室查询；<br />B1F客户服务台查询；<br />网站在线查询（待定）"
			},{
				Question:"・礼品积分点数如何兑换礼品？",
				Answer:"礼品积分兑换礼品时，请携带您本人的购物记录卡/会员卡及有效证件(如：身份证、护照等)至本馆指定区域兑换礼品。"
			},{
				Question:"・请问如何索取商场的DM呢？",
				Answer:"B1F服务台或馆内的DM立架，皆提供免费DM索取"
			},{
				Question:"・已申请会员卡却一直未收到DM？",
				Answer:"因邮件寄送过程可能有不可抗力之影响因素，或会员申请表内填写通讯地址有误，以致无法送达，敬请拨打客服专线+86 21 22309788 或 4001559788 洽询。"
			},{
				Question:"・如何更改DM寄送地址？",
				Answer:"DM寄送地址有所变更时，敬请及时通过客服热线+86-21-22309788通知本公司或至3F贵宾室行更新，以 便能够及时、准确地为您提供贵宾服务。"
			},{
				Question:"・请问如何更改个人资料呢？",
				Answer:"会员在其姓名、住址、电话号码等个人信息有所变更时，敬请及时通过客服热线+86-21-22309788通知本公司或至3F贵宾室进行更新，以便能够及时、准确地享受本公司为您提供的贵宾服务。"
			}]
		},{
			Title:"Park",
			Language: "Ch",
			QuestionList:[{
				Question:"・请问目前停车场收费标准？",
				Answer:"第一个小时内按一小时收费，收费金额为人民币15.00元/个/小时；第二个小时起以半个小时为收费单位，收费金额为人民币7.50元/个/半小时；每天的同一个车位的同一车辆连续停靠使用的最高收费按八小时计算，即收取费用为人民币120.00元/天。"
			},{
				Question:"・请问消费是否可以抵扣地下室停车费？",
				Answer:"非会员：凡于芮欧百货内（但不包括B2F美食广场和餐饮类商铺/专柜的消费，详情请垂询B1F客户服务台或3F贵宾室）当日累计消费满人民币500元或以上可免费停车1小时，满人民币1,000元可免费停车2小时；满人民币2,000元可免费停车3小时，每车每次最高可享受3小时免费停车优惠，超出时间按照标准15元/小时收取停车费。<br />银卡会员：凡于芮欧百货内（但不包括B2F美食广场和餐饮类商铺/专柜的消费，详情请垂询B1F客户服务台或3F贵宾室）当日累计消费满人民币500元或以上可免费停车1小时，满人民币1,000元可免费停车2小时；满人民币20,000元可免费停车3小时，每车每次最高可享受3小时免费停车优惠，超出时间按照标准15元/小时收取停车费。<br />金钻卡会员：持金钻卡尊享每日免费停车2小时；凡于芮欧百货内（但不包括地下二层美食广场和餐饮类商铺/专柜的消费，详情请垂询地下一层客户服务台或三层贵宾室）当日累计消费每满人民币500元或以上可免费多停车1小时，每车每次最高可享受4小时免费停车优惠（含金钻卡会员尊享每日免费停车2小时优惠在内），超出时间按照标准15元/小时收取停车费。"
			},{
				Question:"・请问消费扣抵停车费办法？",
				Answer:"凡满足停车优惠条件的请持收银小票至B1F 客户服务台兑换停车券，持停车票卡及停车券开车前往B2F停车收费岗亭进行计价后方可离场。"
			},{
				Question:"・请问地下停车场的开放时间到几点？",
				Answer:"地下室停车场为24小时全天开放。"
			},{
				Question:"・请问如何联系停车管理人员？",
				Answer:"如果您在停车场内有任何停车或车辆问题，您可以就近至B2F 停车收费岗亭联系停车场服务人员。"
			}]
		},{
			Title:"Service",
			Language: "Ch",
			QuestionList:[{
				Question:"・请问商场的营业时间：",
				Answer:"B2F Réel Kitchen部分商户早餐时段：08:00-22:00<br />B2F Réel Kitchen部分商户 / 芮欧百货：10:00-22:00"
			},{
				Question:"・请问客户服务台在哪里？会员服务中心在哪里？",
				Answer:"客户服务台位于B1F挑空电扶梯口，会员服务中心则位于3F贵宾室。"
			},{
				Question:"・请问芮欧百货馆内有置物柜吗？有寄存服务吗？",
				Answer:"有，本馆B2F设有电子收费置物柜（费用详情请洽B1F客服人员）提供寄存服务。"
			},{
				Question:"・请问何处设有自动提款机可以提款？",
				Answer:"B2F挑空电扶梯旁设有浦发银行及交通银行提款机。"
			},{
				Question:"・请问B2F Réel Kitchen的消费方式？",
				Answer:"您可以至B2F售卡亭购买美食卡和乐享卡，卡内押金为人民币10元，美食卡不记名、不挂失、遗失不补，请妥善保管。<br />您也可以至美食广场各商户直接付现金予服务人员并索取收银机消费小票以为消费凭证。<br />详情可亲洽B2F售卡亭服务人员或拨客服专线+86 21 22309788"
			},{
				Question:"・请问如何购买芮欧百货美食广场的美食卡?",
				Answer:"如您需要购买本商场B2F Réel Kitchen发行之充值美食卡及乐享卡，详情请亲洽B2F 售卡亭服务人员或联系客服热线021-22309788，我们将竭诚为您服务。"
			},{
				Question:"・请问美食卡是否全馆通用？",
				Answer:"美食卡及乐享卡仅适用于B2F Réel Kitchen美食广场指定柜位内使用，适用店家以现场公告为主。"
			},{
				Question:"・请问哪里可以换开发票？",
				Answer:"持B1F-5F的收银机消费小票，请您至B1F客户服务台换开发票。<br />持B2F 餐厅及其他各层各区餐厅／餐饮类商户的收银机消费小票，请您至原商户收银台换开发票。<br />持B2F Réel Kitchen各小吃档口的收银机消费小票，请您至B2F 售卡亭换开发票。"
			},{
				Question:"・请问如何办理退换货？",
				Answer:"若您购买到非人为损害之瑕疵商品，请您携带完整瑕疵商品(含赠品)、收银小票、发票（如有），于消费隔日起7日内，至本馆办理退换货之手续，服务同仁将非常乐意为您服务。若您当日是以信用卡结账，还需请您一并携带该笔购物签账单与该张信用卡，以方便退换货商品处理。<br />信用卡、借记卡退货，到帐日为15至45个工作日（卡别不同则到帐日有所不同），一律不退现。以信用卡购买办理退货时，需携带信用卡、收银机消费小票、发票（如有）、刷卡签购单（如有）办理刷退。<br />以现金购买办理退货时，即退还现金。<br />若退换商品曾有兑换赠品，需一并退回赠品。<br />卡友须同时出示购物记录卡/会员卡，卡友名下的兑换积分和资格积分也会相应地被同时调整。"
			}]
		},{
			Title:"Card",
			Language: "En",
			QuestionList:[{
				Question:"・Is Réel Tracking Card a kind of membership card?",
				Answer:"Réel Tracking Card is a kind of bonus point card, not the membership card. It can only be used in accumulating consumption bonus points and in promotional activities, without credit, account or any other purposes."
			},{
				Question:"・Could the bonus points be accumulated with consumption at any merchant in the Department Store?",
				Answer:"Tracking card holders may enjoy the bonus point accumulation with consumption at some merchants on the B1F to 5F of Réel Department Store. See the activity notice on the spot for more information.<br/>(The consumption at restaurants, some counters and Réel Kitchen at B2F would not be taken into the calculation of bonus points.)"
			},{
				Question:"・Where the benefit of tracking card and membership card could be used?",
				Answer:"Tracking card holders may enjoy the special offer of bonus point accumulation, purchase discount, and gift exchange with consumption at some merchants on the B1F to 5F of Réel Department Store. The special offer may vary with different cards. See the activity notice or express on the spot for more information. (The consumption at restaurants, some counters and Réel Kitchen at B2F would not be taken into the calculation of bonus points.)"
			},{
				Question:"・What’s the difference between qualification bonus point and gift bonus point?",
				Answer:"Qualification bonus point: when purchasing goods at B1F to 5F, RMB 1 = 1 point (except for some cases), which allows the cardholder to become a member with easy accumulation of points and upgrades. Gift bonus point: when purchasing goods at B1F to 5F, RMB 100 = 1 point (except for some cases), which allows the cardholder to enjoy exchange of all kinds of fancy goods and experience occasionally. (The consumption at restaurants, some counters and Réel Kitchen at B2F would not be taken into the calculation of bonus points.)"
			},{
				Question:"・Should the membership card only be applied personally?",
				Answer:"The application or receiving the membership card should be presented with valid document (ID card, passport, etc.) by the applicant so as to avoid imposter."
			},{
				Question:"・How could the tracking card holder know it is qualified to be upgraded?",
				Answer:"If your bonus points have been accumulated to the upgrading criterion, we will initiatively notify you through text message or e-mail. You can also call the customer service line: +86 2122309788 or 4001559788 for details."
			},{
				Question:"・How to renew the membership card when the tracking card held is qualified to be upgraded?",
				Answer:"Cardholder may go to the VIP Room on the third floor with valid personal documents ( ID card, passport, etc.) and the tracking card to apply and renew the membership card and immediately enjoy the membership benefits."
			},{
				Question:"・Does the member enjoy the store gift or birthday gift?",
				Answer:"Yes, the membership cardholder will exclusively enjoy the store gift and birthday gift occasionally."
			},{
				Question:"・Could the bonus points of multiple tracking or membership cards be used together?",
				Answer:"Each customer can only get one tracking or membership card. The bonus point is non-transferable and can only be used by the cardholder personally; no bonus point of different card can be accumulated together for use."
			},{
				Question:"・How to accumulate bonus point in the tracking or membership card? Can multiple cash register receipts be used together?",
				Answer:"Please present the tracking card to the casher when paying for the purchase at B1F to 5F, who will record the consumption points to the card. The accumulation of more than one cash register receipts is not allowed. Customers who consume at merchants in the 1F and 2F should come to the information counter at B1F or the VIP Room at 3F with consumption receipt customer stub, merchant’s shopping receipts and sales slip and other documents for opening the card or bonus point renewal."
			},{
				Question:"・Could the bonus point be post registered afterwards if the cardholder forgets to bring the tracking or membership card on the day of consumption?",
				Answer:"To safeguard the legitimate interests of the tracking card holder and member of Réel Shanghai Department Store, please initiatively present the tracking card to the casher to accumulate bonus points (The consumption at restaurants, some counters and Réel Kitchen at B2F should not be taken into the calculation of bonus points.). The bonus points of per purchase shall only be valid when are accumulated on the same day of the consumption, and will not be post registered in the next day nor be allowed to participate in the bonus point program again."
			},{
				Question:"・How to check the accumulated qualification and gift bonus points of the tracking/membership card and the validity term of the bonus point?",
				Answer:"Réel Shanghai Department Store offers cardholders a variety of bonus point checking, including<br/>•Displaying on the card<br/>•Inquiry at the VIP Room on the third floor<br/>•Inquiry at the information counter on B1F<br/>•Online inquiry (to be confirmed)"
			},{
				Question:"・How to exchange gift with bonus points?",
				Answer:"To redeem gift with gift bonus points, please bring your own tracking / membership card and valid document (ID card, passport, etc.) to the designated area in the Department Store for exchanging gifts."
			},{
				Question:"・How to get DM of the Department Store?",
				Answer:"Free DMs are provided at the DM stands near the information counter on B1F and at other places in the Department Store."
			},{
				Question:"・Why I didn’t receive the DM after the registry of membership card?",
				Answer:"The force majeure factor in mail sending or wrong mailing address filled in the membership application form may cause the DM undeliverable. Please call customer service line +86 21 22309788 or 4001559788 for details."
			},{
				Question:"・How to change the DM mailing address?",
				Answer:"If the DM mailing address is changed, please get us informed timely through the customer service hotline +86-21-22309788 or go to the VIP Room on the 3rd floor to update the information so that VIP services will be offered timely and accurately."
			},{
				Question:"・How to update personal information?",
				Answer:"When changes occur to the personal information like member’s name, address, or telephone number, please get us informed timely through the customer service hotline +86-21-22309788 or go to the VIP Room on the 3rd floor to update the information so that VIP services will be offered timely and accurately."
			}]
		},{
			Title:"Service",
			Language: "En",
			QuestionList:[{
				Question:"・Is Réel Tracking Card a kind of membership card?",
				Answer:"Réel Tracking Card is a kind of bonus point card, not the membership card. It can only be used in accumulating consumption bonus points and in promotional activities, without credit, account or any other purposes."
			},{
				Question:"・Where’s the information counter and member service center?",
				Answer:"The information counter is situated at B1F along the parlor escalator, and the member service center lies in the VIP Room on the 3rd floor."
			},{
				Question:"・Does Réel Department Store provide lockers and depositing service?",
				Answer:"Yes, ETC lockers are provided at B2F (consult the customer service personnel at B1F for details of fees) for depositing."
			},{
				Question:"・Where are the ATMs?",
				Answer:"ATMs of Shanghai Pudong Development Bank (SPDB) and Bank of Communications are set at B2F along the parlor escalator."
			},{
				Question:"・What are the consumption patterns at Réel Kitchen on B2F?",
				Answer:"You can buy the food card and fun card at card vending kiosk on B2F with RMB 10 for card deposit. The food card cannot be registered, nor reported the loss or reissued once lost, so please keep it properly. You can also go to the food court to pay cash directly to the casher and request the cash register receipts as consumption vouchers. Please contact the service staff of the card vending kiosks on B2F or call the customer service line +86 2122309788 for details."
			},{
				Question:"・How to buy Réel Kitchen’s food card?",
				Answer:"If you need to buy the pre-paid food card and fun card issued at Réel Kitchen on B2F, please contact the service staff of the card vending kiosks on B2F or call the customer service line +86 2122309788 for details. We’ll be wholeheartedly at your service."
			},{
				Question:"・Could the prepaid food card be universally used in the Department Store?",
				Answer:"The prepaid food card and fun card can only be used in the designated counters of Réel Kitchen on B2F. Take the public notice on the spot as reference to the applicable merchants."
			},{
				Question:"・Where can the invoice be made out?",
				Answer:"•Please go to the information counter on B1F for invoicing with cash register receipts for consumptions at B1F to 5F.<br />•Please go to the cashier of the merchant for invoicing with cash register receipts for consumption at restaurants on B2F and restaurant / catering establishments on other floors.<br />•Please go the card vending kiosk on B2F for invoicing with cash register receipts for consumption at snack stalls in Réel Kitchen on B2F."
			},{
				Question:"・How to manage the changing or refunding of goods?",
				Answer:"•If you have purchased the defective goods not damaged by the user, please bring the defective goods (including gifts), cash register receipt, and invoices (if any) within 7 days from the next day of consumption to the Department Store for changing or refunding. Our service staff will be wholeheartedly at your service. If the consumption was settled by credit card, please bring the shopping sale slip together with the credit cards to facilitate the procedure.<br />•For the refunding with credit card or debit card, it will arrive within 15 to 45 business days (the date varies from card to card), and cash refunding is not allowed. The refunding of consumption by credit card requires the credit cards, cash register receipt, invoice (if any), and the credit card sales slip (if any).<br />•The return of goods purchased in cash is refunded in cash. •If exchanged gift was presented with the purchase, then the gift must be returned, too.<br />•Cardholders are required to present tracking card / membership card when changing or returning goods, and the gift points and qualification points of the card will accordingly be adjusted."
			}]
		},{
			Title:"Park",
			Language: "En",
			QuestionList:[{
				Question:"・What’s the current charging standard of the parking lot?",
				Answer:"Within the first hour of parking, the fee will be charged by hour with the standard of RMB 15 per car per hour; starting from the second hour of parking, the fee will be charged by half an hour with the standard of RMB7.50 per car per thirty minute; the maximum charge for the same car continuously parking at the same parking space in the same day will be calculated by eight hours, that is RMB120.00 per day."
			},{
				Question:"・Parking Validation",
				Answer:"•Non-member: A one-hour free parking will be enjoyed by customers with consumptions accumulating to or over RMB 500 on the same day within Réel Shanghai Department Store (consumption at B2F Réel Kitchen should be excluded; please contact the information counter at B1F or VIP Room at 3F for the detailed information), 2-hour free parking for consumption accumulating to or over RMB 1,000, and 3-hour free parking for RMB 2,000. For each car, a maximum of 3-hour free parking could be enjoyed per time; once the parking validation period is exceeded, the parking fees should be collected with RMB15 per hour.<br />•Silver Card member: A one-hour free parking will be enjoyed by customers with consumptions accumulating to or over RMB 500 on the same day within Réel Shanghai Department Store (consumption at B2F Réel Kitchen should be excluded; please contact the information counter at B1F or VIP Room at 3F for the detailed information), 2-hour free parking for consumption accumulating to or over RMB 1,000, and 3-hour free parking for RMB 2,000. For each car, a maximum of 3-hour free parking could be enjoyed per time;once the parking validation period is exceeded, the parking fees should be collected with RMB15 per hour.<br />•Gold Card member: A 2-hour free parking will be enjoyed by holders of Gold Card. A one-hour free parking will be enjoyed by customers with consumptions accumulating to or over RMB 500 on the same day within Réel Shanghai Department Store (consumption at B2F Réel Kitchen should be excluded; please contact the information counter at B1F or VIP Room at 3F for the detailed information). For each car, a maximum of 4-hour free parking could be enjoyed per time (the 2-hour free parking exclusive to Gold Card holders is included); once the parking validation period is exceeded, the parking fees should be collected with RMB15 per hour."
			},{
				Question:"・How to credit the parking charge with consumption?",
				Answer:"Once the parking validation is met, please bring cash register receipts to the information counter on B1F to exchange parking coupon, and drive to the toll gate at B2F with parking card and the coupon for pricing before departure."
			},{
				Question:"・Opening hour of the underground parking",
				Answer:"The underground parking opens 24 hours per day."
			},{
				Question:"・How to contact the parking service staff?",
				Answer:"If you have any parking or vehicle problem in the parking lot, you can go to the toll booth at B2F to contact the parking service staff."
			}]
		}]);
	});
	mongo.database.collection("floor", function(err, collection){
		collection.insert([{
			Language: "Ch",
			Floor: "1F",
			Brands:[{
				Key: "101",
				Title: "101 GUCCI"
			},{
				Key: "102",
				Title: "102 GIVENCHY"
			},{
				Key: "103",
				Title: "103 SERGIO ROSSI"
			},{
				Key: "105",
				Title: "105 SAINT LAURENT"
			},{
				Key: "106",
				Title: "106 MONCLER"
			},{
				Key: "107",
				Title: "107 LANVIN"
			},{
				Key: "108",
				Title: "108 BALENCIAGA"
			},{
				Key: "109",
				Title: "109 RAT TAR ART BAR"
			},{
				Key: "110",
				Title: "110 ALEXANDER MCQUEEN"
			},{
				Key: "111",
				Title: "111 STELLA McCARTNEY"
			},{
				Key: "112",
				Title: "112 MARNI"
			},{
				Key: "113",
				Title: "113 PRINGLE（即将开业）"
			},{
				Key: "115",
				Title: "115 RALPH LAUREN"
			},{
				Key: "1B",
				Title: "1B FLOWER TREE"
			},{
				Key: "1C",
				Title: "1C CANDY LAB"
			},{
				Key: "1D",
				Title: "1D LA CREPERIE"
			},{
				Key: "1D-1",
				Title: "1D-1 URBAN SOUP KITCHEN"
			},{
				Key: "1E",
				Title: "1E URBAN SOUP KITCHEN"
			},{
				Key: "1H",
				Title: "1H LIND"
			},{
				Key: "1L",
				Title: "1L 星巴克（即将开业）"
			}]
		},{
			Language: "Ch",
			Floor: "2F",
			Brands:[{
				Key: "201",
				Title: "201 GUCCI"
			},{
				Key: "201-1",
				Title: "201-1 SARMENT"
			},{
				Key: "202",
				Title: "202 ANN DEMEULEMEESTER"
			},{
				Key: "205",
				Title: "205 MARNI MAN"
			},{
				Key: "206",
				Title: "206 MONCLER"
			},{
				Key: "207",
				Title: "207 LANVIN"
			},{
				Key: "208",
				Title: "208 ALEXANDER MCQUEEN MEN'S"
			},{
				Key: "209-1",
				Title: "209-1 Y-3"
			},{
				Key: "210-3",
				Title: "210-3 SHINE"
			},{
				Key: "210-5",
				Title: "210-5 YOHJI YAMAMOTO"
			},{
				Key: "211",
				Title: "211 ALEXANDER WANG"
			},{
				Key: "212",
				Title: "212 ACNE"
			},{
				Key: "213",
				Title: "213 TSE"
			},{
				Key: "215",
				Title: "215 ISABEL MARANT"
			},{
				Key: "216",
				Title: "216 RALPH LAUREN"
			},{
				Key: "218",
				Title: "218 HELMUT LANG"
			},{
				Key: "2A",
				Title: "2A 金牛苑"
			},{
				Key: "2B",
				Title: "2B 銀座梅林"
			},{
				Key: "2C",
				Title: "2C 十食湘"
			}]
		},{
			Language: "Ch",
			Floor: "3F",
			Brands:[{
				Key: "301.301-1",
				Title: "301.301-1 星巴克"
			},{
				Key: "301-2",
				Title: "301-2 JI CHENG"
			},{
				Key: "301-3",
				Title: "301-3 NIIN"
			},{
				Key: "302",
				Title: "302 UUJULY"
			},{
				Key: "303",
				Title: "303 GERARD DAREL"
			},{
				Key: "304",
				Title: "304 MAJE"
			},{
				Key: "306",
				Title: "306 THEORY"
			},{
				Key: "307",
				Title: "307 SANDRO"
			},{
				Key: "308",
				Title: "308 SANDRO"
			},{
				Key: "309",
				Title: "309 SYNC CHIC"
			},{
				Key: "310",
				Title: "310 JACOBEAN"
			},{
				Key: "311",
				Title: "311 黄淑琦"
			},{
				Key: "316",
				Title: "316 DEA KUDIBAL"
			},{
				Key: "318",
				Title: "318  ISTA STYLE"
			},{
				Key: "319",
				Title: "319 ZAPA"
			},{
				Key: "320",
				Title: "320 湾里书香"
			},{
				Key: "331",
				Title: "331 PASOTTI"
			},{
				Key: "332",
				Title: "332 STEFANEL（即将开业）"
			},{
				Key: "3A",
				Title: "3A 晶采轩"
			},{
				Key: "3B",
				Title: "3B 瓦城泰式料理"
			}]
		},{
			Language: "Ch",
			Floor: "4F",
			Brands:[{
				Key: "401",
				Title: "401 WISE KIDS"
			},{
				Key: "403",
				Title: "403 JUZI"
			},{
				Key: "404",
				Title: "404 JACADI"
			},{
				Key: "405",
				Title: "405 QKUTS"
			},{
				Key: "406",
				Title: "406 ABSORBA/PETER RABBIT"
			},{
				Key: "407",
				Title: "407 SERGENT MAJOR"
			},{
				Key: "411-2",
				Title: "411-2 STELLA MCCARTNEY"
			},{
				Key: "413-1",
				Title: "413-1 KEL KEL"
			},{
				Key: "420",
				Title: "420 MOONSTAR"
			},{
				Key: "421",
				Title: "421 YVONNE COLLECTION"
			},{
				Key: "433-1",
				Title: "433-1 SIMONE PERELE"
			},{
				Key: "4B",
				Title: "4B 晶采轩"
			}]
		},{
			Language: "Ch",
			Floor: "5F",
			Brands:[{
				Key: "501",
				Title: "501 極食"
			},{
				Key: "504.525",
				Title: "504.525 美品工房"
			},{
				Key: "505",
				Title: "505 MAINSTAGE"
			},{
				Key: "506",
				Title: "506 NESCAFE"
			},{
				Key: "508",
				Title: "508 RÉEL ART GALLERY"
			},{
				Key: "509",
				Title: "509 申活馆"
			},{
				Key: "510",
				Title: "510 SEESAW"
			},{
				Key: "511",
				Title: "511 艺安生活"
			},{
				Key: "512",
				Title: "512 汇美舍"
			},{
				Key: "513.514",
				Title: "513.514 阿吾罗"
			},{
				Key: "518.518-1",
				Title: "518.518-1 美品工房"
			},{
				Key: "523.524",
				Title: "523.524 IPLUSO"
			},{
				Key: "5f",
				Title: "5f （越洋） 大董"
			}]
		},{
			Language: "Ch",
			Floor: "B1",
			Brands:[{
				Key: "B101",
				Title: "b101 MUJI"
			},{
				Key: "B102",
				Title: "b102 BONNIE ROUGE"
			},{
				Key: "B103",
				Title: "b103 STEFANEL"
			},{
				Key: "B104",
				Title: "b104 PORTER"
			},{
				Key: "B106",
				Title: "b106 GIORDANO LADIES"
			},{
				Key: "B107",
				Title: "b107 M)PHOSIS"
			},{
				Key: "B108B109",
				Title: "b108.109 ROOTS"
			},{
				Key: "B120",
				Title: "b120 ESSIE"
			},{
				Key: "B121B122",
				Title: "b121.122 BLK"
			},{
				Key: "B123",
				Title: "b123 HARDY'S"
			},{
				Key: "B124",
				Title: "b124 LUJAH"
			},{
				Key: "B125",
				Title: "b125 BNJ"
			},{
				Key: "B134-1",
				Title: "b134-1 LOLLIPOPS"
			},{
				Key: "B134-2",
				Title: "b134-2 SUUNTO"
			},{
				Key: "B138",
				Title: "b138 MARTIN GRANT"
			},{
				Key: "B140",
				Title: "b140 TKF SPASSO"
			},{
				Key: "B151-1",
				Title: "b151-1 SHO-BI"
			},{
				Key: "B151-2",
				Title: "b151-2 CALIBIO"
			}]
		},{
			Language: "Ch",
			Floor: "B2",
			Brands:[{
				Key: "B201",
				Title: "b201 DAZZLING CAFÉ"
			},{
				Key: "B202",
				Title: "b202 犁记"
			},{
				Key: "B203",
				Title: "b203 赛百味"
			},{
				Key: "B204",
				Title: "b204 斗香园"
			},{
				Key: "B205",
				Title: "b205 饥饿吐司"
			},{
				Key: "B205A",
				Title: "b205a 宝馔"
			},{
				Key: "B206",
				Title: "b206 酷姆思"
			},{
				Key: "B207",
				Title: "b207 酷圣石"
			},{
				Key: "B208",
				Title: "b208 麦当劳"
			},{
				Key: "B209",
				Title: "b209 WAGAS EXPRESS"
			},{
				Key: "B210",
				Title: "b210 星巴克"
			},{
				Key: "B211B212",
				Title: "b211.212 满记甜品"
			},{
				Key: "B213",
				Title: "b213 葡京制造"
			},{
				Key: "B214",
				Title: "b214 釜山料理"
			},{
				Key: "B215B216",
				Title: "b215.216 七条日式猪排料理"
			},{
				Key: "B217",
				Title: "b217 战锅时代"
			},{
				Key: "B218",
				Title: "b218 阿扎家芝心年糕料理"
			},{
				Key: "B219",
				Title: "b219 锦官城麻辣香锅"
			},{
				Key: "B220",
				Title: "b220 吴记牛肉面"
			},{
				Key: "B221",
				Title: "b221 富春小笼"
			},{
				Key: "B222",
				Title: "b222 古镇汤团"
			},{
				Key: "B223",
				Title: "b223 台北猪脚饭"
			},{
				Key: "B224",
				Title: "b224 小杨生煎"
			},{
				Key: "B225",
				Title: "b225 多彩拌韩式料理"
			},{
				Key: "B226",
				Title: "b226 咏兰坊黄鱼煨面"
			},{
				Key: "B227",
				Title: "b227 台北东一排骨"
			},{
				Key: "B228",
				Title: "b228 秦韵西北菜"
			},{
				Key: "B229",
				Title: "b229 麻辣串串香"
			},{
				Key: "B230",
				Title: "b230 胖达人手感烘焙"
			},{
				Key: "B231",
				Title: "b231 早安巴黎"
			},{
				Key: "B231A",
				Title: "b231a GROSFAIRY"
			},{
				Key: "B232",
				Title: "b232 摩提工房"
			},{
				Key: "B233",
				Title: "b233 缘喜寿司"
			},{
				Key: "B234",
				Title: "b234 每日新鲜水果吧"
			},{
				Key: "B235",
				Title: "b235 贡茶"
			},{
				Key: "B237",
				Title: "b237 豆花开了"
			},{
				Key: "B238",
				Title: "b238 YOBA"
			},{
				Key: "B239",
				Title: "b239 美仕多甜甜圈"
			},{
				Key: "B240",
				Title: "b240 美珍香"
			},{
				Key: "B241",
				Title: "b241 继光香香鸡"
			},{
				Key: "B242",
				Title: "b242 瑞克爷爷"
			},{
				Key: "B242A",
				Title: "b242a 贝蕾魔法"
			},{
				Key: "B243",
				Title: "b243 摩提工房"
			},{
				Key: "B244",
				Title: "b244 宝珠奶酪"
			},{
				Key: "B244A",
				Title: "b244a 榴小莲"
			},{
				Key: "B245",
				Title: "b245 筑地银章鱼"
			},{
				Key: "B246A",
				Title: "b246a 丸龟制面"
			},{
				Key: "B246B",
				Title: "b246b 正豪大大鸡排"
			},{
				Key: "B246C",
				Title: "b246c 优之良品"
			}]
		}]);

		collection.insert([{
			Language: "En",
			Floor: "1F",
			Brands:[{
				Key: "101",
				Title: "101 GUCCI"
			},{
				Key: "102",
				Title: "102 GIVENCHY"
			},{
				Key: "103",
				Title: "103 SERGIO ROSSI"
			},{
				Key: "105",
				Title: "105 SAINT LAURENT"
			},{
				Key: "106",
				Title: "106 MONCLER"
			},{
				Key: "107",
				Title: "107 LANVIN"
			},{
				Key: "108",
				Title: "108 BALENCIAGA"
			},{
				Key: "109",
				Title: "109 RAT TAR ART BAR"
			},{
				Key: "110",
				Title: "110 ALEXANDER MCQUEEN"
			},{
				Key: "111",
				Title: "111 STELLA McCARTNEY"
			},{
				Key: "112",
				Title: "112 MARNI"
			},{
				Key: "113",
				Title: "113 PRINGLE (OPENING SOON)"
			},{
				Key: "115",
				Title: "115 RALPH LAUREN"
			},{
				Key: "1B",
				Title: "1B FLOWER TREE"
			},{
				Key: "1C",
				Title: "1C CANDY LAB"
			},{
				Key: "1D",
				Title: "1D LA CREPERIE"
			},{
				Key: "1D-1",
				Title: "1D-1 URBAN SOUP KITCHEN"
			},{
				Key: "1E",
				Title: "1E URBAN SOUP KITCHEN"
			},{
				Key: "1H",
				Title: "1H LIND"
			},{
				Key: "1L",
				Title: "1L STARBUCKS (OPENING SOON)"
			}]
		},{
			Language: "En",
			Floor: "2F",
			Brands:[{
				Key: "201",
				Title: "201 GUCCI"
			},{
				Key: "201-1",
				Title: "201-1 SARMENT"
			},{
				Key: "202",
				Title: "202 ANN DEMEULEMEESTER"
			},{
				Key: "205",
				Title: "205 MARNI MAN"
			},{
				Key: "206",
				Title: "206 MONCLER"
			},{
				Key: "207",
				Title: "207 LANVIN"
			},{
				Key: "208",
				Title: "208 ALEXANDER MCQUEEN MEN'S"
			},{
				Key: "209-1",
				Title: "209-1 Y-3"
			},{
				Key: "210-3",
				Title: "210-3 SHINE"
			},{
				Key: "210-5",
				Title: "210-5 YOHJI YAMAMOTO"
			},{
				Key: "211",
				Title: "211 ALEXANDER WANG"
			},{
				Key: "212",
				Title: "212 ACNE"
			},{
				Key: "213",
				Title: "213 TSE"
			},{
				Key: "215",
				Title: "215 ISABEL MARANT"
			},{
				Key: "216",
				Title: "216 RALPH LAUREN"
			},{
				Key: "218",
				Title: "218 HELMUT LANG"
			},{
				Key: "2A",
				Title: "2A GOLDEN BULL"
			},{
				Key: "2B",
				Title: "2B GINZA BAIRIN"
			},{
				Key: "2C",
				Title: "2C #"
			}]
		},{
			Language: "En",
			Floor: "3F",
			Brands:[{
				Key: "301.301-1",
				Title: "301.301-1 STARBUCKS"
			},{
				Key: "301-2",
				Title: "301-2 JI CHENG"
			},{
				Key: "301-3",
				Title: "301-3 NIIN"
			},{
				Key: "302",
				Title: "302 UUJULY"
			},{
				Key: "303",
				Title: "303 GERARD DAREL"
			},{
				Key: "304",
				Title: "304 MAJE"
			},{
				Key: "306",
				Title: "306 THEORY"
			},{
				Key: "307",
				Title: "307 SANDRO"
			},{
				Key: "308",
				Title: "308 SANDRO"
			},{
				Key: "309",
				Title: "309 SYNC CHIC"
			},{
				Key: "310",
				Title: "310 JACOBEAN"
			},{
				Key: "311",
				Title: "311 黄淑琦"
			},{
				Key: "316",
				Title: "316 DEA KUDIBAL"
			},{
				Key: "318",
				Title: "318  ISTA STYLE"
			},{
				Key: "319",
				Title: "319 ZAPA"
			},{
				Key: "320",
				Title: "320 #"
			},{
				Key: "331",
				Title: "331 PASOTTI"
			},{
				Key: "332",
				Title: "332 STEFANEL (OPENING SOON)"
			},{
				Key: "3A",
				Title: "3A EXQUISITE BOCUSE CHINESE CUISINE"
			},{
				Key: "3B",
				Title: "3B THAI TOWN CUISINE"
			}]
		},{
			Language: "En",
			Floor: "4F",
			Brands:[{
				Key: "401",
				Title: "401 WISE KIDS"
			},{
				Key: "403",
				Title: "403 JUZI"
			},{
				Key: "404",
				Title: "404 JACADI"
			},{
				Key: "405",
				Title: "405 QKUTS"
			},{
				Key: "406",
				Title: "406 ABSORBA/PETER RABBIT"
			},{
				Key: "407",
				Title: "407 SERGENT MAJOR"
			},{
				Key: "411-2",
				Title: "411-2 STELLA MCCARTNEY"
			},{
				Key: "413-1",
				Title: "413-1 KEL KEL"
			},{
				Key: "420",
				Title: "420 MOONSTAR"
			},{
				Key: "421",
				Title: "421 YVONNE COLLECTION"
			},{
				Key: "433-1",
				Title: "433-1 SIMONE PERELE"
			},{
				Key: "4B",
				Title: "4B EXQUISITE BOCUSE CHINESE CUISINE"
			}]
		},{
			Language: "En",
			Floor: "5F",
			Brands:[{
				Key: "501",
				Title: "501 THE URBAN HARVEST"
			},{
				Key: "504.525",
				Title: "504.525 美品工房"
			},{
				Key: "505",
				Title: "505 MAINSTAGE"
			},{
				Key: "506",
				Title: "506 NESCAFE"
			},{
				Key: "508",
				Title: "508 RÉEL ART GALLERY"
			},{
				Key: "509",
				Title: "509 申活馆"
			},{
				Key: "510",
				Title: "510 SEESAW"
			},{
				Key: "511",
				Title: "511 艺安生活"
			},{
				Key: "512",
				Title: "512 汇美舍"
			},{
				Key: "513.514",
				Title: "513.514 阿吾罗"
			},{
				Key: "518.518-1",
				Title: "518.518-1 美品工房"
			},{
				Key: "523.524",
				Title: "523.524 IPLUSO"
			},{
				Key: "5f",
				Title: "5f DA DONG"
			}]
		},{
			Language: "En",
			Floor: "B1",
			Brands:[{
				Key: "B101",
				Title: "b101 MUJI"
			},{
				Key: "B102",
				Title: "b102 BONNIE ROUGE"
			},{
				Key: "B103",
				Title: "b103 STEFANEL"
			},{
				Key: "B104",
				Title: "b104 PORTER"
			},{
				Key: "B106",
				Title: "b106 GIORDANO LADIES"
			},{
				Key: "B107",
				Title: "b107 M)PHOSIS"
			},{
				Key: "B108B109",
				Title: "b108.109 ROOTS"
			},{
				Key: "B120",
				Title: "b120 ESSIE"
			},{
				Key: "B121B122",
				Title: "b121.122 BLK"
			},{
				Key: "B123",
				Title: "b123 HARDY'S"
			},{
				Key: "B124",
				Title: "b124 LUJAH"
			},{
				Key: "B125",
				Title: "b125 BNJ"
			},{
				Key: "B134-1",
				Title: "b134-1 LOLLIPOPS"
			},{
				Key: "B134-2",
				Title: "b134-2 SUUNTO"
			},{
				Key: "B138",
				Title: "b138 MARTIN GRANT"
			},{
				Key: "B140",
				Title: "b140 TKF SPASSO"
			},{
				Key: "B151-1",
				Title: "b151-1 SHO-BI"
			},{
				Key: "B151-2",
				Title: "b151-2 CALIBIO"
			}]
		},{
			Language: "En",
			Floor: "B2",
			Brands:[{
				Key: "B201",
				Title: "b201 DAZZLING CAFÉ"
			},{
				Key: "B202",
				Title: "b202 LEECHI"
			},{
				Key: "B203",
				Title: "b203 SUBWAY"
			},{
				Key: "B204",
				Title: "b204 JADE CUISINE"
			},{
				Key: "B205",
				Title: "b205 HUNGRY TOAST"
			},{
				Key: "B205A",
				Title: "b205a BAO ZHUAN"
			},{
				Key: "B206",
				Title: "b206 CRUMBS"
			},{
				Key: "B207",
				Title: "b207 COLDSTONE"
			},{
				Key: "B208",
				Title: "b208 MCDONALD'S"
			},{
				Key: "B209",
				Title: "b209 WAGAS EXPRESS"
			},{
				Key: "B210",
				Title: "b210 STARBUCKS"
			},{
				Key: "B211B212",
				Title: "b211.212 HONEYMOON DESSERT"
			},{
				Key: "B213",
				Title: "b213 LISBOA"
			},{
				Key: "B214",
				Title: "b214 PANKOO"
			},{
				Key: "B215B216",
				Title: "b215.216 TONKATSU QITIAO"
			},{
				Key: "B217",
				Title: "b217 WARRING POT AGE"
			},{
				Key: "B218",
				Title: "b218 #"
			},{
				Key: "B219",
				Title: "b219 JINGUAN CITY SPICY CARNIVAL"
			},{
				Key: "B220",
				Title: "b220 BEEF NOODLE BY WU"
			},{
				Key: "B221",
				Title: "b221 FUCHUN XIAOLONGBAO"
			},{
				Key: "B222",
				Title: "b222 ANCIENT TOWN DUMPLING"
			},{
				Key: "B223",
				Title: "b223 #"
			},{
				Key: "B224",
				Title: "b224 YANG'S FRIED DUMPLING"
			},{
				Key: "B225",
				Title: "b225 HANLIM KOREAN BIBIMBAP"
			},{
				Key: "B226",
				Title: "b226 #"
			},{
				Key: "B227",
				Title: "b227 TAIPEI DONGYI RIBS"
			},{
				Key: "B228",
				Title: "b228 QINGYUN NORTHWEST CUISINE"
			},{
				Key: "B229",
				Title: "b229 #"
			},{
				Key: "B230",
				Title: "b230 TOP POT BAKER"
			},{
				Key: "B231",
				Title: "b231 BON MATÍN PARÍS"
			},{
				Key: "B231A",
				Title: "b231a GROSFAIRY"
			},{
				Key: "B232",
				Title: "b232 #"
			},{
				Key: "B233",
				Title: "b233 SUSHI TAKE-OUT"
			},{
				Key: "B234",
				Title: "b234 FRESH EVERYDAY"
			},{
				Key: "B235",
				Title: "b235 GONG CHA"
			},{
				Key: "B237",
				Title: "b237 MEET FRESH"
			},{
				Key: "B238",
				Title: "b238 YOBA"
			},{
				Key: "B239",
				Title: "b239 MISTER DONUT"
			},{
				Key: "B240",
				Title: "b240 BEE CHENG HIANG"
			},{
				Key: "B241",
				Title: "b241 JGSSG"
			},{
				Key: "B242",
				Title: "b242 #"
			},{
				Key: "B242A",
				Title: "b242a #"
			},{
				Key: "B243",
				Title: "b243 CHEZ CHOUX"
			},{
				Key: "B244",
				Title: "b244 BOJOO DESSERT"
			},{
				Key: "B244A",
				Title: "b244a MISS DURAIN"
			},{
				Key: "B245",
				Title: "b245 GINDACO"
			},{
				Key: "B246A",
				Title: "b246a TAO-XIAN HOUSE"
			},{
				Key: "B246B",
				Title: "b246b YU GUI REN"
			},{
				Key: "B246C",
				Title: "b246c #"
			}]
		}]);
	});
	mongo.database.collection("brand", function(err, collection){
		collection.insert([{
			Key: "acne",
			Title: "ACNE",
			Description_Ch: "2013年3月2日，AcneStudios在巴黎发布了2013秋冬女装成衣系列。这个系列是Acne Studios与艺术家Katerina Jebb以及巴黎Galliera流行服饰博物馆共同合作的成果。我们力求化无形于有形，让服装实穿性更高。我们试图从不同的角度去探索时尚，重新诠释它，并让历史重现。",
			Description_En: "stockholm, march 2, 2013 — ‘Acne Studios Autumn/Winter 2013 Women’s collection is a collaboration between artist Katerina Jebb, the Musée Galliera– Musée de la Mode de la Ville de Paris and Acne Studios. For this collection we sought to make the invisible visible and the unwearable wearable. We wanted to explore fashion from a different angle, decontextualize it and make history visible.",
			Phone: "02132539526",
			BusinessHours: "10:00AM-22:00PM",
			Url: "acnestudios.com",
			Filter: ["Women", "Man"],
			Floor: "2F"
		},{
			Key: "aimer",
			Title: "Aimer",
			Description_Ch: "Aimer 爱慕，诞生于1993年中国北京。20年来，她秉承“爱”与“美”的品牌理念，融科技于时尚，追求融合东西方文化的美学设计，为都市女性提供精致、时尚、优雅的产品和体验，展现万千姿彩的女性魅力，帮助女性做最好的自己、最美的自己。今天的爱慕是中国原创内衣品牌的领导者，是中国女性喜爱的首选内衣品牌。",
			Description_En: "Founded in 1993, Aimer is one of the leading lingerie brands in China and as well a fashion kingdom which is dedicated to supplying high quality lingerie products for women, men, youth, kids. Led by a world-class creative design team, Aimer believes in creating beauty and quality lingerie products. The Group consist- ently focuses on innovation and creativity in its designs, which often features an elegant fusion of oriental and western design elements.",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "aimer.com.cn",
			Filter: ["Underwear"],
			Floor: ""
		},{
			Key: "alainmikli",
			Title: "Alain Mikli",
			Description_Ch: "Alain Mikli（艾伦 米恺力），来自法国的国际著名设计品牌，坚持着其独特风格与产品品质，贯彻了<看与被看>的艺术。融合美学与科技，设计出别具一格的镜框，让<看>的障碍转化成独特的个人风格，是Alain Mikli一貫的理念。",
			Description_En: "Alain Mikli, the uncompromising reference brand in terms of style and quality, «frames to see as well as to be seen» One single purpose: to provide style to a constraint and transform a handicap into a sign of personality. Beautiful and technical the Alain Mikli frames have as only signature: correction & distinction.",
			Phone: "02132568928",
			BusinessHours: "10:00AM-22:00PM",
			Url: "mikli.com",
			Filter: ["Accessory"],
			Floor: ""
		},{
			Key: "alexandermcqueen",
			Title: "Alexander McQueen",
			Description_Ch: "亚历山大·麦昆(AlexanderMcQueen)品牌成立于1992年，其创始人李·麦昆(LeeMcQueen)在不超过 10年的时间里便成为了全球最受尊敬的时装设计师之一。亚历山大·麦昆时装秀以强大的感染力，蓬勃的活力以及浪漫而时尚的气息闻名于世。柔弱与坚强，传统与现代，流畅与拘谨等截然相反的元素并行不悖，成为麦昆品牌文化中一个不可或缺的标记。麦昆以极富张力及狂热的手法向艺术和手工传统致敬。",
			Description_En: "亚历山大·麦昆(AlexanderMcQueen)品牌成立于1992年，其创始人李·麦昆(LeeMcQueen)在不超过 10年的时间里便成为了全球最受尊敬的时装设计师之一。亚历山大·麦昆时装秀以强大的感染力，蓬勃的活力以及浪漫而时尚的气息闻名于世。柔弱与坚强，传统与现代，流畅与拘谨等截然相反的元素并行不悖，成为麦昆品牌文化中一个不可或缺的标记。麦昆以极富张力及狂热的手法向艺术和手工传统致敬。",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "alexandermcqueen.com",
			Filter: ["Women"],
			Floor: "1F"
		},{
			Key: "alexanderwang",
			Title: "Alexander Wang",
			Description_Ch: "亚历山大·王生长在旧金山，2007年，他推出了全套女装系列。如今，亚历山大·王已有遍布全球的15家店铺。并且有了自己的电子商务网站。旗下包括男装，女装，子品牌T by Alexander Wang，手袋，鞋类，皮革制品以及各种其他生活用品。品牌的本质情感在于自由与不羁。精工细致与不完全的完美之间让人充满好奇又意犹未尽。",
			Description_En: "Alexander Wang was born and raised in San Francisco, In Spring 2007, it had evolved into a full Women’s ready-to-wear line. Today, Alexander Wang has over 15 stores worldwide, including its own E-Commerce site. Men’s and Women’s categories offer ready-to-wear, T by Alexander Wang, handbags, footwear, small leather goods and the OBJECTS collection, a curation of personal lifestyle items.",
			Phone: "02122309838",
			BusinessHours: "10:00AM-22:00PM",
			Url: "alexanderwang.com",
			Filter: ["Women"],
			Floor: "2F"
		},{
			Key: "balabala",
			Title: "Balabala",
			Description_Ch: "Balabala童装品牌创立于2002年，是中国领先具有国际视野的时尚大众童装品牌。Balabala致力于为孩子们提供时尚又实用的儿童服饰产品，主张“童年不同样”的品牌理念。产品覆盖0-16岁儿童的服装、童鞋、配饰等。Balabala注重消费者购物体验，一站式的零售空间提供多样的专业时尚产品，持续创造选择丰富、物超所值的消费价值。",
			Description_En: "Established in 2002.Balabala is in the lead of international view of mass fashion in children clothing brand in China.Balabala which advo- cates “Same age special childhood” brand conception is committed to supply fashion and practical clothing for children from zero to sixteen .Its product covers clothing 、shoes and accessories etc.",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "balabala.com.cn",
			Filter: ["Kids"],
			Floor: ""
		},{
			Key: "balenciaga",
			Title: "Balenciaga",
			Description_Ch: "Balenciaga于1919年由克里斯托瓦尔.巴朗斯加(Cristobal Balenciaga)成立，是时尚界最有影响力的品牌之一。至今，品牌具代表性的成衣系列体现了品牌的精神，而皮具、鞋和饰品也取得了全球性的成绩。2012年底，Balenciaga 和开云集团荣幸宣布Alexander Wang 为Balenciaga的创意总监",
			Description_En: "The Balenciaga fashion house is one of the most influential names in fashion. Founded in 1919 by Cristobal Balenciaga While the brand’s identity is firmly rooted in its highly symbolic prêt-à-porter collections, items of leather, footwear and accessories are also experiencing success worldwide. In 2012, Balenciaga and KERING group have jointly announced the employment of Alexander Wang as their new Creative Director.",
			Phone: "02122309811",
			BusinessHours: "10:00AM-22:00PM",
			Url: "balenciaga.com",
			Filter: ["Women", "Man"],
			Floor: "1F"
		},{
			Key: "ballonrouge",
			Title: "Ballon rouge",
			Description_Ch: "作为一种新奢主义，Ballon Rouge的热情血液为童装时尚界注入了一股新鲜力量。每一件制作精良的作品均限量出自于品牌自身的工作室。这里是一个梦工厂，是法式摇滚风情奇妙绽放的嘉年华。Rock’Mantic是我们的品牌风格，这种优雅的法式摇滚风情源于一个热爱生活、充满想象力的摩登小孩，以让我们将设计融于风格与舒适之中。",
			Description_En: "Ballon Rouge is born out of a passion to create a new luxury. Since the beginning, we’ve crafted a kid’s fashion brand ahead of its time. All our pieces are made in our workshop in limited quantities and exclusively distributed. Ballon Rouge is dream factory where color, playful- ness, music & youth culture come together in an elegant French Rock attitude.",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "balabala.com.cn",
			Filter: ["Kids"],
			Floor: ""
		},{
			Key: "chasneybeauty",
			Title: "CHASNEY BEAUTY",
			Description_Ch: "澳大利亚知名内衣品牌 — Chasney Beauty起源于1988年。由英籍内衣设计师Marilyn Chasney创立，是第壹家以设计师命名的内衣品牌；Chasney Beauty的産品基调源于欧洲中古时代的优雅宫廷式，全部采用利巴蕾丝（Leavers Lace），勾画出欧式文艺复兴期的内衣盛宴。目前在日本东京银座丶涉谷百货等两百多家商场；台湾丶香港SOGO系统及新光系统均有专柜。",
			Description_En: "Chasney Beauty, an Australian haute-lingerie, created since 1998 by Marilyn Chasney, an English designer. It is a designer signature brand of which products are inspired from European “Bucolic Boudoir” ambience of the 18th century, and made of specially chosen Leavers Lace, the top grade quality material, outlining the quintessence of Renaissance to the sublime.",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "bubblelondon.com",
			Filter: ["Underwear"],
			Floor: ""
		},{
			Key: "clinique",
			Title: "Clinique",
			Description_Ch: "Clinique倩碧是全球最大高档化妆品集团雅诗兰黛集团旗下，适合所有年龄、肤色、肤质、性别人群的，最值得信赖的肌肤护理专家。倩碧成立于1968年，是第一个将皮肤学专业产品推广给广大消费者的护肤品牌，从诞生至今，始终坚持所有产品由皮肤学专家研制，通过过敏性测试，100%不含香料。",
			Description_En: "Clinique is one of the world’s most recognized and unique brands. Clinique was launched in 1968, born in a dermatologist’s office, with skin care and makeup products that were allergy tested and 100% fragrance free. Clinique products have always been designed to address individual skin types and needs. The products are based on extensive scientific research and the expertise of leading dermatologists.",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "clinique.com.cn",
			Filter: ["Beauty"],
			Floor: ""
		},{
			Key: "corsetc",
			Title: "Corsetc",
			Description_Ch: "CORSETC(蔻夏尔)，主张女人应该是知性、智慧、内心自由。拥有CORSETC(蔻夏尔)内衣的女性，知性而有品位，智慧而低调；她们从容，是有幸福能力的女人。她们经历了时间的冲洗，世事的打磨之后仍然透着光芒。只是这光芒更内敛更含蓄，这种光芒所蕴含的美丽更具力量，可以被颂读。",
			Description_En: "CORSETC claims that women are intellectual, wise and independently free. Women who consume CORSETC lingerie are of same characteristics; they are leisurable but with the power to create happiness. They are still shining going througb the wave of time and difficulties. But the is more implicit, more stronger.",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "",
			Filter: ["Underwear"],
			Floor: ""
		},{
			Key: "dhc",
			Title: "DHC",
			Description_Ch: "日本DHC株式会社自1972年由现任吉田嘉明总裁一人创立至今，经过约40年的不懈努力，已发展成为集团性企业，成为日本大型的翻译出版教育公司、连续10多年独占日本国内化妆品、健康食品通信销售第1名，护肤型化妆品品牌的市场占有率九年排名第1名。公司还经营食品、内衣与时装、温泉酒店、药品、海洋深层水等事业，日本国内年营业额黄超过80亿元。",
			Description_En: "DHC China Incorporated is the chinese subsidiary of DHC Corporation, Japan’s No. 1 direct skincare company. We are a leading direct-to-consumer provider of beauty prod- ucts, including skincare and body care, as well as makeup items. The vision behind DHC is rooted in the beneficial properties of virgin olive oil.",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "dhc.net.cn",
			Filter: ["Beauty"],
			Floor: ""
		},{
			Key: "emiliopucci",
			Title: "Emilio Pucci",
			Description_Ch: "创始人Emilio Pucci先生，于1914年出生在意大利的佛罗伦萨的一个贵族世家,拥有Barsento侯爵爵位。他曾是意大利奥林匹克滑雪队的成员之一，个性大胆勇于挑战，在二战时期服役于空军。Emilio Pucci在美国西雅图读大学时，对于市面上售卖的滑雪服装不满意，因此他为自己与身旁好友操刀设计独一无二的滑雪服。",
			Description_En: "The Emilio Pucci brand was created in 1947 by the Marquis Emilio Pucci of Barsento, a dashing Florentine aristocrat. His fashion career began unexpectedly when a revolutionary ski outfit he’d designed for himself and his friends was photographed on the slopes of Zermatt by fashion photographer Toni Frissel and wound up on the pages of Harper’s Bazaar USA.",
			Phone: "02152929808",
			BusinessHours: "10:00AM-22:00PM",
			Url: "emiliopucci.com",
			Filter: ["Women"],
			Floor: ""
		},{
			Key: "enweis",
			Title: "ENWEIS",
			Description_Ch: "伊维斯是一个专为外表精雕细琢的都市女性而准备的内衣品牌，让她们拥有一种完美和永恒的雅致。伊维斯以“优雅”、“精致”、“国际化”为品牌关键价值。通过专业高端的工艺研发、顶尖的创意设计，为女性创造出精致细腻、永恒经典的内衣产品，并提供无微不至、细心呵护的服务。",
			Description_En: "伊维斯是一个专为外表精雕细琢的都市女性而准备的内衣品牌，让她们拥有一种完美和永恒的雅致。伊维斯以“优雅”、“精致”、“国际化”为品牌关键价值。通过专业高端的工艺研发、顶尖的创意设计，为女性创造出精致细腻、永恒经典的内衣产品，并提供无微不至、细心呵护的服务。",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "",
			Filter: ["Underwear"],
			Floor: ""
		},{
			Key: "essie",
			Title: "ESSIE",
			Description_Ch: "艾茜美甲沙龙是上海大型美甲连锁机构艾手艾脚甲文化旗下高端品牌。 艾茜美甲沙龙为你提供奢华的美甲服务及手足护理。我们选用世界顶级的产品如来自纽约的Debora Lippmann和比弗利山庄的Spa Ritual 为您带来至尊的全新体验。我们的员工都为经验丰富，技术精湛的资深美甲技师，以确保您每一次都能体验到最高质量的服务。我们期待您的光临。",
			Description_En: "Essie Nail is the premium branch store of the biggest nail salon chain brand in Shanghai- AiShouAiJiao. We provide superior nail service and spa for hands and feet using the most exclusive high quality products like Debora Lippmann and Spa Ritual from Beverly Hills.",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "essie.com",
			Filter: ["Beauty"],
			Floor: "B1"
		},{
			Key: "fancl",
			Title: "Fancl",
			Description_Ch: "FANCL是极具规模的护肤品及营养补充品品牌，已设立了近400家分店，遍布世界各地，现为东京证券交易主版上市公司。成立于1980年的FANCL，拥有当今世界的尖端科研和生产技术，首创不含防腐剂等化学成分的美容品及营养补充品，杜绝一般含防腐剂的护肤品所引起的皮肤问题，稳占全球美容及营养补充品领导地位。主张结合内在调理的“内外美容”理念，力求为人们“赶走不安”，成就源自健康的美丽。",
			Description_En: "FANCL是极具规模的护肤品及营养补充品品牌，已设立了近400家分店，遍布世界各地，现为东京证券交易主版上市公司。成立于1980年的FANCL，拥有当今世界的尖端科研和生产技术，首创不含防腐剂等化学成分的美容品及营养补充品，杜绝一般含防腐剂的护肤品所引起的皮肤问题，稳占全球美容及营养补充品领导地位。主张结合内在调理的“内外美容”理念，力求为人们“赶走不安”，成就源自健康的美丽。",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "fancl.com.cn",
			Filter: ["Beauty"],
			Floor: ""
		},{
			Key: "fionasprince",
			Title: "FIONA’S PRINCE",
			Description_Ch: "FIONA’S PRINCE是一个充满英伦气息的童鞋品牌，集合了英国文学童话故事的优雅气质，与伦敦时装的风格，与别不同。以啡色系为主，配合蜜糖金的色调，令品牌高贵却不失童话的美丽，所有小孩子步入FIONA’S PRINCE，就像置身一个缤纷的童鞋皇国。FIONA’S PRINCE整个品牌从产品到礼品包装细节到店铺形象,都是一个呈现出的童话风格的品牌。",
			Description_En: "Founded in Hong Kong, Fiona’s Prince is a luxury British style children’s shoes brand that presents the concept of fairy tales kingdom from the designs of products to décor of the stores. This concept, a magical wonderland, is presented in every aspect of the brand, that Fiona’s Prince is a luxury children’s wear brand that captures the sweetness of childhood.",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "bubblelondon.com",
			Filter: ["Kids"],
			Floor: ""
		},{
			Key: "gerarddarel",
			Title: "Gerard Darel",
			Description: "在法国时装界享有盛誉的GERARD DAREL，自1971年成立以来，店铺遍布于巴黎春天、老佛爷、BON MARCHE等知名百货公司。GERARD DAREL所崇尚的穿衣哲学将完美地融合了女性的优雅知性与温柔贤淑。GERARD DAREL提供从服装单品到鞋袋配饰等一系列精心设计，既易于搭配又极富个性，塑造了一群在使用价值中追求自我价值与独特个性的现代女性。",
			Description_En: "GERARD DAREL is a prestigious brand of French fashion industry, since it incepted in 1971, the outlets throughout famous department stores. It’s spirits are feminine elegance and gentle, GERARD DAREL provides products from clothing to series of well-designed accessories , creates a group unique personality modern women in pursuit of self-worth.",
			Phone: "02132535368",
			BusinessHours: "10:00AM-22:00PM",
			Url: "gerarddarel.com",
			Filter: ["Women"],
			Floor: "3F"
		},{
			Key: "givenchy",
			Title: "Givenchy",
			Description_Ch: "纪梵希品牌由Hubert de Givenchy于1952年创立。Givenchy的名字随即成为了优雅风格的象征。自2008年以来，Riccardo Tisci同时负责起纪梵希男女装成衣和配饰的设计。他的高级时装设计中不仅有着货真价实的奢华和不可或缺的活力元素，还充满着都市气息。",
			Description_En: "The House of Givenchy was founded by Hubert de Givenchy in 1952. The name came to epitomise stylish elegance. Since 2008, Riccardo Tisci has been responsible for both men’s collection (ready-to-wear and accessories) and women’s collections (Haute Couture, readyto- wear and accessories).While genuine luxury and exclusivity remain vital ingredients of Riccardo’s Haute Couture collections, they are also shot through with urban culture.",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "givenchy.com",
			Filter: ["Women", "Man"],
			Floor: "1F"
		},{
			Key: "gucci",
			Title: "Gucci",
			Description_Ch: "以奢华、性感而闻名于世的古驰(Gucci) 是意大利殿堂级时尚品牌, 总部位于佛罗伦萨，成立于1921年。其时髦高级男女时装、香水、手袋皮具、鞋履、手表、等以优质的面料和精细的手工艺成为“身份与地位之象征”，亦是上流社会和富有阶层的挚爱品牌",
			Description_En: "Founded in Florence in 1921, Gucci is one of the world's leading luxury fashion brands. With a renowned reputation for quality and Italian craftsmanship, Gucci designs, manufactures and distributes highly desirable products such as leather goods (handbags, small leather goods, and luggage), shoes, ready-to-wear, silks, timepieces and fine jewellery, are popular in upper & wealthy class.",
			Phone: "02122309808",
			BusinessHours: "10:00AM-22:00PM",
			Url: "gucci.com",
			Filter: ["Women", "Man"],
			Floor: "1F"
		},{
			Key: "huangshuchi",
			Title: "HUANG SHU CHI 黄淑琦",
			Description_Ch: "台湾设计师黄淑琦是亚洲时装界着名的服装设计师之一。其设计作品除被广大消费者与时尚名媛所喜爱，并数次受邀于多国时尚周展出，2004年更荣获亚洲杰出设计师代表。品牌设计观点揉合东西方流行趋势，设计风格强烈独特却又不失优雅大方。擅长以华丽手法刻画都会女人性感样貌与自我风格。多年的时尚界历练，对于女性体态及线条变化有着独到的见解与执着，作品着重素材变化与版型多样，完美的设计能力与精湛的时尚工艺完美的塑造及呈现女性的高雅身形。",
			Description_En: "Taiwan designer Huang Shu Chi is one of the leading designers in Asia. Her works are appreciated by not only general consumers but also celebrities. Additionally, she was invited to participate international fashion week several times and was rewarded Asia Outstanding Designer in 2004. 「Creates everlasting fashion 」is what the designer and her team yearning for. Look forward to your connoisseur and experience.",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "huangshuchi.com",
			Filter: ["Women"],
			Floor: "3F"
		},{
			Key: "ilsee",
			Title: "ILSEE",
			Description_Ch: "法式奢华珠宝内衣伊夏ILSEE珠宝内衣，把女人最宠爱的两样私密，珠宝及贴身内衣，完美的融合到了一起!使用国际名品牌Dior、GUCCI、PRADA同家等级面料采用欧洲皇家御用百年作坊传统面料，每一件内衣高于是乎60%的纯手工打造，每一颗珠宝均以法式工艺精致烫贴，内衣与施华洛世奇水晶璀璨结合，面料与蕾丝繁复衔接一针不漏，限量珍藏，每套产量少于300件，花边对称精致，制衣成功率仅50%",
			Description_En: "法式奢华珠宝内衣伊夏ILSEE珠宝内衣，把女人最宠爱的两样私密，珠宝及贴身内衣，完美的融合到了一起!使用国际名品牌Dior、GUCCI、PRADA同家等级面料采用欧洲皇家御用百年作坊传统面料，每一件内衣高于是乎60%的纯手工打造，每一颗珠宝均以法式工艺精致烫贴，内衣与施华洛世奇水晶璀璨结合，面料与蕾丝繁复衔接一针不漏，限量珍藏，每套产量少于300件，花边对称精致，制衣成功率仅50%",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "ordifen.com.cn",
			Filter: ["Underwear"],
			Floor: ""
		},{
			Key: "ipluso",
			Title: "ipluso",
			Description_Ch: "",
			Description_En: "",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "",
			Filter: ["Living"],
			Floor: "5F"
		},{
			Key: "jacadi",
			Title: "JACADI",
			Description_Ch: "JACADI1976年创建于法国巴黎。在童装时尚中独领风骚，并成为法国儿童时装在世界分布最广的品牌。法国亚卡迪于1999年5月进入中国，与全球同步销售应季的服装，服饰，鞋及儿童用品。每年两季，每季三十个系列，500种款式的服装，款款尽显欧洲高贵典雅风格。与此同时，全面考虑儿童，特别是0-12岁儿童身体发育和活动特点，采用高档棉麻面料，舒适自然。",
			Description_En: "Jacadi’s beginnings are in the passion for childhood. It’s a joy we have been sharing with over four hundred Franchisee partners in more than forty two countries for the past twenty years. We are a childrenswear retail company whose collections include clothing, shoes, accessories, furniture and nursery items in newborn thru size 12 years for both boys and girls.",
			Phone: "02132568922",
			BusinessHours: "10:00AM-22:00PM",
			Url: "jacadi.com",
			Filter: ["Kids"],
			Floor: ""
		},{
			Key: "jurlique",
			Title: "Jurlique",
			Description_Ch: "活机美颜先驱Jurlique茱莉蔻，在澳大利亚活机农场运用活机耕种法种植天然草本花卉，并将它们糅合尖端科艺萃取植物能量制作出高效卓越的护肤品，引领自然+科艺=美丽的护肤美颜风潮，为消费者带去健康美丽的肌肤。",
			Description_En: "Jurlique has been the leader in natural skin care for over 28 years. We apply advanced technologies to biodynamic ingredients from our Australian farm to create high perfor- mance, potent skin care. The result: healthy, beautiful skin.",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "jurlique.com.cn",
			Filter: ["Beauty"],
			Floor: "4F"
		},{
			Key: "kiehls",
			Title: "Kiehl\'s",
			Description_Ch: "Kiehl’s科颜氏是1851年诞生于美国纽约的天然高效护肤品牌。160多年来始终秉承药房传统，以制药理念生产专业高效的护肤和护发产品。科颜氏坚持“功效至上，天然为佳”“个性化服务，先试后买”，“回馈社会，投身公益”的理念和宗旨，将最好的服务带给每位客人。当你在任何时候踏进科颜氏的任一家门店，你都能体验到专业的咨询服务，放心地选择到完全适用于自己肤质和发质的产品。",
			Description_En: "Kiehl’s科颜氏是1851年诞生于美国纽约的天然高效护肤品牌。160多年来始终秉承药房传统，以制药理念生产专业高效的护肤和护发产品。科颜氏坚持“功效至上，天然为佳”“个性化服务，先试后买”，“回馈社会，投身公益”的理念和宗旨，将最好的服务带给每位客人。当你在任何时候踏进科颜氏的任一家门店，你都能体验到专业的咨询服务，放心地选择到完全适用于自己肤质和发质的产品。",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "kiehls.com.cn",
			Filter: ["Beauty"],
			Floor: ""
		},{
			Key: "kuansliving",
			Title: "Kuan\'s Living 宽庭",
			Description_Ch: "",
			Description_En: "",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "",
			Filter: ["Living"],
			Floor: ""
		},{
			Key: "loccitane",
			Title: "L\'Occitane",
			Description_Ch: "1976年，品牌创办人Olivier Baussan将提炼的迷迭香精油拿到文化市集贩卖，L’OCCITANE欧舒丹便从普罗旺斯诞生了。30多年来，欧舒丹持续研发天然的产品，选择与严谨质量标准的供应商合作，每个产品系列背后都有真实的故事。",
			Description_En: "In 1976, when Olivier Baussan the brand founder brought his refined rosemary essential oil to sell in the market, L'OCCITANE was born. For over 30 years, L'OCCITANE continuously creates and develops products with natural ingredients, selects suppliers with strict quality standard, and each product series has a true story behind it.",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "loccitane.cn",
			Floor: "",
			Filter: ["Beauty"],
			Floor: ""
		},{
			Key: "lancome",
			Title: "Lancome",
			Description_Ch: "1935年，在布鲁塞尔世博会，一位远见不凡的法兰西梦想家展出了5瓶香水，正是这5瓶盛装在奢华瓶身里的香水，令全世界为之惊艳和欢呼。这位梦想家便是阿芒.珀蒂让（Armand Petitjean）先生，而他也让全世界认识了一个彰显法兰西奢华美丽的品牌Lancome兰蔻。就是在世博会上的惊艳绽放，全世界的女性从此拥有了一个情感永存，美丽永恒的品牌。",
			Description_En: "Founded in 1935 by Armand Petitjean, vision-ary and lover of French elegance and women, Lancôme is THE brand of women. Today more than ever, ultra-femininity, emotion, joie-de- vivre, happiness and beauty are at the very heart of Lancôme’ s DNA. A spirit that asserts itself through the most beautiful, the most optimistic mission: that every woman who come to Lancôme to be more beautiful, always leave happier.",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "lancome.com.cn",
			Filter: ["Beauty"],
			Floor: ""
		},{
			Key: "lanvin",
			Title: "Lanvin",
			Description_Ch: "Lanvin是法国历史最悠久的高级时装品牌，1889年由Jeanne Lanvin女士创立至今，在时装、香水、配饰等各方面引领潮流。2001年，设计总监Alber Elbaz的加盟，不仅沿袭了品牌一贯的优雅，更将过去与未来完美结合，满足都市女性多样的着装需求。Lanvin男装，也广受巴黎时装圈的好评与拥护。",
			Description_En: "Lanvin是法国历史最悠久的高级时装品牌，1889年由Jeanne Lanvin女士创立至今，在时装、香水、配饰等各方面引领潮流。2001年，设计总监Alber Elbaz的加盟，不仅沿袭了品牌一贯的优雅，更将过去与未来完美结合，满足都市女性多样的着装需求。Lanvin男装，也广受巴黎时装圈的好评与拥护。",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "lanvin.com",
			Filter: ["Women", "Man"],
			Floor: "1F"
		},{
			Key: "lothantique",
			Title: "Lothantique",
			Description_Ch: "罗丹缇，来自法国的护肤和香氛大师来自法国普罗旺斯的“香氛世家”罗丹缇（Lothantique），是法国知名的精油供应商。传承百年萃取工艺，沿袭顶级品质的高技术调香工艺，铸就独特的香氛文化。罗丹缇将香氛、香水与包括沐浴露、身体乳、护手霜等天然护肤品融合，使产品丰富多元化，在法国的崇尚优雅生活的人士中有着良好声誉。",
			Description_En: "罗丹缇，来自法国的护肤和香氛大师来自法国普罗旺斯的“香氛世家”罗丹缇（Lothantique），是法国知名的精油供应商。传承百年萃取工艺，沿袭顶级品质的高技术调香工艺，铸就独特的香氛文化。罗丹缇将香氛、香水与包括沐浴露、身体乳、护手霜等天然护肤品融合，使产品丰富多元化，在法国的崇尚优雅生活的人士中有着良好声誉。",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "lothantique.com",
			Filter: ["Beauty"],
			Floor: ""
		},{
			Key: "mac",
			Title: "M.A.C",
			Description_Ch: "M.A.C意为艺术彩妆，作为一个专业彩妆品牌，M.A.C于1984年由一名彩妆师与发型师创立于加拿大多伦多，创立初衷是为了迎合专业人士的需求。经过近30年的品牌发展，M.A.C赢得了全世界彩妆师的青睐，为包括纽约、伦敦、巴黎和米兰时装周在内的300多个秀场后台提供专业的彩妆产品。目前，M.A.C覆盖了世界范围内的73个国家。",
			Description_En: "M.A.C stands for Make Up Art Cosmetics – we are a make up brand, created by a make up artist and hair stylist from Toronto, Canada in 1984 to meet the special needs of industry professionals. For almost 30 years, MAC has won the heart of all professional makeup artists around the world. M.A.C products are trusted to be used at over 300 fashion shows’ backstage including those at New York, London, Paris and Milan.",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "maccosmetics.com.cn",
			Filter: ["Beauty"],
			Floor: ""
		},{
			Key: "marni",
			Title: "Marni",
			Description_Ch: "1994年，Consuelo 和Gianni Castiglioni创立了Marni品牌，以其标志性的奢华，折衷风格女装及配饰系列闻名于世。Consuelo Castiglioni以一种前卫的精神来平衡精心制作的全系列成衣。她对原料，廓形，色彩以及独特印花和纹理的不同排列组合而创造了一个独特的服装风格。",
			Description_En: "In 1994, Consuelo and Gianni Castiglioni launched Marni, the iconic luxury, eclectic women’s clothing and accessories collection. Marni created an avant-garde spirit balancing exceptionally-crafted ready-to-wear with a complete line of accessories. Consuelo’s modern approach to materials and silhouette, juxtaposing color, exclusive prints and textures has resulted in a new, unique form of functionality.",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "marni.com",
			Filter: ["Women", "Man"],
			Floor: "1F"
		},{
			Key: "moncler",
			Title: "Moncler",
			Description_Ch: "1952 年，Moncler 在法国格勒诺布尔（Grenoble）创立，目前总部设于意大利米兰。多年来，品牌致力于与攀登专家的通力合作，糅合时尚与创新科研成果，创造出完美体现专业与风格的时装及精品配饰。如今的 Moncler 包括多个男装、女装和配饰系列，于全球多家专卖店、世界各大顶级百货公司与多品牌时尚精品店出售。",
			Description_En: "MONCLER was established in Grenoble, France, in 1952 and is currently based in Milan, Italy. Over the years, the brand has worked with mountaineering experts to mix style with ongoing technological research. Moncler collections are accordingly the quintessence of outerwear, combining the most extreme demands with day-to-day city life.",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "moncler.com",
			Filter: ["Women", "Man"],
			Floor: "1F"
		},{
			Key: "munich",
			Title: "Munich",
			Description_Ch: "1939年BERNEDA先生于西班牙创立制鞋公司。1953年公司成功成为运动鞋制造业先锋。1964年以X为形象的MUNICH品牌诞生。其中GOAL最先由室内足球鞋演变而来，ROC受田径，越野的启发。而ACROPOL基于跆拳道鞋，融合街穿时尚元素。JOC由帆布制成受到年轻人追捧。",
			Description_En: "In 1939 Mr. BERNEDA founded the shoe company in Spain. In 1953, the company has successfully become the sports shoes manufacturing industry pioneer. In 1964 X became MUNICH brand image. The GOAL series is inspired by indoor soccer shoes, ROC is by athletics, cross-country inspiration. ACROPOL series is based on Taekwondo shoes. JOC is made of canvas chased by young people.",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "munichsports.com",
			Filter: ["Accessory"],
			Floor: ""
		},{
			Key: "mylohas",
			Title: "myLOHAS",
			Description_Ch: "myLOHAS是中国市场首家天然有机护肤精品店。美乐活提供健康、安全、有效的健康美容产品, 旗下近20个品牌涵盖了有机护肤、身体护理、头发护理、妇婴护理、芳香疗法和室内香氛等多种品类。美乐活为100%原装进口多品牌专卖店，从世界各地，如美国，法国、意大利、瑞士、德国、澳大利亚、新西兰等地，经过质量、效果、安全，和环保效应等方面仔细甄选后引进中国。",
			Description_En: "myLOHAS is a premier beauty & lifestyle brand in China,that offers the highest-quality natural, organic, safe and effective products and information that enables individuals to lead an empowering lifestyle that is both stylish and responsible, thus helping to create a healthier and sustainable planet.myLOHAS is the first organic beauty &lifestyle shop in China.",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "mylohas.net",
			Filter: ["Beauty"],
			Floor: ""
		},{
			Key: "naturecolored",
			Title: "Naturecolored",
			Description_Ch: "Naturecolored是全球领先的彩棉、有机棉、植物纤维等环保面料婴儿服饰品牌，全部采用无化学染色工艺进行生产，目前在美国、欧盟、澳大利亚、加拿大等国家和地区销售。2010年Naturecolored 进入中国市场，中文注册商标为“本色棉”，在中国的生产商和代理商为深圳市紫瑞服装有限公司。",
			Description_En: "Naturecolored is a global-leading brand on professionally green and pro-environment baby clothing field. Naturecolored products only use no dyeing naturally colored cotton, organic cotton and plant fiber material. Until now, it has registered in 23 countries, and has had good markets in European countries.",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "naturecolored.cn",
			Filter: ["Kids"],
			Floor: ""
		},{
			Key: "newbalance",
			Title: "NEW BALANCE",
			Description_Ch: "新百伦New Balance公司于1906年诞生在美国马拉松之城波士顿。前身为一家脚弓支撑器专业公司，1970年代起专注于运动鞋的制作，现已成为全球领先的运动品牌。作为全球唯一一个在美国和英国拥有制鞋工厂的国际运动鞋品牌，新百伦New Balance坚守高标准道德规范、100%顾客满意度、团队合作的公司精神，在科技材质、产品外观与舒适度上不断创新进步，为每一个运动者能够最大限度发挥自己的运动潜能，享受平衡自在的生活而不懈努力。",
			Description_En: "New Balance began as a Boston-based arch support company in 1906, developed into a specialized shoe manufacturer in the 1970's, and has grown to become a leading global athletic products company. To ensure the best fitting, best performing shoes and apparel, we focus on improving our technology and production methods.",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "newbalance.com.cn",
			Filter: ["Kids"],
			Floor: ""
		},{
			Key: "origins",
			Title: "Origins",
			Description_Ch: "Origins致力于在世界各地探索有效的植物成分，是全球首个以“天然为本，科学为证”，为渴望纯净成分和卓越效果的肌肤带来最天然高效的绿色护肤体验的品牌，Origins悦木之源所有产品均源于天然植物成分以及100%纯天然植物精油。",
			Description_En: "Origins searches all over the world for the most potent plants, to create high-performance natural skincare that is powered by nature and proven by science. We use potent plants, organic ingredients and 100% natural essential oils.",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "origins.com.cn",
			Filter: ["Beauty"],
			Floor: ""
		},{
			Key: "oroblu",
			Title: "OROBLU",
			Description_Ch: "Oroblù自1987年以来，一直是时尚、创新、舒适的完美结合体。在世界高端国际袜品品牌中，Oroblù是其中最富盛名、最受推崇的品牌之一。在意大利乃至全世界，她意味着高雅和优异的品质。在顾客的心目中，Oroblù精致、优雅，在特殊场合用她来搭配漂亮服装是一个绝佳的选择。每被问及，女性朋友们总是这样评价Oroblù：用一流的材料制作高品质的袜子。",
			Description_En: "Since 1987 Oroblù has been the perfect combi- nation of fashion, innovation and comfort. Oroblù is one of the most famous and appreci- ated brands in the world of high level Interna- tional hosiery; Oroblù means great quality and elegance both in Italy and all around the world. Over the last few years, the classic and fashion hosiery collections were followed by under- wear, bodywear and beachwear series, both for the man and for the woman.",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "oroblu.com",
			Filter: ["Underwear"],
			Floor: ""
		},{
			Key: "ralphlauren",
			Title: "Ralph Lauren",
			Description_Ch: "Ralph Lauren是国际首屈一指的美国名牌企业，创立45年来不断以清新洗练、精闢细緻的生活态度，以及时尚高雅而隽永恆远的衣饰风格鲜活了美国精神典范，独特形象深入人心。Ralph Lauren在大中华地区开设了位于上海芮欧百货的全新奢华精品店，以Ralph Lauren的纽约麦迪逊大道及巴黎圣日耳曼大道的旗舰店为蓝本，为中国的尊贵客户提供品牌拥抱的隽永美感与高雅奢华。",
			Description_En: "Ralph Lauren is a leader in the International luxury lifestyle market. For over 45 years, the brand has revolutionized quintessential Americana with chic and timeless clothing and accessories inspired by a lifestyle of vibrant sophistication. Ralph Lauren opened its first women’s luxury store in Reel Shanghai, China.",
			Phone: "02132530868",
			BusinessHours: "10:00AM-22:00PM",
			Url: "ralphlauren.com",
			Filter: ["Women"],
			Floor: "1F"
		},{
			Key: "sergentmajor",
			Title: "SERGENT MAJOR",
			Description_Ch: "思佳美儿童装源自法国巴黎，专注童装25年。思佳美儿充满想象力的法国设计，将时尚和舒适完美融合，给孩子忠于自已的个性选择，尽享无忧无虑的快乐童乐！",
			Description_En: "SERGENT MAJOR ,a worldwide famous French kids wear brand which has been devoted to kid’s garment for more than 25 years SERGENT MAJOR is presenting its excellent design full of imagination and providing attrac- tive and comfortable choice to the kids. SER- GENT MAJOR develops strong relationship with children thanks to the unique experience that they offer in store in terms of service and innovation.",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "sergent-major.com.cn",
			Filter: ["Kids"],
			Floor: "4F"
		},{
			Key: "sergiorossi",
			Title: "Sergio Rossi",
			Description_Ch: "Sergio Rossi在1950年于意大利San Mauro Pascoli创立。凭着其出类拔萃的制作工艺，为追求意大利优质鞋履的高品味顾客所欢迎。无数国际明星、名人均选择穿着Sergio Rossi踏上红地毡和出席隆重社交场合。Sergio Rossi在1950年于意大利San Mauro Pascoli创立。凭着其出类拔萃的制作工艺，为追求意大利优质鞋履的高品味顾客所欢迎。无数国际明星、名人均选择穿着Sergio Rossi踏上红地毯和出席隆重社交场合。",
			Description_En: "Sergio Rossi was established in the 1950s in San Mauro Pascoli, Italy. With its excellent workmanship, the Sergio Rossi shoe has always been chosen by a refined clientele who desires extremely high quality Italian footwear. Numerous Italian and international stars always wear Sergio Rossi on the red carpet, and countless international celebrities choose Sergio Rossi shoes for gala events.",
			Phone: "02132530878",
			BusinessHours: "10:00AM-22:00PM",
			Url: "sergiorossi.com",
			Filter: ["Women"],
			Floor: "1F"
		},{
			Key: "simoneperele",
			Title: "SIMONE PERELE",
			Description_Ch: "始创于1948年的法国巴黎，拥有60余年紧身内衣制造经验，西蒙佩儿生产工艺的秘密就是将历久不衰的激情和精准完美一直地保持，保证了完美内衣品质。高贵,精致，对细节的关注,性感和无与伦比的舒适 … 让女性不必在美丽和舒适之间二者选一。西蒙佩儿品牌独有特性和声誉让她的法国风格被全球女士所钟爱。",
			Description_En: "Everything started in 1948, backed up by more than sixty years of experience in corset- making, Simone Pérèle's manufacturing secrets are passed down with enduring passion and precision, to guarantee perfect lingerie Elegance, meticulous attention to detail, sensu- ality and unparalleled comfort...the reputation of Simone Pérèle is built on the very qualities that make French Style embraced by women all over the world.",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "simone-perele.com",
			Filter: ["Underwear"],
			Floor: "4F"
		},{
			Key: "sisley",
			Title: "Sisley",
			Description_Ch: "诞生于1976年，奢华植物护肤专家Sisley法国希思黎，凭借跨时代尖端科技和“追求极致卓越”的理念，赋予产品“自然、安全、有效”的承诺。率先将植物精华和植物精油运用到产品中，通过高科技的多元萃取，呈现植物精萃的最优配方。不计成本选取原料，不计时间研发新，造就出一款款高品质美容精品。提供人们全方位的美肤方案：从脸部保养，身体护理，彩妆到香氛。为追求至高生活品质的人们带来非凡肌肤感受。",
			Description_En: "When in 1976, Hubert d°Oornan created Sisley, Europe had not yet been swept by a wave of interest in aromatherapy and phytotherapy. The use of plants and Essential Oils in beauty products was at the time a highly innovative idea. A genuine pioneer, using method and precision, Hubert d’Ornano specialize his laboratories in phytocosmetology and chose to use the best of plants to create the best skin- care.",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "sisley.com.cn",
			Filter: ["Beauty"],
			Floor: ""
		},{
			Key: "skii",
			Title: "SKII",
			Description_Ch: "SK-II专注为女士缔造动人美肌，万千女士使用过SK-II的产品后，肤质获得明显改善且变得晶莹剔透，让她们变得更加精彩灿烂，“活出晶莹人生”。美丽可以焕变，只要拥有充满活力、白晰的肌肤，每位女士都会更有自信，更加迷人。",
			Description_En: "SK-II brings miracle transformations to women. It has helped us to get clear on our role in the lives of our loyal users. So we present, \"Live Clear\".",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "skii.com.cn",
			Filter: ["Beauty"],
			Floor: ""
		},{
			Key: "stellamccartneykids",
			Title: "Stella McCartney Kids",
			Description_Ch: "Stella McCartney 童装系列产品囊括了刚刚出生的婴儿装直至适合14岁孩子的童装，设计风格充满童趣，设计感十足,，不仅表现了儿童的纯真活力，还力求缔造小天使们的时尚个性，这个系列延续了设计师在美学和环保方面的一贯理念, Stella标志性的柔和色系与鲜艳明快的对比色相结合,带有蝴蝶翅膀的小马、发光的小恶魔都成为了童装T恤上的标志图案。",
			Description_En: "Stella McCartney 童装系列产品囊括了刚刚出生的婴儿装直至适合14岁孩子的童装，设计风格充满童趣，设计感十足,，不仅表现了儿童的纯真活力，还力求缔造小天使们的时尚个性，这个系列延续了设计师在美学和环保方面的一贯理念, Stella标志性的柔和色系与鲜艳明快的对比色相结合,带有蝴蝶翅膀的小马、发光的小恶魔都成为了童装T恤上的标志图案。",
			Phone: "02132536598",
			BusinessHours: "10:00AM-22:00PM",
			Url: "stellamccartney.com",
			Filter: ["Women", "Kids", "Underwear"],
			Floor: "4F"
		},{
			Key: "tuctuc",
			Title: "Tuctuc",
			Description_Ch: "TUC TUC的产品有童装、婴幼儿用品和配饰。品牌倡导的生活方式是为了打造充满幻想和乐趣的小世界。服装的设计灵感来源于他们的充满童趣的户内外活动、家庭生活、甚至是小恶作剧。品牌的这一精髓能够很快得到顾客的认可，是孩童快乐的源泉。产品始终保持着最高的品质和舒适度，是西班牙著名的童装品牌。",
			Description_En: "TUC TUC的产品有童装、婴幼儿用品和配饰。品牌倡导的生活方式是为了打造充满幻想和乐趣的小世界。服装的设计灵感来源于他们的充满童趣的户内外活动、家庭生活、甚至是小恶作剧。品牌的这一精髓能够很快得到顾客的认可，是孩童快乐的源泉。产品始终保持着最高的品质和舒适度，是西班牙著名的童装品牌。",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "tuctuc.com",
			Filter: ["Kids"],
			Floor: ""
		},{
			Key: "unconditional",
			Title: "Unconditional",
			Description_Ch: "源自英国的UNCONDITIONAL是一个高端的国际时装品牌。自创牌以来，UNCONDITIONAL已享誉各界，成为当今国际设计师品牌的代表之一。国际著名设计师PhilipAlanStephens是UNCONDITIONAL的创始人，他以独到的设计理念与精准的定位使UNCONDITIONAL在短短9年间，销售点已遍布全球25个国家，并受到众多国际一线巨星的热烈追捧。",
			Description_En: "UNCONDITIONAL is a high-end international fashion brand designed by Philip Alan Stephens who is the founder and the chief fashion designer of the brand. The brand is recognised by it's sophisticated design of minialism and modern elegance. UNCONDITIONAL has been invited to participate London fashion week for seven quarters since 2005; two quarters in New York fashion week; and four times in Shanghai and Amsterdam.",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "unconditional.uk.com",
			Filter: ["Women", "Man"],
			Floor: ""
		},{
			Key: "wacoal",
			Title: "WACOAL",
			Description_Ch: "Wacoal始终以“通过使世界上的女性变得更美丽，从而为社会作出贡献”为目标，关注女性的价值观与审美意识，不断追求超越时代的“美”的本质。Wacoal以独有的人体科学研究所为强大的产品研发后盾，并从卓越的品质、严谨的科研、优秀的产品、贴心的服务四方面着眼，为中国女性提供兼具卓越机能性与时尚设计感于一体的内衣产品。 现华歌尔的产品线分为主打系列、金标系列、年轻系列，满足不同消费者的需求。",
			Description_En: "Wacoal始终以“通过使世界上的女性变得更美丽，从而为社会作出贡献”为目标，关注女性的价值观与审美意识，不断追求超越时代的“美”的本质。Wacoal以独有的人体科学研究所为强大的产品研发后盾，并从卓越的品质、严谨的科研、优秀的产品、贴心的服务四方面着眼，为中国女性提供兼具卓越机能性与时尚设计感于一体的内衣产品。 现华歌尔的产品线分为主打系列、金标系列、年轻系列，满足不同消费者的需求。",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "wacoal.com.cn",
			Filter: ["Underwear"],
			Floor: ""
		},{
			Key: "wisekids",
			Title: "wise kids",
			Description_Ch: "Wise Kids（慧思创智）于1988年在香港创立，经过25年的发展，慧思创智已成为享誉国际的高端教育玩具、幼儿教材及教具零售、批发的国际品牌(Playmobil, Steiff, TOLO, Siku, Manhattan Toys, Vilac and BRIO…)，一站式销售高端教、玩具并提供专业的服务和指导。",
			Description_En: "Established in Hong Kong since 1988, special- ized in educational toys for more than 20 years. Provides high quality educational toys for kids in Hong Kong and China. Educational toys are carefully selected based on safety, play value, design, quality and durability to stimulate kids’ physical, emotional and mental growth.",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "wisekidstoys.com",
			Filter: ["Kids"],
			Floor: "4F"
		},{
			Key: "yohjiyamamoto",
			Title: "Yohji Yamamoto",
			Description_Ch: "山本耀司的品牌理念始于“穿男式衣装的女性”，她们独立不随波逐流品牌理念富于衣着的本质，以打破如季节性和协调性的陈规，来表达了“不完美的完美”白色条纹剪裁的单品，配以不同风格的衣装，如精致的蕾丝、优雅的天鹅绒、以及忧郁的效果。山本耀司2013-14秋冬系列展现了坚强的意志和个性化，且不过度——沉默的力量。",
			Description_En: "山本耀司的品牌理念始于“穿男式衣装的女性”，她们独立不随波逐流品牌理念富于衣着的本质，以打破如季节性和协调性的陈规，来表达了“不完美的完美”白色条纹剪裁的单品，配以不同风格的衣装，如精致的蕾丝、优雅的天鹅绒、以及忧郁的效果。山本耀司2013-14秋冬系列展现了坚强的意志和个性化，且不过度——沉默的力量。",
			Phone: "",
			BusinessHours: "10:00AM-22:00PM",
			Url: "yohjiyamamoto.co.jp",
			Filter: ["Women"],
			Floor: "2F"
		}]);
	});
	mongo.database.collection("food", function(err, collection){
		collection.insert([{
			Key: "blink",
			Title: "blink",
			Description_Ch: "",
			Description_En: "",
			Phone: "021",
			BusinessHours: "08:00AM-22:00PM",
			Url: ""
		},{
			Key: "coldstone",
			Title: "coldstone",
			Description_Ch: "",
			Description_En: "",
			Phone: "021",
			BusinessHours: "08:00AM-22:00PM",
			Url: ""
		},{
			Key: "misterdonut",
			Title: "misterdonut",
			Description_Ch: "",
			Description_En: "",
			Phone: "021",
			BusinessHours: "08:00AM-22:00PM",
			Url: ""
		},{
			Key: "starbucks",
			Title: "starbucks",
			Description_Ch: "",
			Description_En: "",
			Phone: "021",
			BusinessHours: "08:00AM-22:00PM",
			Url: ""
		},{
			Key: "wagas express",
			Title: "wagas express",
			Description_Ch: "",
			Description_En: "",
			Phone: "021",
			BusinessHours: "08:00AM-22:00PM",
			Url: ""
		},{
			Key: "大一梦鲷鱼",
			Title: "大一梦鲷鱼",
			Description_Ch: "",
			Description_En: "",
			Phone: "021",
			BusinessHours: "08:00AM-22:00PM",
			Url: ""
		},{
			Key: "斗香园",
			Title: "斗香园",
			Description_Ch: "",
			Description_En: "",
			Phone: "021",
			BusinessHours: "08:00AM-22:00PM",
			Url: ""
		},{
			Key: "古镇汤团",
			Title: "古镇汤团",
			Description_Ch: "",
			Description_En: "",
			Phone: "021",
			BusinessHours: "08:00AM-22:00PM",
			Url: ""
		},{
			Key: "布歌东京",
			Title: "布歌东京",
			Description_Ch: "",
			Description_En: "",
			Phone: "021",
			BusinessHours: "08:00AM-22:00PM",
			Url: ""
		},{
			Key: "汁喜屋",
			Title: "汁喜屋",
			Description_Ch: "",
			Description_En: "",
			Phone: "021",
			BusinessHours: "08:00AM-22:00PM",
			Url: ""
		},{
			Key: "饥饿吐司",
			Title: "饥饿吐司",
			Description_Ch: "",
			Description_En: "",
			Phone: "021",
			BusinessHours: "08:00AM-22:00PM",
			Url: ""
		},{
			Key: "次郎日式简餐",
			Title: "次郎日式简餐",
			Description_Ch: "",
			Description_En: "",
			Phone: "021",
			BusinessHours: "08:00AM-22:00PM",
			Url: ""
		},{
			Key: "西树泡芙",
			Title: "西树泡芙",
			Description_Ch: "",
			Description_En: "",
			Phone: "021",
			BusinessHours: "08:00AM-22:00PM",
			Url: ""
		},{
			Key: "吴记牛肉面",
			Title: "吴记牛肉面",
			Description_Ch: "",
			Description_En: "",
			Phone: "021",
			BusinessHours: "08:00AM-22:00PM",
			Url: ""
		},{
			Key: "每日新鲜水果吧",
			Title: "每日新鲜水果吧",
			Description_Ch: "",
			Description_En: "",
			Phone: "021",
			BusinessHours: "08:00AM-22:00PM",
			Url: ""
		},{
			Key: "芋贵人",
			Title: "芋贵人",
			Description_Ch: "",
			Description_En: "",
			Phone: "021",
			BusinessHours: "08:00AM-22:00PM",
			Url: ""
		},{
			Key: "宝珠奶酪",
			Title: "宝珠奶酪",
			Description_Ch: "",
			Description_En: "",
			Phone: "021",
			BusinessHours: "08:00AM-22:00PM",
			Url: ""
		},{
			Key: "宝馔",
			Title: "宝馔",
			Description_Ch: "",
			Description_En: "",
			Phone: "021",
			BusinessHours: "08:00AM-22:00PM",
			Url: ""
		},{
			Key: "狮子山香港小厨",
			Title: "狮子山香港小厨",
			Description_Ch: "",
			Description_En: "",
			Phone: "021",
			BusinessHours: "08:00AM-22:00PM",
			Url: ""
		},{
			Key: "美珍香",
			Title: "美珍香",
			Description_Ch: "",
			Description_En: "",
			Phone: "021",
			BusinessHours: "08:00AM-22:00PM",
			Url: ""
		},{
			Key: "继光香香鸡",
			Title: "继光香香鸡",
			Description_Ch: "",
			Description_En: "",
			Phone: "021",
			BusinessHours: "08:00AM-22:00PM",
			Url: ""
		},{
			Key: "釜山料理",
			Title: "釜山料理",
			Description_Ch: "",
			Description_En: "",
			Phone: "021",
			BusinessHours: "08:00AM-22:00PM",
			Url: ""
		},{
			Key: "筑地银章鱼",
			Title: "筑地银章鱼",
			Description_Ch: "",
			Description_En: "",
			Phone: "021",
			BusinessHours: "08:00AM-22:00PM",
			Url: ""
		},{
			Key: "缘喜寿司",
			Title: "缘喜寿司",
			Description_Ch: "",
			Description_En: "",
			Phone: "021",
			BusinessHours: "08:00AM-22:00PM",
			Url: ""
		},{
			Key: "韩林拌拌饭",
			Title: "韩林拌拌饭",
			Description_Ch: "",
			Description_En: "",
			Phone: "021",
			BusinessHours: "08:00AM-22:00PM",
			Url: ""
		},{
			Key: "满记甜品",
			Title: "满记甜品",
			Description_Ch: "",
			Description_En: "",
			Phone: "021",
			BusinessHours: "08:00AM-22:00PM",
			Url: ""
		},{
			Key: "葡京制造",
			Title: "葡京制造",
			Description_Ch: "",
			Description_En: "",
			Phone: "021",
			BusinessHours: "08:00AM-22:00PM",
			Url: ""
		},{
			Key: "锦官城麻辣香锅",
			Title: "锦官城麻辣香锅",
			Description_Ch: "",
			Description_En: "",
			Phone: "021",
			BusinessHours: "08:00AM-22:00PM",
			Url: ""
		},{
			Key: "鲜芋仙",
			Title: "鲜芋仙",
			Description_Ch: "",
			Description_En: "",
			Phone: "021",
			BusinessHours: "08:00AM-22:00PM",
			Url: ""
		}]);
	});
	mongo.database.collection("restaurent", function(err, collection){
		collection.insert([{
			Type: "block",
			Brand:[{
				Key: "henkes002",
				Title: "HENKES & Sushi Raku",
				Description_Ch: "Henkes 咖啡红酒廊\n食物种类 : 澳洲 / 地中海",
				Description_En: "Henkes 咖啡红酒廊\n食物种类 : 澳洲 / 地中海",
				Phone: "3253 0889",
				BusinessHours: "10:00AM-23:00PM",
				Url: "henkes.com.cn",
				Style: "Red"
			},{
				Key: "henkes001",
				Title: "Sushi Raku",
				Description_Ch: "食物种类 : 摩登日料",
				Description_En: "食物种类 : 摩登日料",
				Phone: "3253 0711",
				BusinessHours: "11:30AM-22:30PM",
				Url: "sushiraku.com.cn",
				Style: "Red"
			}]
		},{
			Type: "vertical",
			Key: "lacreperie",
			Title: "la creperie",
			Description_Ch: "食物种类 : 法式薄饼",
			Description_En: "食物种类 : 法式薄饼",
			Phone: "021 5465 9055",
			BusinessHours: "10:00AM-23:00PM",
			Url: "lacreperie.com.cn",
			Style: "Black"
		},{
			Type: "vertical",
			Key: "golden",
			Title: "金牛苑",
			Description_Ch: "食物种类 : 越南菜",
			Description_En: "食物种类 : 越南菜",
			Phone: "",
			BusinessHours: "10:00AM-23:00PM",
			Url: "",
			Style: "Black"
		},{
			Type: "vertical",
			Key: "ginzabairan",
			Title: "银座梅林",
			Description_Ch: "食物种类: 日料吉列豚肉",
			Description_En: "食物种类: 日料吉列豚肉",
			Phone: "021 3253 7998",
			BusinessHours: "10:00AM-23:00PM",
			Url: "ginzabairin.com.hk",
			Style: "White"
		},{
			Type: "vertical",
			Key: "dadong",
			Title: "大董餐饮",
			Description_Ch: "食物种类 : 创意中国菜",
			Description_En: "食物种类 : 创意中国菜",
			Phone: "021 3253 2299",
			BusinessHours: "10:00AM-23:00PM",
			Url: "dadongdadong.com",
			Style: "Red"
		}]);
	});
	mongo.database.collection("fix_text", function(err, collection){
		collection.insert([{
			Language: "Ch",
			Topic: "Privacy",
			Content: "#Head# 阁下的私隐权利\n#Paragraph# 芮欧百货(上海)有限公司（下称“芮欧百货”、“我们”、“我们的”或“我们”(受格形式)）在收集、保存、使用及传送个人数据时，尊重法例赋予阁下的私隐权利；而本“私隐政策声明”旨在说明我们处理个人私隐的方法。\n#Paragraph# 以下将详细说明我们处理个人数据的政策及方法，请仔细参阅及理解。文中所述的政策适用于已在本网站登记或未登记的所有使用者。另我们有权按需要随时更新、修订、重新公布或更改有关的内容。\n#Paragraph# 本“私隐政策声明”中没有加上明确解释的用字或词语，其涵义与“使用条款”及“芮欧百货规则”给予该等字词的涵义相同。\n#Paragraph# 倘本声明的英文本与中文本有任何差异的地方，则以英文本为准。\n#Paragraph# “个人资料”指任何可识别个人身份或敏感性的资料（例如姓名、职业、地址、联络数据、八达通卡号码及信用卡数据等(但亦可包括其它的数据及数据)，藉以在切实可行下确定个别人仕的身份）。\n#Head# 使用个人资料的用途\n#Paragraph# 当你登记成为本网站的使用者，我们将收集你的个人资料。\n#Paragraph# 倘你为13岁以下，在提供任何个人资料前，必须先征求家长或监护人同意。我们可能将你的个人资料用作两种用途：强制性及自愿性用途。若个人资料用作强制性 用途，如你希望我们提供你申请的服务，你必须向我们提供你的个人资料。如个人资源只用作自愿性用途，你可以告知我们不要将你的个人资料用作该用途，我们将 不会使用你的个人资料作该用途。\n#Paragraph# 你必须提供个人资料的强制性用途包括：\n1、申请、终止及延续本网站的使用；\n2、处理账项及缴付费用；\n3、处理及跟进服务要求、查询及投诉；\n4、供我们及第三者作日后巿场研究之用；\n5、核实阁下的身份；\n6、让我们更加了解已登记用户的统计资料；\n7、促使我们或我们的附属机構，或接收该等资料的机構得以为阁下提供我们相信适合阁下或阁下可能感兴趣的网页或其她电子服务。\n#Head# 资料的披露\n#Paragraph# 我们在收集阁下的个人资料时，将会：\n向阁下说明我们正在收集阁下的个人资料以及收集的用途（以本「收集个人资料声明」或独立通知）；\nii. 给阁下“否决”的机会（即限制我们使用有关的个人数据作某些指定用途）；\niii. 说明我们如何储存个人数据的方法，以及可供阁下查阅、更改及删除已储存个人数据的方法。\n#Paragraph# 除已在本“私隐政策声明”中明确指出的情况外，我们绝不会披露阁下的个人资料，除非有关要求乃法例所需，或我们合理地相信此等行动是需要：\ni.符合法例或适用的规例；\nii.保障及就我们的权利及财产作出抗辩；\niii.保障芮欧百货免受误用或在未经许可的情况下擅自使用；\niv.保障我们的使用者或公众的个人安全或财产。\n#Head# 与其它网页的连结\n#Paragraph# 本“收集个人资料声明”只适用于本网站。倘阁下按任何广告或连结其它网页的超级链接（hyperlink），即会离开本网站而进入另一个位置，我们并不负责保护阁下在浏览其它网页时可能泄漏的私隐、个人数据及可能受到 “曲其” (cookies) 的干扰 /影响 ，阁下应自行参阅该位置的私隐政策（如有者）。\n#Head# 网络纪录\n#Paragraph# 当阁下进入本网站后，我们的服务器软件会记录阁下的计算机域名，并追查阁下曾浏览的每一网页，目的是计算本网站的通讯量、各部分数据的受欢迎程度、搜集浏览者的一般数据、及向广告客户推销网站服务。在此情况下，该等广告客户有可能会获得一些撮要的通讯量数据，但这些数据并不会揭露阁下的个人身份。\n#Head# 保安\n#Paragraph# 除以上第3点所述外，阁下的个人数据不论如何储存，均只限于已获我们授权的雇员或承办商才可以取用。利用电子方式储存的个人数据以独立的服务器保存，并加有密码保护（或同等形式的保护措施）。\n#Head# 法律程序中个人数据的应用\n#Paragraph# 阁下已明确同意在我们可基于任何原因，包括因追讨阁下拖欠的款项而须向阁下采取任何行动时，我们可以根据阁下所提供的个人资料识别阁下的身份并向阁下采取法律行动。\n#Head# 存取及保留个人资料的权利\n#Paragraph# 阁下可随时要求存取及更正我们纪录中与阁下有关的个人资料，阁下亦可要求我们从任何运作中的邮递或分发名单中删除阁下的数据。倘阁下须行使任何应有权利时，可按以下地址致函给我们，并在信封面上注明“保密”字样。我们在响应阁下的要求时，可能要求阁下提供某些个人资料，以确定阁下确实是所处理数据的当事人。在阁下提出要求后，我们是需要在切实可行的情况下，于40天内给予回复，但阁下可能因此而需缴付费用。\n#Head# 资料的保留\n#Paragraph# 我们将按收集资料目的所需的时间保留你的个人资料。\n无需保留的个人资料将会销毁。\n芮欧百货(上海)有限公司有权修改本“私隐政策声明”，而有关修改将登载于本网页上。"
		},{
			Language: "En",
			Topic: "Privacy",
			Content: "#Head# Rights to Privacy\n#Paragraph# Réel Shanghai Department Store Co., Ltd. (hereinafter referred to as \" Réel Department \", \"We\", \"Our\" or \"Us\") respects your right to privacy conferred by law in the collection, storage, use and transmission of personal data; and the \"terms and conditions\" explains our approach to handling personal privacies. In the following part we will explain our policy and method of processing personal data in details, please read carefully for understanding. The policy described in the text is applicable to all users registered or unregistered to the website. In addition, we have the right to update, amend, re-publish or change related content where we deem necessary.\n#Paragraph# Meaning of word or expression that is not coupled with a clear explanation in this \"Terms and conditions\" is the same to that used in \"Terms of Use\" and \"Réel Department Store Regulations\". In case of conflict or discrepancy between the English and the Chinese version of this statement, the former shall prevail. \"Personal Data\" refers to any data that distinguish personal identity or sensitivity such as name, occupation, address, contact data, Octopus card number and credit card data, etc, also including other data or information with which the identity of an individual person can be confirmed.\n#Head# Purpose of Using Personal Data\n#Paragraph# When you register to use this website, we will collect your personal information. If you are under the age of 13, before providing any personal informa- tion, you must first obtain parental or guardian consent. We may use your personal data for two purposes: mandatory and voluntary purposes. If the personal data are used for mandatory purpose like you want us to provide the services you request, you must provide us with your personal data. If personal data are used for voluntary purpose only, you can tell us you do not wish your personal data used for such purposes, we will not use your person- al data for that purpose. The mandatory uses of personal data you must provide include:\n1 application, termination and continuation of use of this website\n2 handle billing and payment\n3 treatment and request of follow-up services, inquiries and complaints\n4 for ours and for the third party’s future market research\n5 to verify your identity\n6 for our better understanding of the statistics of registered users and\n7 help us or our affiliates, or organization receiving such information to provide you web page or other electronic services that we believe may suit your or you may be of interest.\n#Head# Disclosure of Data\n#Paragraph# When we collect your personal data, we will:\ni. inform you that we are collecting your personal data and the collecting purposes (through the \"Personal Data Collection Statement\" or separat notice)\nii. give you a \"veto\" choice (i.e. limit our use of personal data for certain specified purposes) and explain to you how we store personal data, and you can review, change, and delete stored personal data.\n#Paragraph# Except the situation expressly state in the \"Privacy Policy Statement\", we will not disclose your personal data, unless required so by law, or we reasona- bly believe that such action is necessary:\ni. comply with applicable laws or regulations\nii. protect and defend in respect to our rights and property\niii. safeguard against the misuse or unauthorized of Réel Shanghai Department Store\niv. and protect our users or the public's personal safety or property.\n#Head# Links to other Websites\n#Paragraph# The \"Personal Data Collection Statement\" applies only to this website. If you click on any ads or hyperlink to other web pages, you will leave the site and enter into another location that we are not responsible for protecting your possible leakage of privacy, personal data or interference/influence by cookies when browsing other web pages; you are advised to refer to the privacy policies of that position (if any).\n#Head# Web Cookies\n#Paragraph# When you visit our website, our server software will record down the domain name of your computer and track every page you visit to calculate the amount of traffic on this website, the popularity of each part of the data, collect surfers’ general data, and sell web services to advertisers. In this case, the advertiser may get some summary of the traffic data, but the data will not reveal your personal identity. .\n#Head# Security\n#Paragraph# Except for the above article 3, regardless how your personal data are stored, they are only accessible by our authorized employees or contractors. Elec- tronically stored personal data will be saved to a separate server with password protection (or equivalent forms of protection).\n#Head# Use of Personal Data in Legal Procedure\n#Paragraph# You expressly agree that we can for any reason, including taking any action which would fall to you for the recovery of your outstanding amounts, identify your identity and take legal action to you according to your personal data provided.\n#Head# Right to Store and Keep Personal Data\n#Paragraph# You may at any time request access to and correction of your personal data in our records, and you may also ask us to delete your data from any active mailing or distribution list. If you should require the exercise of any right, write to us at the address below, and mark \"Confidential\" in the envelope. In response to your request we may ask you to provide certain personal information to determine that you are the subject of your data being processed. In your request, we are required to reply within 40 days in practicable situation, but you may thereof need to pay a fee.\n#Head# Retaining Personal Data\n#Paragraph# We will keep your personal data to the time necessary for the purpose of collecting your information.Personal data that are unnecessary for retaining will be destroyed. Réel Department Store reserves the right to amend this \"terms and conditions\" and such changes will be posted on the website.",
		},{
			Language: "Ch",
			Topic: "Concern",
			Content: "#Paragraph# 亲爱的顾客您好，欢迎关注芮欧百货官方微博（weibo.com\/reelshanghai）及时了解更多商场丰富信息，同时也欢迎您透过客服信箱：eservice@reelshanghai.com传达您的宝贵意见，我们将竭诚为您答复。（贴心小提醒：敬请于信件中留下您的个人联络资料，如：姓名、联络电话、电子信箱等，以利客服人员尽速与您联系。）您亦可拨打客服专线：+86 21 22309788 或 4001559788，将有客服人员为您解说与服务，或至下列常见问题中查询您所需要的信息。\n#Paragraph# 客服专线服务时间每日早上10点至晚上10点。"
		},{
			Language: "En",
			Topic: "Concern",
			Content: "Dear customer, thank you to follow the official Weibo of Reel Department Store (weibo.com/reelshanghai) to acquire a wealth of information of the our department store; you’re also welcomed to express your ideas or suggestions through our Customer Service email: eservice@reelshanghai.com, and we will be wholeheartedly at your service.\r\n(Warm tips: please leave your personal contact information such as name, telephone number, e-mail, etc. in your e-mail so that a timely contact will be facilitated.)\r\n\r\nYou can also call the customer service line +86 21 22309788 or 4001559788 for explanation and services,\r\nor inquire about the following FAQ for more information.\r\n\r\nService hours of customer service line: 10:00 to 22:00."
		},{
			Language: "Ch",
			Topic: "Contact1",
			Content: "亲爱的顾客您好，如对芮欧百货(上海)有限公司有任何疑问或建议，\n欢迎您透过客服信箱传达，我们将竭诚为您答复。\n客服信箱 : eservice@reelshanghai.com\n（贴心小提醒：敬请于信件中留下您的个人联络资料，如:姓名、联络电话、电子信箱…等，以利客服人员尽速与您联系。）"
		},{
			Language: "En",
			Topic: "Contact1",
			Content: "Dear customer, you’re also welcomed to express your ideas or suggestions through our Customer Service email: eservice@reelshanghai.com, and we will be wholeheartedly at your service.\r\n (Warm tips: please leave your personal contact information such as name, telephone number, e-mail, etc. in your e-mail so that a timely contact will be facilitated.)  Customer"
		},{
			Language: "Ch",
			Topic: "Contact2",
			Content: "您亦可拨打客服专线：+86 21 22309788 或 4001559788\r\n将有客服人员为您解说与服务，或至下列常见问题中查询您所需要的信息。\r\n客服专线服务时间为每日早上10点至晚上10点。"
		},{
			Language: "En",
			Topic: "Contact2",
			Content: "You can also call the customer service line +86 21 22309788 or 4001559788 for explanation and services, or inquire about the following FAQ for more information. Service hours of customer service line: 10:00 to 22:00."
		},{
			Language: "Ch",
			Topic: "Contact3",
			Content: "欢迎光临芮欧网站，如欲提供合作提案内容，请于以下表格内填妥详细内容，\r\n提案内容将会寄送相关部门，我们将会于审核信息后主动与您连络，谢谢！"
		},{
			Language: "En",
			Topic: "Contact3",
			Content: "Welcome to Réel Department’s website and thank you for providing the cooperation proposal(s). Please complete the form below for more details and we will contact you after the content submitted to relevant departments being verified."
		},{
			Language: "Ch",
			Topic: "Recruiting",
			Content: "有意加入芮欧百货的有志人士可将简历发至Email:XXX@reelshanghai.com，本公司将根据招聘岗位的要求安排面试，未经面试/录用者资料将保存在本公司人力资源部，恕不退还，谢绝来电来访。\r\n其他人力资源网站链接：\r\nwww.51job.com\r\nwww.ChinaHR.com"
		},{
			Language: "En",
			Topic: "Recruiting",
			Content: "Applicants who are interested in joining in Réel Department Store can send the resume to XXX@reelshanghai.com, and the Companywill arrange interviews according to the post requirements. Information of applicants who are not informed of the interview or recruitment will be kept in the Company's Human Resources Department and will not be returned. No call or visit allowed.\r\nLinks to other human resources websites:\r\nwww.51job.com\r\nwww.ChinaHR.com"
		},{
			Language: "Ch",
			Topic: "VisitAbout1",
			Content: "#Paragraph# 芮欧百货以Réel为名，源于法文，代表〝真实〞之意。芮欧百货希冀以其缤彩纷呈的高端精品，以及精致贴心的服务与梦幻多变的创意，诠释现代女性的万种风貌，创造令人惊艳向往的购物体验，成为现代女性乐为女人的摩登之苑。\r\n#Paragraph# 芮欧百货地理位置优越，位于上海市静安区精华地段，地处时尚、创意、文化交汇的南京西路，临近拥有百年历史的老上海时尚圣地百乐门，直接与地铁2号线与7号线以及机场航站楼的出口相接。项目周边还有久光百货、恒隆广场、静安嘉里中心等高端购物场所，与芮欧共同呈现最摩登的生活理念，促进时尚生活圈的共荣发展。此外，静安公园亦与芮欧毗邻而居，绿荫环绕的天然景致触手可及。\r\n#Paragraph# 芮欧百货的总面积达40,000平方米，总营业面积为约25,000平方米。项目建筑由国际著名的株式会社久米设计操刀，商场设计由株式会社品浩负责。芮欧的外观设计起源自美丽浪漫的水晶雪球 (Snow Globe)。象征着芮欧是一份特别的礼物，是一个充满美丽的旋律， 联想和记忆的地方。 在这个现代与梦幻邂逅的空间里期待着意想不到的美丽惊喜。时尚且具有人文气息的空间里，处处充满精彩变化，每个楼层都有专属的氛围与特色，巧妙的展现出都会的高雅时尚风格。"
		},{
			Language: "En",
			Topic: "VisitAbout1",
			Content: "#Paragraph# Réel Department Store, with its name deriving from the French word “réel” that means “real” in English, expects to create a stunning shopping experi- ence with a profusion of high-end boutique stores, attentive services, and fantastic creativity, making it a mecca for modern women to enjoy, to show, and to share.\r\n#Paragraph# Ideally situated in the prime location of Jing’an District, Shanghai, Réel Department Store overlooks Nanjing West Road where fashion, culture and originality meet with each other and directly connects with exits of Metro Line 2 and Line 7 as well as the airport terminal. In the neighborhood lies Parliament, the century-old shrine of fashion in old Shanghai, and other high- end shopping malls including Jiuguang Department Store, Plaza 66, and Jing’an Kerry Center, presenting the most modern idea of life and promoting the common prosperity of style living. Adjacent to Jing'an Park, Réel Department Store also enjoys the natural verdancy and luxuriance.\r\n#Paragraph# Réel Department Store covers an area of 40,000 square meters, of which approximately 25,000 square meters are of business use. Designed by the internationally renowned design firm Kume Sekkei for the project construction and Pinhole for the shopping mall, its exterior design originates the concept from the beautiful and romantic Snow Globe, which symbolizes that Réel, as a special gift, is a place full of beautiful melodies, imagination and memories where unexpected surprise awaits you in the space of modern fantasy. Excitement and changes could be found everywhere in the place of fashion and culture, ingeniously showing the metropolitan elegance with atmosphere and style exclusive to each floor."
		},{
			Language: "Ch",
			Topic: "VisitAbout2",
			Content: "#Paragraph# 颠覆传统精品百货的经营模式，打造新颖个性化的购物乐趣！芮欧百货核心理念是创造“现代女性乐为女人的摩登之苑”，集世界时尚之精粹，融入追求卓越的创新与热情、对细节近乎苛求的坚持，营造愉悦的购物享受。\r\n#Paragraph# 芮欧百货力图使消费变成一段充满乐趣、个性、创意与精品的体验。芮欧百货将为时尚女性量身打造美丽的舞台，精采展示优雅的生活方式，并演绎时尚新主张，引领时尚潮流。"
		},{
			Language: "En",
			Topic: "VisitAbout2",
			Content: "#Paragraph# A subversion of the traditional business pattern of boutique department store and a creation of original and personalized shopping experience, Réel Department Store focuses its core idea on creating a “modern mecca for modern women to be happy to be a woman”, with a collection of the world fashion and the innovation and passion of pursuing excellence, almost demanding adherence to details, to make the shopping experience joyful and pleasant.\r\n#Paragraph# Réel Shanghai Department Store aims to make consumption an experience of fun, personality, creativity and quality, tailoring for fashionable women a beautiful stage of showcasing elegant lifestyles, interpreting new ideas of fashion, and leading the fashion trend.\r\n#Paragraph# A total of five floors of shopping themes will be found in Réel Shanghai Department Store. The theme of “Fashion on the Move” for B1 floor creates customers a unique atmosphere of fashion and fantasy with international A-list cosmetics and fashion brands. On the 1F and 2F, “Luxury Classic” gath- ers the famous brands of international fashion and luxury. Avant-garde personality, fashion elements, and personalized brands shape the unique fashion trend of the 3F, where customers will enjoy the distinctive fashion elements and pioneering styles. Then the 4F will highlight the delight and attitude of fashion and life with the most complete range of brands of kid’s apparel and lingerie, building up the sweet space favoring modern women. In this floor, consumers can also enjoy the exquisite moments of slow living and spa services. On the top floor locate sky garden and specialty restaurants. The inter- national food court Réel Kitchen is located on B2 floor, where many world well-known food brands and the Chinese, Japanese, Korean, Vietnamese, Italian, American and other international cuisines are gathered around, making it the first choice for dating or family reunion."
		},{
			Language: "Ch",
			Topic: "VisitAbout3",
			Content: "#Paragraph# 芮欧百货共设五层消费购物主题馆。B1为“时尚零距离”，将国际一线化妆品品牌结合设计感十足的国际时尚潮流品牌，打造出具有时尚感与梦幻美感的独特氛围。1F、2F重现“经典奢华”，汇集国际时尚前端的名品。前卫个性、流行元素、个性化品牌组成了3F独具特色的个性潮流时尚，顾客在这里将独享时尚流行元素，领略时尚先锋的风采。4F则彰显时尚购物的生活情趣与态度，有市场上最齐全的精品童装品牌、独家引进“私密内衣区”的概念，构筑宠爱现代女性的甜蜜空间。在此楼面，消费者还可以享受慢活精致时光与美容服务。顶楼则设有空中花园与特色餐厅。地下二层是Réel Kitchen国际美食广场，聚集了全球多个知名美食品牌，将中式、日式、韩式、越式、意式，美式等各国美食收入囊中。无论是私人约会还是全家团聚，Réel Kitchen都是饕餮食客的首选。"
		},{
			Language: "En",
			Topic: "VisitAbout3",
			Content: "#Paragraph# With inspiration and creativity from all over the world, Réel Shanghai Department Store offers consumers a shopping feast, customized concierge services, unique stylish atmosphere to exclusively enjoy the highly fashionable elements and styles.\r\n#Paragraph# Réel Shanghai Department Store will break the traditional pattern and bring a new concept to China’s retail malls, making it the shopping landmark of fashion, fun, and enjoyable luxury life in Shanghai. Réel Department Store is bound to be the modern mecca for modern women to be happy to be a woman."
		},{
			Language: "Ch",
			Topic: "VisitAbout4",
			Content: "#Paragraph# 芮欧百货集聚了来自世界各地的灵感和创意，让消费者尊享芮欧亲力打造的购物盛宴，提供定制化的礼宾服务，勾勒出独一无二的时尚氛围，让顾客们独享极具时尚的流行元素、领略时尚先锋的风采。\r\n#Paragraph# 芮欧将打破传统的格局，赋予中国零售百货一个全新的概念，成为上海最时尚、最具乐趣与最享受的奢侈生活时尚购物地标，超越传统的精品商场，芮欧百货势将成为现代女性乐为女人的摩登之苑。"
		},{
			Language: "Ch",
			Topic: "VisitLocation",
			Content: "上海市静安区南京西路1601号（常德路交叉口)\n每日10:00AM - 22:00PM\n地铁二号线，静安寺站，4号出口\n地铁七号线，静安寺站，10号出口\n15路、20路、21路、37路、40路、45路、76路、93路、94路、\n113路、315路、321路、323路、327路、330路、506路、\n824路、825路、830路、838路、921路、927路、旅游8号线\n与越洋广场共用停车场. 汽车入口位于常德路上\n停车费用方式 1小时15元，每日最高上限120元\n第二个小时起以半个小时为收费单位，\n收费金额为人民币7.50元/个/半小时\n"
		},{
			Language: "En",
			Topic: "VisitLocation",
			Content: "1601 Nanjing Road (W), Shanghai, P.R.C. 200040\n10:00a.m. to 10:00p.m.\nMetro Line 2, Jin’an si, Exit 4\nMetro Line 7, Jin’an si, Exit 10\n15、20、21、37、40、45、76、93、94、113、315、\n321、323、327、330、506、824、\n825、830、838、 921、927、Tour Line 8\nShare car park with Park Place. Parking entrance on Chang De Road.\n1st hour: RMB 15 \nEvery half hour (after the 1st hour): RMB 7.50 \nDaily maximum: RMB 120\n"
		},{
			Language: "Ch",
			Topic: "VisitReelPlace1",
			Content: "屹立于芮欧百货门口的传世名作，以伟大艺术气息与繁华南京西路相映衬，吸引全世界艺术追随者的关注和赏析，助力芮欧百货成为上海新艺术地标。"
		},{
			Language: "Ch",
			Topic: "VisitReelPlace2",
			Content: "选择富有艺术感的画面装饰整个装置，使之在功能性作用之外增添了一丝文化的韵味。"
		},{
			Language: "Ch",
			Topic: "VisitReelPlace3",
			Content: "郁郁葱葱的绿树环绕造就了繁华静安寺商圈中一片静寂的绿荫，为往来人群提供了舒适的景观一角。"
		},{
			Language: "Ch",
			Topic: "VisitReelPlace4",
			Content: "被各式绿色植栽包围，更有喷泉配以景观灯，使得这毗邻静安公园和Art Bar的宁静之地富有生机。"
		},{
			Language: "Ch",
			Topic: "VisitReelPlace5",
			Content: "连接越洋广场和芮欧百货的设计感极强的回廊，两边伴有各色休闲餐厅和小店，成为附近白领就餐和午后小憩的好去处。"
		},{
			Language: "Ch",
			Topic: "VisitReelPlace6",
			Content: "云集世界各地美食的现代化餐饮集中地，从一层纸五层汇集各国经典菜式，无论是商务宴请亦或是朋友小聚均为佳选。"
		}, {
			Language: "En",
			Topic: "VisitReelPlace1",
			Content: "A1 The Persistence of Memory is a 1931 painting by artist Salvador Dalí, and is one of his most recognizable works.First shown at the Julien Levy Gallery in 1932, the painting has been in the collection of the Museum of Modern Art in New York City since 1934."
		}, {
			Language: "En",
			Topic: "VisitReelPlace2",
			Content: "A2 The Persistence of Memory is a 1931 painting by artist Salvador Dalí, and is one of his most recognizable works.First shown at the Julien Levy Gallery in 1932, the painting has been in the collection of the Museum of Modern Art in New York City since 1934."
		}, {
			Language: "En",
			Topic: "VisitReelPlace3",
			Content: "A3 The Persistence of Memory is a 1931 painting by artist Salvador Dalí, and is one of his most recognizable works.First shown at the Julien Levy Gallery in 1932, the painting has been in the collection of the Museum of Modern Art in New York City since 1934."
		}, {
			Language: "En",
			Topic: "VisitReelPlace4",
			Content: "A4 The Persistence of Memory is a 1931 painting by artist Salvador Dalí, and is one of his most recognizable works.First shown at the Julien Levy Gallery in 1932, the painting has been in the collection of the Museum of Modern Art in New York City since 1934."
		}, {
			Language: "En",
			Topic: "VisitReelPlace5",
			Content: "A5 The Persistence of Memory is a 1931 painting by artist Salvador Dalí, and is one of his most recognizable works.First shown at the Julien Levy Gallery in 1932, the painting has been in the collection of the Museum of Modern Art in New York City since 1934."
		}, {
			Language: "En",
			Topic: "VisitReelPlace6",
			Content: "A6 The Persistence of Memory is a 1931 painting by artist Salvador Dalí, and is one of his most recognizable works.First shown at the Julien Levy Gallery in 1932, the painting has been in the collection of the Museum of Modern Art in New York City since 1934."
		}]);
	});
}