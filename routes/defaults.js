var mongo = require("../utilities/database");

exports.createNews = function(req, res){
	mongo.database.collection("news", function(err, collection){
		collection.insert([{
			Key: "20130601",
			Date: "6月1日 2013",
			HeadNews: true,
			MainImage: "/images/News/20130601/MainSticker.png",
			TitleImage: "/images/News/20130601/HeadLine.png",
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
			MainImage: "/images/News/20130601/MainSticker.png",
			TitleImage: "/images/News/20130601/HeadLineEn.png",
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
	// mongo.database.collection("floor", function(err, collection){
	// 	collection.insert([{
	// 		Language: "Ch",
	// 		Floor: "1F",
	// 		Key: "",
	// 		Title: ""
	// 	}]);
	// })
}