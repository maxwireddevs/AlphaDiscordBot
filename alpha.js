var kanjiarray=["一", "右", "雨", "円", "王", "音", "下", "火", "花", "貝", "学", "気", "九", "休", "玉", "金", "空", "月", "犬", "見", "五", "口", "校", "左", "三", "山", "子", "四", "糸", "字", "耳", "七", "車", "手", "十", "出", "女", "小", "上", "森", "人", "水", "正", "生", "青", "夕", "石", "赤", "千", "川", "先", "早", "草", "足", "村", "大", "男", "竹", "中", "虫", "町", "天", "田", "土", "二", "日", "入", "年", "白", "八", "百", "文", "木", "本", "名", "目", "立", "力", "林", "六", "引", "羽", "雲", "園", "遠", "何", "科", "夏", "家", "歌", "画", "回", "会", "海", "絵", "外", "角", "楽", "活", "間", "丸", "岩", "顔", "汽", "記", "帰", "弓", "牛", "魚", "京", "強", "教", "近", "兄", "形", "計", "元", "言", "原", "戸", "古", "午", "後", "語", "工", "公", "広", "交", "光", "考", "行", "高", "黄", "合", "谷", "国", "黒", "今", "才", "細", "作", "算", "止", "市", "矢", "姉", "思", "紙", "寺", "自", "時", "室", "社", "弱", "首", "秋", "週", "春", "書", "少", "場", "色", "食", "心", "新", "親", "図", "数", "西", "声", "星", "晴", "切", "雪", "船", "線", "前", "組", "走", "多", "太", "体", "台", "地", "池", "知", "茶", "昼", "長", "鳥", "朝", "直", "通", "弟", "店", "点", "電", "刀", "冬", "当", "東", "答", "頭", "同", "道", "読", "内", "南", "肉", "馬", "売", "買", "麦", "半", "番", "父", "風", "分", "聞", "米", "歩", "母", "方", "北", "毎", "妹", "万", "明", "鳴", "毛", "門", "夜", "野", "友", "用", "曜", "来", "里", "理", "話", "悪", "安", "暗", "医", "委", "意", "育", "員", "院", "飲", "運", "泳", "駅", "央", "横", "屋", "温", "化", "荷", "界", "開", "階", "寒", "感", "漢", "館", "岸", "起", "期", "客", "究", "急", "級", "宮", "球", "去", "橋", "業", "曲", "局", "銀", "区", "苦", "具", "君", "係", "軽", "血", "決", "研", "県", "庫", "湖", "向", "幸", "港", "号", "根", "祭", "皿", "仕", "死", "使", "始", "指", "歯", "詩", "次", "事", "持", "式", "実", "写", "者", "主", "守", "取", "酒", "受", "州", "拾", "終", "習", "集", "住", "重", "宿", "所", "暑", "助", "昭", "消", "商", "章", "勝", "乗", "植", "申", "身", "神", "真", "深", "進", "世", "整", "昔", "全", "相", "送", "想", "息", "速", "族", "他", "打", "対", "待", "代", "第", "題", "炭", "短", "談", "着", "注", "柱", "丁", "帳", "調", "追", "定", "庭", "笛", "鉄", "転", "都", "度", "投", "豆", "島", "湯", "登", "等", "動", "童", "農", "波", "配", "倍", "箱", "畑", "発", "反", "坂", "板", "皮", "悲", "美", "鼻", "筆", "氷", "表", "秒", "病", "品", "負", "部", "服", "福", "物", "平", "返", "勉", "放", "味", "命", "面", "問", "役", "薬", "由", "油", "有", "遊", "予", "羊", "洋", "葉", "陽", "様", "落", "流", "旅", "両", "緑", "礼", "列", "練", "路", "和", "愛", "案", "以", "衣", "位", "囲", "胃", "印", "英", "栄", "塩", "億", "加", "果", "貨", "課", "芽", "改", "械", "害", "街", "各", "覚", "完", "官", "管", "関", "観", "願", "希", "季", "紀", "喜", "旗", "器", "機", "議", "求", "泣", "救", "給", "挙", "漁", "共", "協", "鏡", "競", "極", "訓", "軍", "郡", "径", "型", "景", "芸", "欠", "結", "建", "健", "験", "固", "功", "好", "候", "航", "康", "告", "差", "菜", "最", "材", "昨", "札", "刷", "殺", "察", "参", "産", "散", "残", "士", "氏", "史", "司", "試", "児", "治", "辞", "失", "借", "種", "周", "祝", "順", "初", "松", "笑", "唱", "焼", "象", "照", "賞", "臣", "信", "成", "省", "清", "静", "席", "積", "折", "節", "説", "浅", "戦", "選", "然", "争", "倉", "巣", "束", "側", "続", "卒", "孫", "帯", "隊", "達", "単", "置", "仲", "貯", "兆", "腸", "低", "底", "停", "的", "典", "伝", "徒", "努", "灯", "堂", "働", "特", "得", "毒", "熱", "念", "敗", "梅", "博", "飯", "飛", "費", "必", "票", "標", "不", "夫", "付", "府", "副", "粉", "兵", "別", "辺", "変", "便", "包", "法", "望", "牧", "末", "満", "未", "脈", "民", "無", "約", "勇", "要", "養", "浴", "利", "陸", "良", "料", "量", "輪", "類", "令", "冷", "例", "歴", "連", "老", "労", "録", "圧", "移", "因", "永", "営", "衛", "易", "益", "液", "演", "応", "往", "桜", "恩", "可", "仮", "価", "河", "過", "賀", "快", "解", "格", "確", "額", "刊", "幹", "慣", "眼", "基", "寄", "規", "技", "義", "逆", "久", "旧", "居", "許", "境", "均", "禁", "句", "群", "経", "潔", "件", "券", "険", "検", "限", "現", "減", "故", "個", "護", "効", "厚", "耕", "鉱", "構", "興", "講", "混", "査", "再", "災", "妻", "採", "際", "在", "財", "罪", "雑", "酸", "賛", "支", "志", "枝", "師", "資", "飼", "示", "似", "識", "質", "舎", "謝", "授", "修", "述", "術", "準", "序", "招", "承", "証", "条", "状", "常", "情", "織", "職", "制", "性", "政", "勢", "精", "製", "税", "責", "績", "接", "設", "舌", "絶", "銭", "祖", "素", "総", "造", "像", "増", "則", "測", "属", "率", "損", "退", "貸", "態", "団", "断", "築", "張", "提", "程", "適", "敵", "統", "銅", "導", "徳", "独", "任", "燃", "能", "破", "犯", "判", "版", "比", "肥", "非", "備", "俵", "評", "貧", "布", "婦", "富", "武", "復", "複", "仏", "編", "弁", "保", "墓", "報", "豊", "防", "貿", "暴", "務", "夢", "迷", "綿", "輸", "余", "預", "容", "略", "留", "領", "異", "遺", "域", "宇", "映", "延", "沿", "我", "灰", "拡", "革", "閣", "割", "株", "干", "巻", "看", "簡", "危", "机", "揮", "貴", "疑", "吸", "供", "胸", "郷", "勤", "筋", "系", "敬", "警", "劇", "激", "穴", "絹", "権", "憲", "源", "厳", "己", "呼", "誤", "后", "孝", "皇", "紅", "降", "鋼", "刻", "穀", "骨", "困", "砂", "座", "済", "裁", "策", "冊", "蚕", "至", "私", "姿", "視", "詞", "誌", "磁", "射", "捨", "尺", "若", "樹", "収", "宗", "就", "衆", "従", "縦", "縮", "熟", "純", "処", "署", "諸", "除", "将", "傷", "障", "城", "蒸", "針", "仁", "垂", "推", "寸", "盛", "聖", "誠", "宣", "専", "泉", "洗", "染", "善", "奏", "窓", "創", "装", "層", "操", "蔵", "臓", "存", "尊", "宅", "担", "探", "誕", "段", "暖", "値", "宙", "忠", "著", "庁", "頂", "潮", "賃", "痛", "展", "討", "党", "糖", "届", "難", "乳", "認", "納", "脳", "派", "拝", "背", "肺", "俳", "班", "晩", "否", "批", "秘", "腹", "奮", "並", "陛", "閉", "片", "補", "暮", "宝", "訪", "亡", "忘", "棒", "枚", "幕", "密", "盟", "模", "訳", "郵", "優", "幼", "欲", "翌", "乱", "卵", "覧", "裏", "律", "臨", "朗", "論", "亜", "哀", "挨", "曖", "握", "扱", "宛", "嵐", "依", "威", "為", "畏", "尉", "萎", "偉", "椅", "彙", "違", "維", "慰", "緯", "壱", "逸", "茨", "芋", "咽", "姻", "淫", "陰", "隠", "韻", "唄", "鬱", "畝", "浦", "詠", "影", "鋭", "疫", "悦", "越", "謁", "閲", "炎", "怨", "宴", "媛", "援", "煙", "猿", "鉛", "縁", "艶", "汚", "凹", "押", "旺", "欧", "殴", "翁", "奥", "岡", "憶", "臆", "虞", "乙", "俺", "卸", "穏", "佳", "苛", "架", "華", "菓", "渦", "嫁", "暇", "禍", "靴", "寡", "箇", "稼", "蚊", "牙", "瓦", "雅", "餓", "介", "戒", "怪", "拐", "悔", "皆", "塊", "楷", "潰", "壊", "懐", "諧", "劾", "崖", "涯", "慨", "蓋", "該", "概", "骸", "垣", "柿", "核", "殻", "郭", "較", "隔", "獲", "嚇", "穫", "岳", "顎", "掛", "潟", "括", "喝", "渇", "葛", "滑", "褐", "轄", "且", "釜", "鎌", "刈", "甘", "汗", "缶", "肝", "冠", "陥", "乾", "勘", "患", "貫", "喚", "堪", "換", "敢", "棺", "款", "閑", "勧", "寛", "歓", "監", "緩", "憾", "還", "環", "韓", "艦", "鑑", "含", "玩", "頑", "企", "伎", "岐", "忌", "奇", "祈", "軌", "既", "飢", "鬼", "亀", "幾", "棋", "棄", "毀", "畿", "輝", "騎", "宜", "偽", "欺", "儀", "戯", "擬", "犠", "菊", "吉", "喫", "詰", "却", "脚", "虐", "及", "丘", "朽", "臼", "糾", "嗅", "窮", "巨", "拒", "拠", "虚", "距", "御", "凶", "叫", "狂", "享", "況", "峡", "挟", "狭", "恐", "恭", "脅", "矯", "響", "驚", "仰", "暁", "凝", "巾", "斤", "菌", "琴", "僅", "緊", "錦", "謹", "襟", "吟", "駆", "惧", "愚", "偶", "遇", "隅", "串", "屈", "掘", "窟", "熊", "繰", "勲", "薫", "刑", "茎", "契", "恵", "啓", "掲", "渓", "蛍", "傾", "携", "継", "詣", "慶", "憬", "稽", "憩", "鶏", "迎", "鯨", "隙", "撃", "桁", "傑", "肩", "倹", "兼", "剣", "拳", "軒", "圏", "堅", "嫌", "献", "遣", "賢", "謙", "鍵", "繭", "顕", "懸", "幻", "玄", "弦", "舷", "股", "虎", "孤", "弧", "枯", "雇", "誇", "鼓", "錮", "顧", "互", "呉", "娯", "悟", "碁", "勾", "孔", "巧", "甲", "江", "坑", "抗", "攻", "更", "拘", "肯", "侯", "恒", "洪", "荒", "郊", "香", "貢", "控", "梗", "喉", "慌", "硬", "絞", "項", "溝", "綱", "酵", "稿", "衡", "購", "乞", "拷", "剛", "傲", "豪", "克", "酷", "獄", "駒", "込", "頃", "昆", "恨", "婚", "痕", "紺", "魂", "墾", "懇", "佐", "沙", "唆", "詐", "鎖", "挫", "采", "砕", "宰", "栽", "彩", "斎", "債", "催", "塞", "歳", "載", "埼", "剤", "崎", "削", "柵", "索", "酢", "搾", "錯", "咲", "刹", "拶", "撮", "擦", "桟", "惨", "傘", "斬", "暫", "旨", "伺", "刺", "祉", "肢", "施", "恣", "脂", "紫", "嗣", "雌", "摯", "賜", "諮", "侍", "滋", "慈", "餌", "璽", "鹿", "軸", "𠮟 ", "疾", "執", "湿", "嫉", "漆", "芝", "赦", "斜", "煮", "遮", "邪", "蛇", "酌", "釈", "爵", "寂", "朱", "狩", "殊", "珠", "腫", "趣", "寿", "呪", "需", "儒", "囚", "舟", "秀", "臭", "袖", "羞", "愁", "酬", "醜", "蹴", "襲", "汁", "充", "柔", "渋", "銃", "獣", "叔", "淑", "粛", "塾", "俊", "瞬", "旬", "巡", "盾", "准", "殉", "循", "潤", "遵", "庶", "緒", "如", "叙", "徐", "升", "召", "匠", "床", "抄", "肖", "尚", "昇", "沼", "宵", "症", "祥", "称", "渉", "紹", "訟", "掌", "晶", "焦", "硝", "粧", "詔", "奨", "詳", "彰", "憧", "衝", "償", "礁", "鐘", "丈", "冗", "浄", "剰", "畳", "縄", "壌", "嬢", "錠", "譲", "醸", "拭", "殖", "飾", "触", "嘱", "辱", "尻", "伸", "芯", "辛", "侵", "津", "唇", "娠", "振", "浸", "紳", "診", "寝", "慎", "審", "震", "薪", "刃", "尽", "迅", "甚", "陣", "尋", "腎", "須", "吹", "炊", "帥", "粋", "衰", "酔", "遂", "睡", "穂", "随", "髄", "枢", "崇", "据", "杉", "裾", "瀬", "是", "井", "姓", "征", "斉", "牲", "凄", "逝", "婿", "誓", "請", "醒", "斥", "析", "脊", "隻", "惜", "戚", "跡", "籍", "拙", "窃", "摂", "仙", "占", "扇", "栓", "旋", "煎", "羨", "腺", "詮", "践", "箋", "潜", "遷", "薦", "繊", "鮮", "禅", "漸", "膳", "繕", "狙", "阻", "租", "措", "粗", "疎", "訴", "塑", "遡", "礎", "双", "壮", "荘", "捜", "挿", "桑", "掃", "曹", "曽", "爽", "喪", "痩", "葬", "僧", "遭", "槽", "踪", "燥", "霜", "騒", "藻", "憎", "贈", "即", "促", "捉", "俗", "賊", "遜", "汰", "妥", "唾", "堕", "惰", "駄", "耐", "怠", "胎", "泰", "堆", "袋", "逮", "替", "滞", "戴", "滝", "択", "沢", "卓", "拓", "託", "濯", "諾", "濁", "但", "脱", "奪", "棚", "誰", "丹", "旦", "胆", "淡", "嘆", "端", "綻", "鍛", "弾", "壇", "恥", "致", "遅", "痴", "稚", "緻", "畜", "逐", "蓄", "秩", "窒", "嫡", "沖", "抽", "衷", "酎", "鋳", "駐", "弔", "挑", "彫", "眺", "釣", "貼", "超", "跳", "徴", "嘲", "澄", "聴", "懲", "勅", "捗", "沈", "珍", "朕", "陳", "鎮", "椎", "墜", "塚", "漬", "坪", "爪", "鶴", "呈", "廷", "抵", "邸", "亭", "貞", "帝", "訂", "逓", "偵", "堤", "艇", "締", "諦", "泥", "摘", "滴", "溺", "迭", "哲", "徹", "撤", "添", "塡", "殿", "斗", "吐", "妬", "途", "渡", "塗", "賭", "奴", "怒", "到", "逃", "倒", "凍", "唐", "桃", "透", "悼", "盗", "陶", "塔", "搭", "棟", "痘", "筒", "稲", "踏", "謄", "藤", "闘", "騰", "洞", "胴", "瞳", "峠", "匿", "督", "篤", "栃", "凸", "突", "屯", "豚", "頓", "貪", "鈍", "曇", "丼", "那", "奈", "梨", "謎", "鍋", "軟", "尼", "弐", "匂", "虹", "尿", "妊", "忍", "寧", "捻", "粘", "悩", "濃", "把", "覇", "婆", "罵", "杯", "排", "廃", "輩", "培", "陪", "媒", "賠", "伯", "拍", "泊", "迫", "剝", "舶", "薄", "漠", "縛", "爆", "箸", "肌", "鉢", "髪", "伐", "抜", "罰", "閥", "氾", "帆", "汎", "伴", "阪", "畔", "般", "販", "斑", "搬", "煩", "頒", "範", "繁", "藩", "蛮", "盤", "妃", "彼", "披", "卑", "疲", "被", "扉", "碑", "罷", "避", "尾", "眉", "微", "膝", "肘", "匹", "泌", "姫", "漂", "苗", "描", "猫", "浜", "賓", "頻", "敏", "瓶", "扶", "怖", "阜", "附", "訃", "赴", "浮", "符", "普", "腐", "敷", "膚", "賦", "譜", "侮", "舞", "封", "伏", "幅", "覆", "払", "沸", "紛", "雰", "噴", "墳", "憤", "丙", "併", "柄", "塀", "幣", "弊", "蔽", "餅", "壁", "璧", "癖", "蔑", "偏", "遍", "哺", "捕", "舗", "募", "慕", "簿", "芳", "邦", "奉", "抱", "泡", "胞", "俸", "倣", "峰", "砲", "崩", "蜂", "飽", "褒", "縫", "乏", "忙", "坊", "妨", "房", "肪", "某", "冒", "剖", "紡", "傍", "帽", "貌", "膨", "謀", "頰", "朴", "睦", "僕", "墨", "撲", "没", "勃", "堀", "奔", "翻", "凡", "盆", "麻", "摩", "磨", "魔", "昧", "埋", "膜", "枕", "又", "抹", "慢", "漫", "魅", "岬", "蜜", "妙", "眠", "矛", "霧", "娘", "冥", "銘", "滅", "免", "麺", "茂", "妄", "盲", "耗", "猛", "網", "黙", "紋", "冶", "弥", "厄", "躍", "闇", "喩", "愉", "諭", "癒", "唯", "幽", "悠", "湧", "猶", "裕", "雄", "誘", "憂", "融", "与", "誉", "妖", "庸", "揚", "揺", "溶", "腰", "瘍", "踊", "窯", "擁", "謡", "抑", "沃", "翼", "拉", "裸", "羅", "雷", "頼", "絡", "酪", "辣", "濫", "藍", "欄", "吏", "痢", "履", "璃", "離", "慄", "柳", "竜", "粒", "隆", "硫", "侶", "虜", "慮", "了", "涼", "猟", "陵", "僚", "寮", "療", "瞭", "糧", "厘", "倫", "隣", "瑠", "涙", "累", "塁", "励", "戻", "鈴", "零", "霊", "隷", "齢", "麗", "暦", "劣", "烈", "裂", "恋", "廉", "錬", "呂", "炉", "賂", "露", "弄", "郎", "浪", "廊", "楼", "漏", "籠", "麓", "賄", "脇", "惑", "枠", "湾", "腕" ];
var readarray=["ichi, itsu, hito, hito-tsu", "u, yū, migi", "u, ame, (ama)", "en, maru-i", "ō", "on, in, oto, ne", "ka, ge, shita, shimo, moto, sa-geru, sa-garu, kuda-ru, kuda-su, kuda-saru, o-rosu, o-riru", "ka, hi, (ho)", "ka, hana", "kai", "gaku, mana-bu", "ki, ke", "kyū, ku, kokono, kokono-tsu", "kyū, yasu-mu, yasu-maru, yasu-meru", "gyoku, tama", "kin, kon, kane, (kana)", "kū, sora, a-ku, a-keru, kara", "getsu, gatsu, tsuki", "ken, inu", "ken, mi-ru, mi-eru, mi-seru", "go, itsu, itsu-tsu", "kō, ku, kuchi", "kō", "sa, hidari", "san, mi, mi-tsu, mi'-tsu", "san, yama", "shi, su, ko", "shi, yo, yo-tsu, yo'-tsu, yon", "shi, ito", "ji, aza", "ji, mimi", "shichi, nana, nana-tsu, (nano)", "sha, kuruma", "shu, te, (ta)", "jū, ji', too, to", "shutsu, (sui), de-ru, da-su", "jo, nyo, (nyō), onna, me", "shō, chii-sai, ko, o", "jō, (shō), ue, (uwa), kami, a-geru, a-garu, nobo-ru, nobo-seru, nobo-su", "shin, mori", "jin, nin, hito", "sui, mizu", "sei, shō, tada-shii, tada-su, masa", "sei, shō, i-kiru, i-kasu, i-keru, u-mareru, u-mu, o-u, ha-eru, ha-yasu, ki, nama", "sei, (shō), ao, ao-i", "seki, yū", "seki, (shaku), (koku), ishi", "seki, (shaku), aka, aka-i, aka-ramu, aka-rameru", "sen, chi", "sen, kawa", "sen, saki", "sō, (sa'), haya-i, haya-maru, haya-meru", "sō, kusa", "soku, ashi, ta-riru, ta-ru, ta-su", "son, mura", "dai, tai, oo, oo-kii, oo-ini", "dan, nan, otoko", "chiku, take", "chū, (jū), naka", "chū, mushi", "chō, machi", "ten, ame, (ama)", "den, ta", "do, to, tsuchi", "ni, futa, futa-tsu", "nichi, jitsu, hi, ka", "nyū, i-ru, i-reru, hai-ru", "nen, toshi", "haku, byaku, shiro, (shira), shiro-i", "hachi, ya, ya-tsu, ya'-tsu, (yō)", "hyaku", "bun, mon, fumi", "boku, moku, ki, (ko)", "hon, moto", "mei, myō, na", "moku, (boku), me, (ma)", "ritsu, (ryū), ta-tsu, ta-teru", "ryoku, riki, chikara", "rin, hayashi", "roku, mu, mu-tsu, mu'-tsu, (mui)", "in, hi-ku, hi-keru", "u, ha, hane", "un, kumo", "en, sono", "en, (on), too-i", "ka, nani, (nan)", "ka", "ka, (ge), natsu", "ka, ke, ie, ya", "ka, uta, uta-u", "ga, kaku", "kai, (e), mawa-ru, mawa-su", "kai, e, a-u", "kai, umi", "kai, e", "gai, ge, soto, hoka, hazu-su, hazu-reru", "kaku, kado, tsuno", "gaku, raku, tano-shii, tano-shimu", "katsu", "kan, ken, aida, ma", "gan, maru, maru-i, maru-meru", "gan, iwa", "gan, kao", "ki", "ki, shiru-su", "ki, kae-ru, kae-su", "kyū, yumi", "gyū, ushi", "gyo, uo, sakana", "kyō, kei", "kyō, gō, tsuyo-i, tsuyo-maru, tsuyo-meru, shi-iru", "kyō, oshi-eru, oso-waru", "kin, chika-i", "kei, (kyō), ani", "kei, gyō, kata, katachi", "kei, haka-ru, haka-rau", "gen, gan, moto", "gen, gon, i-u, koto", "gen, hara", "ko, to", "ko, furu-i, furu-su", "go", "go, kō, nochi, ushi-ro, ato, oku-reru", "go, kata-ru, kata-rau", "kō, ku", "kō, ooyake", "kō, hiro-i, hiro-maru, hiro-meru, hiro-garu, hiro-geru", "kō, maji-waru, maji-eru, ma-jiru, ma-zaru, ma-zeru, ka-u, ka-wasu", "kō, hika-ru, hikari", "kō, kanga-eru", "kō, gyō, (an), i-ku, yu-ku, okona-u", "kō, taka-i, taka, taka-maru, taka-meru", "kō, ō, ki, (ko)", "gō, ga', (ka'), a-u, a-wasu, a-waseru", "koku, tani", "koku, kuni", "koku, kuro, kuro-i", "kon, kin, ima", "sai", "sai, hoso-i, hoso-ru, koma-ka, koma-kai", "saku, sa, tsuku-ru", "san", "shi, to-maru, to-meru", "shi, ichi", "shi, ya", "shi, ane", "shi, omo-u", "shi, kami", "ji, tera", "ji, shi, mizuka-ra", "ji, toki", "shitsu, muro", "sha, yashiro", "jaku, yowa-i, yowa-ru, yowa-maru, yowa-meru", "shu, kubi", "shū, aki", "shū", "shun, haru", "sho, ka-ku", "shō, suku-nai, suko-shi", "jō, ba", "shoku, shiki, iro", "shoku, (jiki), ku-u, ku-rau, ta-beru", "shin, kokoro", "shin, atara-shii, ara-ta, nii", "shin, oya, shita-shii, shita-shimu", "zu, to, haka-ru", "sū, (su), kazu, kazo-eru", "sei, sai, nishi", "sei, (shō), koe, (kowa)", "sei, (shō), hoshi", "sei, ha-reru, ha-rasu", "setsu, (sai), ki-ru, ki-reru", "setsu, yuki", "sen, fune, (funa)", "sen", "zen, mae", "so, ku-mu, kumi", "sō, hashi-ru", "ta, oo-i", "tai, ta, futo-i, futo-ru", "tai, tei, karada", "dai, tai", "chi, ji", "chi, ike", "chi, shi-ru", "cha, sa", "chū, hiru", "chō, naga-i", "chō, tori", "chō, asa", "choku, jiki, tada-chini, nao-su, nao-ru", "tsū, (tsu), too-ru, too-su, kayo-u", "tei, (dai), (de), otōto", "ten, mise", "ten", "den", "tō, katana", "tō, fuyu", "tō, a-taru, a-teru", "tō, higashi", "tō, kota-eru, kota-e", "tō, zu, (to), atama, kashira", "dō, ona-ji", "dō, (tō), michi", "doku, toku, (tō), yo-mu", "nai, (dai), uchi", "nan, (na), minami", "niku", "ba, uma, (ma)", "bai, u-ru, u-reru", "bai, ka-u", "baku, mugi", "han, naka-ba", "ban", "fu, chichi", "fū, (fu), kaze, (kaza)", "bun, fun, bu, wa-keru, wa-kareru, wa-karu, wa-katsu", "bun, mon, ki-ku, ki-koeru", "bei, mai, kome", "ho, bu, (fu), aru-ku, ayu-mu", "bo, haha", "hō, kata", "hoku, kita", "mai", "mai, imōto", "man, ban", "mei, myō, a-kari, aka-rui, aka-rumu, aka-ramu, aki-raka, a-keru, a-ku, a-kuru, a-kasu", "mei, na-ku, na-ru, na-rasu", "mō, ke", "mon, kado", "ya, yo, yoru", "ya, no", "yū, tomo", "yō, mochi-iru", "yō", "rai, ku-ru, kita-ru, kita-su", "ri, sato", "ri", "wa, hana-su, hanashi", "aku, o, waru-i", "an, yasu-i", "an, kura-i", "i", "i, yuda-neru", "i", "iku, soda-tsu, soda-teru, haguku-mu", "in", "in", "in, no-mu", "un, hako-bu", "ei, oyo-gu", "eki", "ō", "ō, yoko", "oku, ya", "on, atata-ka, atata-kai, atata-maru, atata-meru", "ka, ke, ba-keru, ba-kasu", "ka, ni", "kai", "kai, hira-ku, hira-keru, a-ku, a-keru", "kai", "kan, samu-i", "kan", "kan", "kan, yakata", "gan, kishi", "ki, o-kiru, o-koru, o-kosu", "ki, (go)", "kyaku, kaku", "kyū, kiwa-meru", "kyū, iso-gu", "kyū", "kyū, gū, (ku), miya", "kyū, tama", "kyo, ko, sa-ru", "kyō, hashi", "gyō, gō, waza", "kyoku, ma-garu, ma-geru", "kyoku", "gin", "ku", "ku, kuru-shii, kuru-shimu, kuru-shimeru, niga-i, niga-ru", "gu", "kun, kimi", "kei, kaka-ru, kakari", "kei, karu-i, karo-yaka", "ketsu, chi", "ketsu, ki-meru, ki-maru", "ken, to-gu", "ken", "ko, (ku)", "ko, mizūmi", "kō, mu-ku, mu-keru, mu-kau, mu-kō", "kō, saiwa-i, sachi, shiawa-se", "kō, minato", "gō", "kon, ne", "sai, matsu-ru, matsu-ri", "sara", "shi, (ji), tsuka-eru", "shi, shi-nu", "shi, tsuka-u", "shi, haji-meru, haji-maru", "shi, yubi, sa-su", "shi, ha", "shi", "ji, shi, tsu-gu, tsugi", "ji, (zu), koto", "ji, mo-tsu", "shiki", "jitsu, mi, mino-ru", "sha, utsu-su, utsu-ru", "sha, mono", "shu, (su), nushi, omo", "shu, (su), mamo-ru, mo-ri", "shu, to-ru", "shu, sake, (saka)", "ju, u-keru, u-karu", "shū, su", "shū, jū, hiro-u", "shū, o-waru, o-eru", "shū, nara-u", "shū, atsu-maru, atsu-meru, tsudo-u", "jū, su-mu, su-mau", "jū, chō, e, omo-i, kasa-neru, kasa-naru", "shuku, yado, yado-ru, yado-su", "sho, tokoro", "sho, atsu-i", "jo, tasu-keru, tasu-karu, suke", "shō", "shō, ki-eru, ke-su", "shō, akina-u", "shō", "shō, ka-tsu, masa-ru", "jō, no-ru, no-seru", "shoku, u-eru, u-waru", "shin, mō-su", "shin, mi", "shin, jin, kami, (kan), (kō)", "shin, ma", "shin, fuka-i, fuka-maru, fuka-meru", "shin, susu-mu, susu-meru", "sei, se, yo", "sei, totono-eru, totono-u", "seki, (shaku), mukashi", "zen, matta-ku, sube-te", "sō, shō, ai", "sō, oku-ru", "sō, (so)", "soku, iki", "soku, haya-i, haya-meru, haya-maru, sumi-yaka", "zoku", "ta, hoka", "da, u-tsu", "tai, tsui", "tai, ma-tsu", "dai, tai, ka-waru, ka-eru, yo, shiro", "dai", "dai", "tan, sumi", "tan, mijika-i", "dan", "chaku, (jaku), ki-ru, ki-seru, tsu-ku, tsu-keru", "chū, soso-gu", "chū, hashira", "chō, tei", "chō", "chō, shira-beru, totono-u, totono-eru", "tsui, o-u", "tei, jō, sada-meru, sada-maru, sada-ka", "tei, niwa", "teki, fue", "tetsu", "ten, koro-garu, koro-geru, koro-gasu, koro-bu", "to, tsu, miyako", "do, (to), (taku), tabi", "tō, na-geru", "tō, (zu), mame", "tō, shima", "tō, yu", "tō, to, nobo-ru", "tō, hito-shii", "dō, ugo-ku, ugo-kasu", "dō, warabe", "nō", "ha, nami", "hai, kuba-ru", "bai", "hako", "hata, hatake", "hatsu, hotsu", "han, (hon), (tan), so-ru, so-rasu", "han, saka", "han, ban, ita", "hi, kawa", "hi, kana-shii, kana-shimu", "bi, utsuku-shii", "bi, hana", "hitsu, fude", "hyō, koori, hi", "hyō, omote, arawa-su, arawa-reru", "byō", "byō, (hei), ya-mu, yamai", "hin, shina", "fu, ma-keru, ma-kasu, o-u", "bu", "fuku", "fuku", "butsu, motsu, mono", "hei, byō, tai-ra, hira", "hen, kae-su, kae-ru", "ben", "hō, hana-su, hana-tsu, hana-reru, hō-ru", "mi, aji, aji-wau", "mei, myō, inochi", "men, omo, omote, tsura", "mon, to-u, to-i, (ton)", "yaku, eki", "yaku, kusuri", "yu, yū, (yui), yoshi", "yu, abura", "yū, u, a-ru", "yū, (yu), aso-bu", "yo", "yō, hitsuji", "yō", "yō, ha", "yō", "yō, sama", "raku, o-chiru, o-tosu", "ryū, (ru), naga-reru, naga-su", "ryo, tabi", "ryō", "ryoku, (roku), midori", "rei, rai", "retsu", "ren, ne-ru", "ro, ji", "wa, (o), yawa-ragu, yawa-rageru, nago-mu, nago-yaka", "ai", "an", "i", "i, koromo", "i, kurai", "i, kako-mu, kako-u", "i", "in, shirushi", "ei", "ei, saka-eru, ha-e, ha-eru", "en, shio", "oku", "ka, kuwa-eru, kuwa-waru", "ka, ha-tasu, ha-teru, ha-te", "ka", "ka", "ga, me", "kai, arata-meru, arata-maru", "kai", "gai", "gai, (kai), machi", "kaku, onoono", "kaku, obo-eru, sa-masu, sa-meru", "kan", "kan", "kan, kuda", "kan, seki, kaka-waru", "kan", "gan, nega-u", "ki", "ki", "ki", "ki, yoroko-bu", "ki, hata", "ki, utsuwa", "ki, hata", "gi", "kyū, moto-meru", "kyū, na-ku", "kyū, suku-u", "kyū", "kyo, a-geru, a-garu", "gyo, ryō", "kyō, tomo", "kyō", "kyō, kagami", "kyō, kei, kiso-u, se-ru", "kyoku, goku, kiwa-meru, kiwa-maru, kiwa-mi", "kun", "gun", "gun", "kei", "kei, kata", "kei", "gei", "ketsu, ka-keru, ka-ku", "ketsu, musu-bu, yu-u, yu-waeru", "ken, (kon), ta-teru, ta-tsu", "ken, suko-yaka", "ken, (gen)", "ko, kata-meru, kata-maru, kata-i", "kō, (ku)", "kō, kono-mu, su-ku", "kō, sōrō", "kō", "kō", "koku, tsu-geru", "sa, sa-su", "sai, na", "sai, motto-mo", "zai", "saku", "satsu, fuda", "satsu, su-ru", "satsu, (sai), (setsu), koro-su", "satsu", "san, mai-ru", "san, u-mu, u-mareru, ubu", "san, chi-ru, chi-rasu, chi-rakasu, chi-rakaru", "zan, noko-ru, noko-su", "shi", "shi, uji", "shi", "shi", "shi, kokoro-miru, tame-su", "ji, (ni)", "ji, chi, osa-meru, osa-maru, nao-ru, nao-su", "ji, ya-meru", "shitsu, ushina-u", "shaku, ka-riru", "shu, tane", "shū, mawa-ri", "shuku, (shū), iwa-u", "jun", "sho, haji-me, haji-mete, hatsu, ui, so-meru", "shō, matsu", "shō, wara-u, e-mu", "shō, tona-eru", "shō, ya-ku, ya-keru", "shō, zō", "shō, te-ru, te-rasu, te-reru", "shō", "shin, jin", "shin", "sei, (jō), na-ru, na-su", "sei, shō, kaeri-miru, habu-ku", "sei, (shō), kiyo-i, kiyo-maru, kiyo-meru", "sei, (jō), shizu, shizu-ka, shizu-maru, shizu-meru", "seki", "seki, tsu-mu, tsu-moru", "setsu, o-ru, ori, o-reru", "setsu, (sechi), fushi", "setsu, (zei), to-ku", "sen, asa-i", "sen, ikusa, tataka-u", "sen, era-bu", "zen, nen", "sō, araso-u", "sō, kura", "sō, su", "soku, taba", "soku, gawa", "zoku, tsuzu-ku, tsuzu-keru", "sotsu", "son, mago", "tai, o-biru, obi", "tai", "tatsu", "tan", "chi, o-ku", "chū, naka", "cho", "chō, kiza-su, kiza-shi", "chō", "tei, hiku-i, hiku-meru, hiku-maru", "tei, soko", "tei", "teki, mato", "ten", "den, tsuta-waru, tsuta-eru, tsuta-u", "to", "do, tsuto-meru", "tō, hi", "dō", "dō, hatara-ku", "toku", "toku, e-ru, u-ru", "doku", "netsu, atsu-i", "nen", "hai, yabu-reru", "bai, ume", "haku, (baku)", "han, meshi", "hi, to-bu, to-basu", "hi, tsui-yasu, tsui-eru", "hitsu, kanara-zu", "hyō", "hyō", "fu, bu", "fu, (fū), otto", "fu, tsu-keru, tsu-ku", "fu", "fuku", "fun, ko, kona", "hei, hyō", "betsu, waka-reru", "hen, ata-ri, be", "hen, ka-waru, ka-eru", "ben, bin, tayo-ri", "hō, tsutsu-mu", "hō, (ha'), (ho')", "bō, mō, nozo-mu", "boku, maki", "matsu, batsu, sue", "man, mi-chiru, mi-tasu", "mi", "myaku", "min, tami", "mu, bu, na-i", "yaku", "yū, isa-mu", "yō, kaname, i-ru", "yō, yashina-u", "yoku, a-biru, a-biseru", "ri, ki-ku", "riku", "ryō, yo-i", "ryō", "ryō, haka-ru", "rin, wa", "rui, tagu-i", "rei", "rei, tsume-tai, hi-eru, hi-ya, hi-yasu, hi-yakasu, sa-meru, sa-masu", "rei, tato-eru", "reki", "ren, tsura-naru, tsura-neru, tsu-reru", "rō, o-iru, fu-keru", "rō", "roku", "atsu", "i, utsu-ru, utsu-su", "in, yo-ru", "ei, naga-i", "ei, itona-mu", "ei", "eki, i, yasa-shii", "eki, (yaku)", "eki", "en", "ō, kota-eru", "ō", "ō, sakura", "on", "ka", "ka, (ke), kari", "ka, atai", "ka, kawa", "ka, su-giru, su-gosu, ayama-tsu, ayama-chi", "ga", "kai, kokoroyo-i", "kai, ge, to-ku, to-kasu, to-keru", "kaku, (kō)", "kaku, tashi-ka, tashi-kameru", "gaku, hitai", "kan", "kan, miki", "kan, na-reru, na-rasu", "gan, (gen), manako", "ki, moto, motoi", "ki, yo-ru, yo-seru", "ki", "gi, waza", "gi", "gyaku, saka, saka-rau", "kyū, (ku), hisa-shii", "kyū", "kyo, i-ru", "kyo, yuru-su", "kyō, (kei), sakai", "kin", "kin", "ku", "gun, mu-reru, mu-re, (mura)", "kei, kyō, he-ru", "ketsu, isagiyo-i", "ken", "ken", "ken, kewa-shii", "ken", "gen, kagi-ru", "gen, arawa-reru, arawa-su", "gen, he-ru, he-rasu", "ko, yue", "ko", "go", "kō, ki-ku", "kō, atsu-i", "kō, tagaya-su", "kō", "kō, kama-eru, kama-u", "kō, kyō, oko-ru, oko-su", "kō", "kon, ma-jiru, ma-zaru, ma-zeru, ko-mu", "sa", "sai, (sa), futata-bi", "sai, wazawa-i", "sai, tsuma", "sai, to-ru", "sai, kiwa", "zai, a-ru", "zai, (sai)", "zai, tsumi", "zatsu, zō", "san, su-i", "san", "shi, sasa-eru", "shi, kokoroza-su, kokorozashi", "shi, eda", "shi", "shi", "shi, ka-u", "ji, shi, shime-su", "ji, ni-ru", "shiki", "shitsu, shichi, (chi)", "sha", "sha, ayama-ru", "ju, sazu-keru, sazu-karu", "shū, (shu), osa-meru, osa-maru", "jutsu, no-beru", "jutsu", "jun", "jo", "shō, mane-ku", "shō, uketamawa-ru", "shō", "jō", "jō", "jō, tsune, toko", "jō, (sei), nasa-ke", "shoku, shiki, o-ru", "shoku", "sei", "sei, shō", "sei, (shō), matsurigoto", "sei, ikio-i", "sei, (shō)", "sei", "zei", "seki, se-meru", "seki", "setsu, tsu-gu", "setsu, mō-keru", "zetsu, shita", "zetsu, ta-eru, ta-yasu, ta-tsu", "sen, zeni", "so", "so, su", "sō", "zō, tsuku-ru", "zō", "zō, ma-su, fu-eru, fu-yasu", "soku", "soku, haka-ru", "zoku", "sotsu, ritsu, hiki-iru", "son, soko-nau, soko-neru", "tai, shirizo-ku, shirizo-keru", "tai, ka-su", "tai", "dan, (ton)", "dan, ta-tsu, kotowa-ru", "chiku, kizu-ku", "chō, ha-ru", "tei, sa-geru", "tei, hodo", "teki", "teki, kataki", "tō, su-beru", "dō", "dō, michibi-ku", "toku", "doku, hito-ri", "nin, maka-seru, maka-su", "nen, mo-eru, mo-yasu, mo-su", "nō", "ha, yabu-ru, yabu-reru", "han, oka-su", "han, ban", "han", "hi, kura-beru", "hi, ko-eru, koe, ko-yasu, ko-yashi", "hi", "bi, sona-eru, sona-waru", "hyō, tawara", "hyō", "hin, bin, mazu-shii", "fu, nuno", "fu", "fu, (fū), to-mu, tomi", "bu, mu", "fuku", "fuku", "butsu, hotoke", "hen, a-mu", "ben", "ho, tamo-tsu", "bo, haka", "hō, muku-iru", "hō, yuta-ka", "bō, fuse-gu", "bō", "bō, (baku), aba-ku, aba-reru", "mu, tsuto-meru, tsuto-maru", "mu, yume", "mei, mayo-u", "men, wata", "yu", "yo, ama-ru, ama-su", "yo, azu-keru, azu-karu", "yō", "ryaku", "ryū, (ru), to-meru, to-maru", "ryō", "i, koto", "i, (yui)", "iki", "u", "ei, utsu-ru, utsu-su, ha-eru", "en, no-biru, no-beru, no-basu", "en, so-u", "ga, ware, wa", "kai, hai", "kaku", "kaku, kawa", "kaku", "katsu, wa-ru, wari, wa-reru, sa-ku", "kabu", "kan, ho-su, hi-ru", "kan, ma-ku, maki", "kan", "kan", "ki, abu-nai, aya-ui, aya-bumu", "ki, tsukue", "ki", "ki, tatto-i, tōto-i, tatto-bu, tōto-bu", "gi, utaga-u", "kyū, su-u", "kyō, (ku), sona-eru, tomo", "kyō, mune, (muna)", "kyō, gō", "kin, (gon), tsuto-meru, tsuto-maru", "kin, suji", "kei", "kei, uyama-u", "kei", "geki", "geki, hage-shii", "ketsu, ana", "ken, kinu", "ken, (gon)", "ken", "gen, minamoto", "gen, (gon), ogoso-ka, kibi-shii", "ko, ki, onore", "ko, yo-bu", "go, ayama-ru", "kō", "kō", "kō, ō", "kō, (ku), beni, kurenai", "kō, o-riru, o-rosu, fu-ru", "kō, hagane", "koku, kiza-mu", "koku", "kotsu, hone", "kon, koma-ru", "sa, sha, suna", "za, suwa-ru", "sai, su-mu, su-masu", "sai, ta-tsu, saba-ku", "saku", "satsu, saku", "san, kaiko", "shi, ita-ru", "shi, watakushi, watashi", "shi, sugata", "shi", "shi", "shi", "ji", "sha, i-ru", "sha, su-teru", "shaku", "jaku, (nyaku), waka-i, mo-shikuha", "ju", "shū, osa-meru, osa-maru", "shū, sō", "shū, (ju), tsu-ku, tsu-keru", "shū, (shu)", "jū, (shō), (ju), shitaga-u, shitaga-eru", "jū, tate", "shuku, chiji-mu, chiji-maru, chiji-meru, chiji-reru, chiji-rasu", "juku, u-reru", "jun", "sho", "sho", "sho", "jo, (ji), nozo-ku", "shō", "shō, kizu, ita-mu, ita-meru", "shō, sawa-ru", "jō, shiro", "jō, mu-su, mu-reru, mu-rasu", "shin, hari", "jin, (ni)", "sui, ta-reru, ta-rasu", "sui, o-su", "sun", "sei, (jō), mo-ru, saka-ru, saka-n", "sei", "sei, makoto", "sen", "sen, moppa-ra", "sen, izumi", "sen, ara-u", "sen, so-meru, so-maru, shi-miru, shi-mi", "zen, yo-i", "sō, kana-deru", "sō, mado", "sō, tsuku-ru", "sō, shō, yosoo-u", "sō", "sō, misao, ayatsu-ru", "zō, kura", "zō", "son, zon", "son, tatto-i, tōto-i, tatto-bu, tōto-bu", "taku", "tan, katsu-gu, nina-u", "tan, sagu-ru, saga-su", "tan", "dan", "dan, atata-ka, atata-kai, atata-maru, atata-meru", "chi, ne, atai", "chū", "chū", "cho, arawa-su, ichijiru-shii", "chō", "chō, itada-ku, itadaki", "chō, shio", "chin", "tsū, ita-i, ita-mu, ita-meru", "ten", "tō, u-tsu", "tō", "tō", "todo-keru, todo-ku", "nan, kata-i, muzuka-shii", "nyū, chichi, chi", "nin, mito-meru", "nō, (na'), (na), (nan), (tō), osa-meru, osa-maru", "nō", "ha", "hai, oga-mu", "hai, se, sei, somu-ku, somu-keru", "hai", "hai", "han", "ban", "hi, ina", "hi", "hi, hi-meru", "fuku, hara", "fun, furu-u", "hei, nami, nara-beru, nara-bu, nara-bini", "hei", "hei, to-jiru, to-zasu, shi-meru, shi-maru", "hen, kata", "ho, ogina-u", "bo, ku-reru, ku-rasu", "hō, takara", "hō, otozu-reru, tazu-neru", "bō, (mō), na-i", "bō, wasu-reru", "bō", "mai", "maku, baku", "mitsu", "mei", "mo, bo", "yaku, wake", "yū", "yū, yasa-shii, sugu-reru", "yō, osana-i", "yoku, ho'-suru, ho-shii", "yoku", "ran, mida-reru, mida-su", "ran, tamago", "ran", "ri, ura", "ritsu, (richi)", "rin, nozo-mu", "rō, hoga-raka", "ron", "a", "ai, awa-re, awa-remu", "ai", "ai", "aku, nigi-ru", "atsuka-u", "a-teru", "arashi", "i, (e)", "i", "i", "i, oso-reru", "i", "i, na-eru", "i, era-i", "i", "i", "i, chiga-u, chiga-eru", "i", "i, nagusa-meru, nagusa-mu", "i", "ichi", "itsu", "(ibara)", "imo", "in", "in", "in, mida-ra", "in, kage, kage-ru", "in, kaku-su, kaku-reru", "in", "(uta)", "utsu", "une", "ura", "ei, yo-mu", "ei, kage", "ei, surudo-i", "eki, (yaku)", "etsu", "etsu, ko-su, ko-eru", "etsu", "etsu", "en, honoo", "en, on", "en", "en", "en", "en, kemu-ru, kemuri, kemu-i", "en, saru", "en, namari", "en, fuchi", "en, tsuya", "o, kega-su, kega-reru, kega-rawashii, yogo-su, yogo-reru, kitana-i", "ō", "ō, o-su, o-saeru", "ō", "ō", "ō, nagu-ru", "ō", "ō, oku", "(oka)", "oku", "oku", "osore", "otsu", "ore", "oro-su, oroshi", "on, oda-yaka", "ka", "ka", "ka, ka-keru, ka-karu", "ka, (ke), hana", "ka", "ka, uzu", "ka, yome, totsu-gu", "ka, hima", "ka", "ka, kutsu", "ka", "ka", "ka, kase-gu", "ka", "ga, (ge), kiba", "ga, kawara", "ga", "ga", "kai", "kai, imashi-meru", "kai, aya-shii, aya-shimu", "kai", "kai, ku-iru, ku-yamu, kuya-shii", "kai, mina", "kai, katamari", "kai", "kai, tsubu-su, tsubu-reru", "kai, kowa-su, kowa-reru", "kai, futokoro, natsu-kashii, natsu-kashimu, natsu-ku, natsu-keru", "kai", "gai", "gai, gake", "gai", "gai", "gai, futa", "gai", "gai", "gai", "kaki", "kaki", "kaku", "kaku, kara", "kaku", "kaku", "kaku, heda-teru, heda-taru", "kaku, e-ru", "kaku", "kaku", "gaku, take", "gaku, ago", "ka-keru, ka-karu, kakari", "kata", "katsu", "katsu", "katsu, kawa-ku", "katsu, kuzu", "katsu, kotsu, sube-ru, name-raka", "katsu", "katsu", "ka-tsu", "kama", "kama", "ka-ru", "kan, ama-i, ama-eru, ama-yakasu", "kan, ase", "kan", "kan, kimo", "kan, kanmuri", "kan, ochii-ru, otoshii-reru", "kan, kawa-ku, kawa-kasu", "kan", "kan, wazura-u", "kan, tsuranu-ku", "kan", "kan, ta-eru", "kan, ka-eru, ka-waru", "kan", "kan", "kan", "kan", "kan, susu-meru", "kan", "kan", "kan", "kan, yuru-i, yuru-yaka, yuru-mu, yuru-meru", "kan", "kan", "kan", "kan", "kan", "kan, kanga-miru", "gan, fuku-mu, fuku-meru", "gan", "gan", "ki, kuwada-teru", "ki", "ki", "ki, i-mu, i-mawashii", "ki", "ki, ino-ru", "ki", "ki, sude-ni", "ki, u-eru", "ki, oni", "ki, kame", "ki, iku", "ki", "ki", "ki", "ki", "ki, kagaya-ku", "ki", "gi", "gi, itsuwa-ru, nise", "gi, azamu-ku", "gi", "gi, tawamu-reru", "gi", "gi", "kiku", "kichi, kitsu", "kitsu", "kitsu, tsu-meru, tsu-maru, tsu-mu", "kyaku", "kyaku, (kya), ashi", "gyaku, shiita-geru", "kyū, oyo-bu, oyo-bi, oyo-bosu", "kyū, oka", "kyū, ku-chiru", "kyū, usu", "kyū", "kyū, ka-gu", "kyū, kiwa-meru, kiwa-maru", "kyo", "kyo, koba-mu", "kyo, ko", "kyo, (ko)", "kyo", "gyo, go, on", "kyō", "kyō, sake-bu", "kyō, kuru-u, kuru-oshii", "kyō", "kyō", "kyō", "kyō, hasa-mu, hasa-maru", "kyō, sema-i, seba-meru, seba-maru", "kyō, oso-reru, oso-roshii", "kyō, uyauya-shii", "kyō, obiya-kasu, odo-su, odo-kasu", "kyō, ta-meru", "kyō, hibi-ku", "kyō, odoro-ku, odoro-kasu", "gyō, (kō), ao-gu, oo-se", "gyō, akatsuki", "gyō, ko-ru, ko-rasu", "kin", "kin", "kin", "kin, koto", "kin, wazu-ka", "kin", "kin, nishiki", "kin, tsutsushi-mu", "kin, eri", "gin", "ku, ka-keru, ka-ru", "gu", "gu, oro-ka", "gū", "gū", "gū, sumi", "kushi", "kutsu", "kutsu, ho-ru", "kutsu", "kuma", "ku-ru", "kun", "kun, kao-ru", "kei", "kei, kuki", "kei, chigi-ru", "kei, e, megu-mu", "kei", "kei, kaka-geru", "kei", "kei, hotaru", "kei, katamu-ku, katamu-keru", "kei, tazusa-eru, tazusa-waru", "kei, tsu-gu", "kei, mō-deru", "kei", "kei", "kei", "kei, iko-i, iko-u", "kei, niwatori", "gei, muka-eru", "gei, kujira", "geki, suki", "geki, u-tsu", "keta", "ketsu", "ken, kata", "ken", "ken, ka-neru", "ken, tsurugi", "ken, kobushi", "ken, noki", "ken", "ken, kata-i", "ken, (gen), kira-u, iya", "ken, (kon)", "ken, tsuka-u, tsuka-wasu", "ken, kashiko-i", "ken", "ken, kagi", "ken, mayu", "ken", "ken, (ke), ka-keru, ka-karu", "gen, maboroshi", "gen", "gen, tsuru", "gen", "ko, mata", "ko, tora", "ko", "ko", "ko, ka-reru, ka-rasu", "ko, yato-u", "ko, hoko-ru", "ko, tsuzumi", "ko", "ko, kaeri-miru", "go, taga-i", "go", "go", "go, sato-ru", "go", "kō", "kō", "kō, taku-mi", "kō, kan", "kō, e", "kō", "kō", "kō, se-meru", "kō, sara, fu-keru, fu-kasu", "kō", "kō", "kō", "kō", "kō", "kō, ara-i, a-reru, a-rasu", "kō", "kō, (kyō), ka, kao-ri, kao-ru", "kō, (ku), mitsu-gu", "kō, hika-eru", "kō", "kō, nodo", "kō, awa-teru, awa-tadashii", "kō, kata-i", "kō, shibo-ru, shi-meru, shi-maru", "kō", "kō, mizo", "kō, tsuna", "kō", "kō", "kō", "kō", "ko-u", "gō", "gō", "gō", "gō", "koku", "koku", "goku", "koma", "ko-mu, ko-meru", "koro", "kon", "kon, ura-mu, ura-meshii", "kon", "kon, ato", "kon", "kon, tamashii", "kon", "kon, nengo-ro", "sa", "sa", "sa, sosonoka-su", "sa", "sa, kusari", "za", "sai", "sai, kuda-ku, kuda-keru", "sai", "sai", "sai, irodo-ru", "sai", "sai", "sai, moyoo-su", "sai, soku, fusa-gu, fusa-garu", "sai, (sei)", "sai, no-seru, no-ru", "(sai)", "zai", "saki", "saku, kezu-ru", "saku", "saku", "saku, su", "saku, shibo-ru", "saku", "sa-ku", "satsu, setsu", "satsu", "satsu, to-ru", "satsu, su-ru, su-reru", "san", "san, zan, miji-me", "san, kasa", "zan, ki-ru", "zan", "shi, mune", "shi, ukaga-u", "shi, sa-su, sa-saru", "shi", "shi", "shi, se, hodoko-su", "shi", "shi, abura", "shi, murasaki", "shi", "shi, me, mesu", "shi", "shi, tamawa-ru", "shi, haka-ru", "ji, samurai", "ji", "ji, itsuku-shimu", "ji, esa, e", "ji", "shika, (ka), roku", "jiku", "shitsu, shika-ru", "shitsu", "shitsu, shū, to-ru", "shitsu, shime-ru, shime-su", "shitsu", "shitsu, urushi", "shiba", "sha", "sha, nana-me", "sha, ni-ru, ni-eru, ni-yasu", "sha, saegi-ru", "ja", "ja, da, hebi", "shaku, ku-mu", "shaku", "shaku", "jaku, (seki), sabi, sabi-shii, sabi-reru", "shu", "shu, ka-ru, ka-ri", "shu, koto", "shu", "shu, ha-reru, ha-rasu", "shu, omomuki", "ju, kotobuki", "ju, noro-u", "ju", "ju", "shū", "shū, fune, (funa)", "shū, hii-deru", "shū, kusa-i, nio-u", "shū, sode", "shū", "shū, ure-eru, ure-i", "shū", "shū, miniku-i", "shū, ke-ru", "shū, oso-u", "jū, shiru", "jū, a-teru", "jū, nyū, yawa-raka, yawa-rakai", "jū, shibu, shibu-i, shibu-ru", "jū", "jū, kemono", "shuku", "shuku", "shuku", "juku", "shun", "shun, matata-ku", "jun, (shun)", "jun, megu-ru", "jun, tate", "jun", "jun", "jun", "jun, uruo-u, uruo-su, uru-mu", "jun", "sho", "sho, (cho), o", "jo, nyo", "jo", "jo", "shō, masu", "shō, me-su", "shō", "shō, toko, yuka", "shō", "shō", "shō", "shō, nobo-ru", "shō, numa", "shō, yoi", "shō", "shō", "shō", "shō", "shō", "shō", "shō", "shō", "shō, ko-geru, ko-gasu, ko-gareru, ase-ru", "shō", "shō", "shō, mikotonori", "shō", "shō, kuwa-shii", "shō", "shō, akoga-reru", "shō", "shō, tsuguna-u", "shō", "shō, kane", "jō, take", "jō", "jō", "jō", "jō, tata-mu, tatami", "jō, nawa", "jō", "jō", "jō", "jō, yuzu-ru", "jō, kamo-su", "shoku, fu-ku, nugu-u", "shoku, fu-eru, fu-yasu", "shoku, kaza-ru", "shoku, fu-reru, sawa-ru", "shoku", "joku, hazukashi-meru", "shiri", "shin, no-biru, no-basu, no-beru", "shin", "shin, kara-i", "shin, oka-su", "shin, tsu", "shin, kuchibiru", "shin", "shin, fu-ru, fu-rū, fu-reru", "shin, hita-su, hita-ru", "shin", "shin, mi-ru", "shin, ne-ru, ne-kasu", "shin, tsutsushi-mu", "shin", "shin, furu-u, furu-eru", "shin, takigi", "jin, ha", "jin, tsu-kusu, tsu-kiru, tsu-kasu", "jin", "jin, hanaha-da, hanaha-dashii", "jin", "jin, tazu-neru", "jin", "su", "sui, fu-ku", "sui, ta-ku", "sui", "sui, iki", "sui, otoro-eru", "sui, yo-u", "sui, to-geru", "sui", "sui, ho", "zui", "zui", "sū", "sū", "su-eru, su-waru", "sugi", "suso", "se", "ze", "sei, (shō), i", "sei, shō", "sei", "sei", "sei", "sei", "sei, yu-ku, i-ku", "sei, muko", "sei, chika-u", "sei, (shin), ko-u, u-keru", "sei", "seki", "seki", "seki", "seki", "seki, o-shii, o-shimu", "seki", "seki, ato", "seki", "setsu, tsutana-i", "setsu", "setsu", "sen", "sen, shi-meru, urana-u", "sen, ōgi", "sen", "sen", "sen, i-ru", "sen, uraya-mu, uraya-mashii", "sen", "sen", "sen", "sen", "sen, hiso-mu, mogu-ru", "sen", "sen, susu-meru", "sen", "sen, aza-yaka", "zen", "zen", "zen", "zen, tsukuro-u", "so, near-u", "so, haba-mu", "so", "so", "so, ara-i", "so, uto-i, uto-mu", "so, utta-eru", "so", "so, sakanobo-ru", "so, ishizue", "sō, futa", "sō", "sō", "sō, saga-su", "sō, sa-su", "sō, kuwa", "sō, ha-ku", "sō", "sō, (zo)", "sō, sawa-yaka", "sō, mo", "sō, ya-seru", "sō, hōmu-ru", "sō", "sō, a-u", "sō", "sō", "sō", "sō, shimo", "sō, sawa-gu", "sō, mo", "zō, niku-mu, niku-i, niku-rashii, niku-shimi", "zō, (sō), oku-ru", "soku", "soku, unaga-su", "soku, tora-eru", "zoku", "zoku", "son", "ta", "da", "da, tsuba", "da", "da", "da", "tai, ta-eru", "tai, okota-ru, nama-keru", "tai", "tai", "tai", "tai, fukuro", "tai", "tai, ka-eru, ka-waru", "tai, todokoo-ru", "tai", "taki", "taku", "taku, sawa", "taku", "taku", "taku", "taku", "daku", "daku, nigo-ru, nigo-su", "tada-shi", "datsu, nu-gu, nu-geru", "datsu, uba-u", "tana", "dare", "tan", "tan, dan", "tan", "tan, awa-i", "tan, nage-ku, nage-kawashii", "tan, hashi, ha, hata", "tan, hokoro-biru", "tan, kita-eru", "dan, hi-ku, hazu-mu, tama", "dan, (tan)", "chi, ha-jiru, haji, ha-jirau, ha-zukashii", "chi, ita-su", "chi, oku-reru, oku-rasu, oso-i", "chi", "chi", "chi", "chiku", "chiku", "chiku, takuwa-eru", "chitsu", "chitsu", "chaku", "chū, oki", "chū", "chū", "chū", "chū, i-ru", "chū", "chō, tomura-u", "chō, ido-mu", "chō, ho-ru", "chō, naga-meru", "chō, tsu-ru", "chō, ha-ru", "chō, ko-eru, ko-su", "chō, ha-neru, to-bu", "chō", "chō, azake-ru", "chō, su-mu, su-masu", "chō, ki-ku", "chō, ko-riru, ko-rasu, ko-rashimeru", "choku", "choku", "chin, shizu-mu, shizu-meru", "chin, mezura-shii", "chin", "chin", "chin, shizu-meru, shizu-maru", "tsui", "tsui", "tsuka", "tsu-keru, tsu-karu", "tsubo", "tsume, (tsuma)", "tsuru", "tei", "tei", "tei", "tei", "tei", "tei", "tei", "tei", "tei", "tei", "tei, tsutsumi", "tei", "tei, shi-maru, shi-meru", "tei, akira-meru", "dei, doro", "teki, tsu-mu", "teki, shizuku, shitata-ru", "deki, obo-reru", "tetsu", "tetsu", "tetsu", "tetsu", "ten, so-eru, so-u", "ten", "den, ten, tono, dono", "to", "to, ha-ku", "to, neta-mu", "to", "to, wata-ru, wata-su", "to, nu-ru", "to, ka-keru", "do", "do, ika-ru, oko-ru", "tō", "tō, ni-geru, ni-gasu, noga-su, noga-reru", "tō, tao-reru, tao-su", "tō, koo-ru, kogo-eru", "tō, kara", "tō, momo", "tō, su-ku, su-kasu, su-keru", "tō, ita-mu", "tō, nusu-mu", "tō", "tō", "tō", "tō, mune, (muna)", "tō", "tō, tsutsu", "tō, ine, (ina)", "tō, fu-mu, fu-maeru", "tō", "tō, fuji", "tō, tataka-u", "tō", "dō, hora", "dō", "dō, hitomi", "tōge", "toku", "toku", "toku", "(tochi)", "totsu", "totsu, tsu-ku", "ton", "ton, buta", "ton", "don, musabo-ru", "don, nibu-i, nibu-ru", "don, kumo-ru", "donburi, (don)", "na", "na", "nashi", "nazo", "nabe", "nan, yawa-raka, yawa-rakai", "ni, ama", "ni", "nio-u", "niji", "nyō", "nin", "nin, shino-bu, shino-baseru", "nei", "nen, hine-ru", "nen, neba-ru", "nō, naya-mu, naya-masu", "nō, ko-i", "ha", "ha", "ba", "ba, nonoshi-ru", "hai, sakazuki", "hai", "hai, suta-reru, suta-ru", "hai", "bai, tsuchika-u", "bai", "bai", "bai", "haku", "haku, (hyō)", "haku, to-maru, to-meru", "haku, sema-ru", "haku, ha-gasu, ha-gu, ha-gareru, ha-geru", "haku", "haku, usu-i, usu-meru, usu-maru, usu-ragu, usu-reru", "baku", "baku, shiba-ru", "baku", "hashi", "hada", "hachi, (hatsu)", "hatsu, kami", "batsu", "batsu, nu-ku, nu-keru, nu-kasu, nu-karu", "batsu, bachi", "batsu", "han", "han, ho", "han", "han, ban, tomona-u", "han", "han", "han", "han", "han", "han", "han, (bon), wazura-u, wazura-wasu", "han", "han", "han", "han", "ban", "ban", "hi", "hi, kare, (kano)", "hi", "hi, iya-shii, iya-shimu, iya-shimeru", "hi, tsuka-reru", "hi, kōmu-ru", "hi, tobira", "hi", "hi", "hi, sa-keru", "bi, o", "bi, (mi), mayu", "bi", "hiza", "hiji", "hitsu, hiki", "hitsu, hi", "hime", "hyō, tadayo-u", "byō, nae, (nawa)", "byō, ega-ku, ka-ku", "byō, neko", "hin, hama", "hin", "hin", "bin", "bin", "fu", "fu, kowa-i", "(fu)", "fu", "fu", "fu, omomu-ku", "fu, u-ku, u-kareru, u-kabu, u-kaberu", "fu", "fu", "fu, kusa-ru, kusa-reru, kusa-rasu", "fu, shi-ku", "fu", "fu", "fu", "bu, anado-ru", "bu, ma-u, mai", "fū, hō", "fuku, fu-seru, fu-su", "fuku, haba", "fuku, oo-u, kutsugae-su, kutsugae-ru", "futsu, hara-u", "futsu, wa-ku, wa-kasu", "fun, magi-reru, magi-rasu, magi-rawasu, magi-rawashii", "fun", "fun, fu-ku", "fun", "fun, ikidoo-ru", "hei", "hei, awa-seru", "hei, gara, e", "hei", "hei", "hei", "hei", "hei, mochi", "heki, kabe", "heki", "heki, kuse", "betsu, sagesu-mu", "hen, katayo-ru", "hen", "ho", "ho, to-raeru, to-rawareru, to-ru, tsuka-maeru, tsuka-maru", "ho", "bo, tsuno-ru", "bo, shita-u", "bo", "hō, kanba-shii", "hō", "hō, (bu), tatematsu-ru", "hō, da-ku, ida-ku, kaka-eru", "hō, awa", "hō", "hō", "hō, nara-u", "hō, mine", "hō", "hō, kuzu-reru, kuzu-su", "hō, hachi", "hō, a-kiru, a-kasu", "hō, ho-meru", "hō, nu-u", "bō, tobo-shii", "bō, isoga-shii", "bō, (bo')", "bō, samata-geru", "bō, fusa", "bō", "bō", "bō, oka-su", "bō", "bō, tsumu-gu", "bō, katawa-ra", "bō", "bō", "bō, fuku-ramu, fuku-reru", "bō, (mu), haka-ru", "hoo", "boku", "boku", "boku", "boku, sumi", "boku", "botsu", "botsu", "hori", "hon", "hon, hirugae-ru, hirugae-su", "bon, (han)", "bon", "ma, asa", "ma", "ma, miga-ku", "ma", "mai", "mai, u-meru, u-maru, u-moreru", "maku", "makura", "mata", "matsu", "man", "man", "mi", "misaki", "mitsu", "myō", "min, nemu-ru, nemu-i", "mu, hoko", "mu, kiri", "musume", "mei, myō", "mei", "metsu, horo-biru, horo-bosu", "men, manuka-reru", "men", "mo, shige-ru", "mō, bō", "mō", "mō, (kō)", "mō", "mō, ami", "moku, dama-ru", "mon", "ya", "ya", "yaku", "yaku, odo-ru", "yami", "yu", "yu", "yu, sato-su", "yu, i-eru, i-yasu", "yui, (i)", "yū", "yū", "yū, wa-ku", "yū", "yū", "yū, o, osu", "yū, saso-u", "yū, ure-eru, ure-i, u-i", "yū", "yo, ata-eru", "yo, homa-re", "yō, aya-shii", "yō", "yō, a-geru, a-garu", "yō, yu-reru, yu-ru, yu-ragu, yu-rugu, yu-suru, yu-saburu, yu-suburu", "yō, to-keru, to-kasu, to-ku", "yō, koshi", "yō", "yō, odo-ru, odo-ri", "yō, kama", "yō", "yō, utai, uta-u", "yoku, osa-eru", "yoku", "yoku, tsubasa", "ra", "ra, hadaka", "ra", "rai, kaminari", "rai, tano-mu, tano-moshii, tayo-ru", "raku, kara-mu, kara-maru, kara-meru", "raku", "ratsu", "ran", "ran, ai", "ran", "ri", "ri", "ri, ha-ku", "ri", "ri, hana-reru, hana-su", "ritsu", "ryū, yanagi", "ryū, tatsu", "ryū, tsubu", "ryū", "ryū", "ryo", "ryo", "ryo", "ryō", "ryō, suzu-shii, suzu-mu", "ryō", "ryō, misasagi", "ryō", "ryō", "ryō", "ryō", "ryō, (rō), kate", "rin", "rin", "rin, tona-ru, tonari", "ru", "rui, namida", "rui", "rui", "rei, hage-mu, hage-masu", "rei, modo-su, modo-ru", "rei, rin, suzu", "rei", "rei, ryō, tama", "rei", "rei", "rei, uruwa-shii", "reki, koyomi", "retsu, oto-ru", "retsu", "retsu, sa-ku, sa-keru", "ren, ko-u, koi, koi-shii", "ren", "ren", "ro", "ro", "ro", "ro, (rō), tsuyu", "rō, moteaso-bu", "rō", "rō", "rō", "rō", "rō, mo-ru, mo-reru, mo-rasu", "rō, kago, ko-moru", "roku, fumoto", "wai, makana-u", "waki", "waku, mado-u", "waku", "wan", "wan, ude" ];
var meaningarray=["one", "right (direction)", "rain", "round, yen", "king", "sound", "below", "fire", "flower", "shellfish", "study", "feeling", "nine", "rest", "ball", "gold", "sky", "month, moon", "dog", "see", "five", "mouth", "school", "left (direction)", "three", "mountain", "child", "four", "thread", "letter", "ear", "seven", "car", "hand", "ten", "exit", "woman", "small", "up", "forest", "person", "water", "correct", "life", "blue", "evening", "stone", "red", "thousand", "river", "previous", "early", "grass", "foot", "village", "large", "male", "bamboo", "middle", "insect", "town", "heaven", "rice paddy", "soil", "two", "day", "enter", "year", "white", "eight", "hundred", "writing", "tree", "book", "name", "eye", "stand up", "power", "woods", "six", "pull", "feather", "cloud", "garden", "far", "what", "section", "summer", "house", "song", "tableau", "times", "association", "sea", "picture", "outside", "angle", "pleasure", "active", "interval", "circle", "boulder", "face", "steam", "write down", "return", "bow (archery, violin)", "cow", "fish", "capital", "strong", "teach", "near", "older brother", "shape", "measure", "origin", "say", "field", "door", "old", "noon", "behind", "language", "craft", "public", "wide", "mix", "ray", "think", "go", "tall, expensive", "yellow", "fit", "valley", "country", "black", "now", "genius", "thin", "make", "calculate", "stop", "market", "arrow", "older sister", "think", "paper", "Buddhist temple", "oneself", "time", "room", "company", "weak", "neck", "autumn", "week", "springtime", "write", "few", "place", "color", "eat, meal", "heart", "new", "parent", "diagram", "number", "west", "voice", "star", "clear up", "cut", "snow", "boat", "line", "in front", "association", "run", "many", "thick", "body", "pedestal", "ground", "pond", "know", "tea", "daytime", "long", "bird", "morning", "straight", "pass through", "younger brother", "shop", "point", "electricity", "sword", "winter", "hit", "east", "answer", "head", "same", "road", "read", "inside", "south", "meat", "horse", "sell", "buy", "wheat", "half", "one's turn", "father", "wind", "part, minute of time", "hear", "rice", "walk", "mother", "direction", "north", "every", "younger sister", "ten thousand", "bright", "chirp", "hair", "gates", "night", "field", "friend", "use", "day of the week", "come", "village", "reason", "talk", "bad", "cheap", "dark", "medicine", "committee", "idea", "nurture", "member", "institution", "drink", "carry", "swim", "station", "center", "side", "roof", "warm", "change", "luggage", "world", "open", "floor of a building", "cold", "feeling", "China", "public building", "beach", "wake up", "period of time", "guest", "research", "hurry", "rank", "Shinto shrine", "sphere", "leave", "bridge", "business", "musical composition", "office", "silver", "ward", "suffer", "tool", "you", "person in charge", "light", "blood", "decide", "sharpen", "prefecture", "warehouse", "lake", "over there", "happiness", "harbor", "number", "root", "festival", "dish", "do", "death", "use", "begin", "finger", "tooth", "poem", "next", "abstract thing", "hold", "style", "truth", "copy", "someone", "master", "protect", "take", "alcoholic drink", "accept", "state", "pick up", "end", "learn", "collect", "dwelling", "heavy", "inn", "place", "hot", "help", "shining", "extinguish", "sell", "chapter", "win", "ride", "plant", "say", "body", "god", "TRUE", "deep", "advance", "world", "put in order", "long ago", "whole", "mutual", "send", "concept", "breath", "fast", "tribe", "other", "hit", "opposite", "wait", "substitute", "ordinal number prefix", "topic", "charcoal", "short", "discuss", "wear", "pour", "pillar", "ward", "account book", "investigate", "follow", "decide", "garden", "flute", "iron", "revolve", "metropolis", "degrees", "throw", "beans", "island", "hot water", "climb", "class", "move", "juvenile", "farming", "wave", "distribute", "double", "box", "farm", "departure", "anti-", "slope", "board", "skin", "sad", "beauty", "nose", "writing brush", "ice", "express", "second (part of time)", "sick", "article", "lose", "part", "clothes", "luck", "thing", "flat", "return", "exertion", "release", "flavor", "fate", "face", "question", "service", "medicine", "reason", "oil", "have", "play", "in advance", "sheep", "ocean", "leaf", "sunshine", "formal title", "fall", "stream", "trip", "both", "green", "thanks", "row", "practice", "road", "peace", "love", "plan", "by means of", "clothes", "rank", "surround", "stomach", "mark", "England", "prosperity", "salt", "hundred million", "add", "fruit", "freight", "section", "bud", "reformation", "contraption", "harm", "street", "each", "memorize", "perfect", "government official", "pipe", "related", "observe", "request", "hope", "seasons", "chronicle", "rejoice", "national flag", "container", "machine", "deliberation", "request", "cry", "salvation", "salary", "raise", "fishing", "together", "cooperation", "mirror", "compete", "poles", "instruction", "army", "county", "diameter", "model", "scenery", "art", "lack", "tie", "build", "healthy", "test", "hard", "achievement", "like", "climate", "cruise", "health", "tell", "distinction", "vegetable", "most", "lumber", "previous", "tag", "printing", "kill", "guess", "participate", "give birth", "scatter", "remainder", "gentleman", "family name", "history", "director", "test", "child", "govern", "resign", "lose", "borrow", "kind", "circumference", "celebrate", "obey", "first", "pine", "laugh", "chant", "bake", "elephant", "illuminate", "prize", "retainer", "trust", "become", "government ministry", "pure", "quiet", "seat", "accumulate", "fold", "node", "theory", "shallow", "war", "choose", "so", "conflict", "warehouse", "nest", "bundle", "side", "continue", "graduate", "grandchild", "sash", "group", "attain", "simple", "put", "relationship", "savings", "portent, trillion", "intestines", "low", "bottom", "halt", "target", "code", "transmit", "junior", "toil", "lamp", "public chamber", "work", "special", "acquire", "poison", "heat", "thought", "failure", "ume (Japanese apricot)", "Dr.", "meal", "fly", "expense", "without fail", "ballot", "signpost", "non-", "husband", "attach", "urban prefecture", "vice", "flour", "soldier", "separate", "environs", "change", "convenience", "wrap", "method", "hope", "breed", "end", "full", "not yet", "vein", "people", "nothing", "promise", "courage", "need", "foster", "bathe", "profit", "land", "good", "fee", "quantity", "wheel", "sort", "orders", "cool", "example", "curriculum", "take along", "old man", "labour", "record", "pressure", "shift", "cause", "eternity", "manage", "defense", "easy", "benefit", "fluid", "perform", "respond", "outward journey", "cherry tree", "grace", "possible", "temporary", "value", "river", "go beyond", "congratulations", "cheerful", "untie", "status", "certain", "amount", "publish", "tree-trunk", "accustomed", "eyeball", "foundation", "approach", "rule", "skill", "righteousness", "inverted", "long time", "old times", "reside", "permit", "boundary", "level", "prohibition", "phrase", "flock", "manage", "undefiled", "affair", "ticket", "precipitous", "examine", "limit", "appear", "decrease", "circumstances", "individual", "safeguard", "effect", "thick", "till", "mineral", "construct", "entertain", "lecture", "mix", "investigate", "again", "disaster", "wife", "pick", "occasion", "exist", "wealth", "guilt", "miscellaneous", "acid", "approve", "branch", "intention", "branch", "expert", "resources", "domesticate", "indicate", "becoming", "discriminating", "quality", "cottage", "apologize", "instruct", "discipline", "mention", "art", "standard", "preface", "beckon", "acquiesce", "evidence", "clause", "form", "normal", "feelings", "weave", "employment", "control", "gender", "politics", "power", "refined", "manufacture", "tax", "blame", "exploits", "contact", "establish", "tongue", "discontinue", "coin", "ancestor", "elementary", "whole", "create", "statue", "increase", "rule", "fathom", "belong", "rate", "loss", "retreat", "lend", "condition", "group", "cut off", "fabricate", "stretch", "present", "extent", "suitable", "enemy", "unite", "copper", "guide", "benevolence", "alone", "responsibility", "burn", "ability", "rend", "crime", "judge", "printing block", "compare", "fertilizer", "negative", "provide", "bag", "evaluate", "poor", "linen", "lady", "rich", "military", "again", "duplicate", "Buddha", "compile", "valve", "preserve", "grave", "report", "bountiful", "prevent", "trade", "outburst", "duty", "dream", "astray", "cotton", "transport", "leave over", "deposit", "contain", "abbreviation", "detain", "territory", "uncommon", "bequeath", "range", "eaves", "reflect", "prolong", "run alongside", "ego", "ashes", "broaden", "leather", "tall", "divide", "stocks", "dry", "scroll", "watch over", "simplicity", "dangerous", "desk", "brandish", "precious", "doubt", "suck", "offer", "bosom", "home town", "diligence", "muscle", "lineage", "respect", "guard against", "drama", "violent", "hole", "silk", "rights", "constitution", "origin", "strict", "self", "call", "mistake", "empress", "filial piety", "emperor", "deep red", "descend", "steel", "engrave", "cereals", "bone", "become distressed", "sand", "sit", "settle", "judge", "scheme", "counter for books", "silkworm", "climax", "me", "figure", "look at", "poetry", "document", "magnet", "shoot", "throw away", "shaku", "young", "trees", "take in", "religion", "concerning", "masses", "obey", "vertical", "shrink", "ripen", "genuine", "dispose", "government office", "various", "exclude", "leader", "wound", "hurt", "castle", "steam", "needle", "humanity", "droop", "infer", "measurement", "prosper", "holy", "sincerity", "proclaim", "specialty", "spring", "wash", "dye", "good", "play music", "window", "create", "attire", "stratum", "maneuver", "warehouse", "entrails", "suppose", "revered", "home", "shouldering", "grope", "nativity", "steps", "warmth", "value", "mid-air", "loyalty", "renowned", "government office", "place on the head", "tide", "fare", "pain", "expand", "chastise", "group", "sugar", "deliver", "difficult", "milk", "recognize", "settlement", "brain", "sect", "worship", "back", "lungs", "haiku", "squad", "nightfall", "negate", "criticism", "secret", "abdomen", "stirred up", "line-up", "highness", "closed", "one-sided", "supplement", "livelihood", "treasure", "visit", "deceased", "forget", "rod", "sheet of...", "curtain", "secrecy", "alliance", "imitation", "translate", "mail", "superior", "infancy", "longing", "the following", "riot", "egg", "perusal", "back", "law", "look to", "melodious", "theory", "sub-", "pathetic", "push open", "not clear", "grip", "handle", "allocate", "storm", "reliant", "intimidate", "do", "fear", "military officer", "wither", "admirable", "chair", "same kind", "differ", "fiber", "consolation", "horizontal", "one (falsification prevention)", "deviate", "thorn", "potato", "throat", "matrimony", "lewdness", "shade", "conceal", "rhyme", "song", "gloom", "furrow", "bay", "recitation", "shadow", "pointed", "epidemic", "ecstasy", "cross over", "audience", "review", "inflammation", "grudge", "banquet", "princess", "aid", "smoke", "monkey", "lead", "affinity", "glossy", "dirty", "concave", "push", "flourishing", "Europe", "assault", "venerable old man", "heart", "hill", "recollection", "timidity", "uneasiness", "the latter", "I, we", "wholesale", "calm", "excellent", "torment", "rack", "splendor", "confectionery", "whirlpool", "marry into", "spare time", "calamity", "shoes", "widow", "counters for things", "earnings", "mosquito", "tusk", "tile", "gracious", "starve", "jammed in", "commandment", "suspicious", "kidnap", "repent", "all", "clod", "square character style", "crush", "demolition", "pocket", "harmony", "censure", "cliff", "horizon", "rue", "cover", "above-stated", "outline", "dead remains", "hedge", "persimmon", "nucleus", "husk", "enclosure", "contrast", "isolate", "seize", "menacing", "harvest", "point", "jaw", "hang", "lagoon", "fasten", "hoarse", "thirst", "arrowroot", "slippery", "brown", "control", "moreover", "kettle", "sickle", "reap", "sweet", "sweat", "tin can", "liver", "crown", "collapse", "dry", "intuition", "afflicted", "pierce", "yell", "withstand", "interchange", "daring", "coffin", "goodwill", "leisure", "persuade", "tolerant", "delight", "oversee", "slacken", "remorse", "send back", "ring", "Korea", "warship", "specimen", "include", "trifle with", "stubborn", "plan", "deed", "branch off", "mourning", "strange", "pray", "rut", "previously", "hungry", "ghost", "turtle", "how many", "chess piece", "abandon", "destroy", "capital", "radiance", "equestrian", "best regards", "falsehood", "deceit", "ceremony", "frolic", "mimic", "sacrifice", "chrysanthemum", "good luck", "consume", "packed", "instead", "leg", "tyrannize", "reach out", "hill", "decay", "mortar", "twist", "smell", "hard up", "gigantic", "repel", "foothold", "void", "long-distance", "honorable", "villain", "shout", "lunatic", "receive", "condition", "gorge", "pinch", "cramped", "fear", "respect", "threaten", "rectify", "echo", "wonder", "face-up", "daybreak", "congeal", "towel", "axe", "germ", "harp", "a wee bit", "tense", "brocade", "discreet", "collar", "versify", "drive", "dread", "foolish", "accidentally", "interview", "corner", "skewer", "yield", "dig", "cavern", "bear", "winding", "meritorious deed", "fragrant", "punish", "stalk", "pledge", "favor", "disclose", "put up (a notice)", "mountain stream", "lightning-bug", "lean", "portable", "inherit", "visit a temple", "jubilation", "long for", "consider", "recess", "chicken", "welcome", "whale", "fissure", "beat", "beam", "greatness", "shoulder", "frugal", "concurrently", "sabre", "fist", "flats", "sphere", "strict", "dislike", "offering", "dispatch", "intelligent", "self-effacing", "key", "cocoon", "appear", "suspend", "phantasm", "mysterious", "bowstring", "gunwale", "crotch", "tiger", "orphan", "arc", "wither", "employ", "boast", "drum", "tie up", "look back", "mutually", "give", "recreation", "enlightenment", "Go", "capture", "cavity", "adroit", "armor", "inlet", "pit", "confront", "aggression", "grow late", "arrest", "agreement", "marquis", "constancy", "deluge", "laid waste", "outskirts", "incense", "tribute", "withdraw", "close up", "throat", "disconcerted", "stiff", "strangle", "paragraph", "gutter", "hawser", "fermentation", "draft", "equilibrium", "subscription", "beg", "torture", "sturdy", "be proud", "overpowering", "overcome", "cruel", "prison", "horse", "crowded", "times", "descendants", "rancor", "marriage", "mark", "dark blue", "soul", "ground-breaking", "sociable", "help", "sand", "tempt", "lie", "chain", "sprain", "form", "smash", "superintend", "plantation", "coloring", "purification", "bond", "sponsor", "obstruct", "year-end", "ride", "cape (geography)", "dose", "promontory", "plane", "fence", "cord", "vinegar", "squeeze", "confused", "blossom", "temple", "be imminent", "snapshot", "grate", "scaffold", "wretched", "umbrella", "kill by slicing", "temporarily", "delicious", "pay respects", "thorn", "welfare", "limb", "carry out", "selfish", "fat", "purple", "heir", "feminine", "seriousness", "grant", "consult with", "waiter", "nourishing", "mercy", "bait", "emperor's seal", "deer", "axis", "scold", "rapidly", "tenacious", "damp", "envy", "lacquer", "turf", "pardon", "diagonal", "boil", "intercept", "wicked", "snake", "bartending", "explanation", "baron", "loneliness", "vermilion", "hunt", "particularly", "pearl", "tumor", "gist", "longevity", "curse", "demand", "Confucian", "captured", "boat", "excel", "stinking", "sleeve", "feel ashamed", "distress", "repay", "ugly", "kick", "attack", "soup", "allot", "tender", "astringent", "gun", "animal", "uncle", "graceful", "solemn", "cram school", "genius", "wink", "10-day period (of the month)", "patrol", "shield", "quasi-", "martyrdom", "sequential", "wet", "abide by", "commoner", "thong", "likeness", "confer", "gradually", "measuring box", "summon", "artisan", "bed", "extract", "resemblance", "esteem", "rise up", "marsh", "wee hours", "symptoms", "auspicious", "appellation", "ford", "introduce", "sue", "manipulate", "sparkle", "char", "nitrate", "cosmetics", "imperial edict", "exhort", "detailed", "patent", "desire", "collide", "reparation", "reef", "bell", "length", "superfluous", "clean", "surplus", "tatami mat", "straw rope", "lot", "lass", "lock", "defer", "brew", "wipe", "augment", "decorate", "contact", "entrust", "embarrass", "buttocks", "lengthen", "core", "spicy", "encroach", "haven", "lips", "with child", "shake", "immersed", "sire", "checkup", "lie down", "humility", "examine", "quake", "fuel", "blade", "exhaust", "swift", "tremendously", "camp", "inquire", "kidney", "by all means", "blow", "cook", "commander", "chic", "decline", "drunk", "consummate", "drowsy", "ear", "follow", "marrow", "hinge", "adore", "set", "cedar", "cuff", "rapids", "just so", "well", "surname", "subjugate", "adjusted", "animal sacrifice", "uncanny", "departed", "bridegroom", "vow", "solicit", "be disillusioned", "reject", "chop", "stature", "vessels", "pity", "grieve", "tracks", "enroll", "bungling", "stealth", "vicarious", "hermit", "fortune telling", "fan", "plug", "rotation", "broil", "envy", "gland", "discussion", "tread", "paper", "submerge", "transition", "recommend", "slender", "fresh", "Zen", "steadily", "tray", "darning", "aim at", "thwart", "tariff", "set aside", "coarse", "alienate", "sue", "model", "go upstream", "cornerstone", "pair", "robust", "villa", "search", "insert", "mulberry", "sweep", "cadet", "formerly", "refreshing", "miss", "get thin", "interment", "Buddhist priest", "encounter", "vat", "remains", "parch", "frost", "boisterous", "seaweed", "hate", "presents", "instant", "stimulate", "capture", "vulgar", "burglar", "humble", "luxury", "gentle", "saliva", "degenerate", "lazy", "burdensome", "resistant", "neglect", "womb", "peaceful", "piled high", "sack", "apprehend", "exchange", "stagnate", "be crowned with", "waterfall", "choose", "swamp", "eminent", "clear (the land)", "consign", "laundry", "consent", "voiced", "however", "undress", "rob", "shelf", "who (question word)", "cinnabar", "daybreak", "gall bladder", "thin", "sigh", "edge", "rip", "forge", "bullet", "podium", "shame", "(to) do", "slow", "stupid", "immature", "fine (not coarse)", "livestock", "pursue", "amass", "regularity", "plug up", "legitimate wife", "open sea", "pluck", "inmost", "sake", "casting", "stop-over", "condolences", "challenge", "carve", "stare", "angling", "paste", "transcend", "hop", "indications", "ridicule", "lucidity", "listen", "penal", "imperial order", "make progress", "sink", "rare", "majestic plural", "exhibit", "tranquilize", "oak", "crash", "hillock", "pickling", "two-mat area", "claw", "crane", "display", "courts", "resist", "residence", "pavilion", "upright", "sovereign", "revise", "relay", "spy", "dike", "rowboat", "tighten", "abandon", "mud", "pinch", "drip", "drown", "transfer", "philosophy", "penetrate", "remove", "annexed", "fill in", "Mr.", "Big Dipper", "spit", "jealousy", "route", "transit", "paint", "gamble", "guy", "angry", "arrival", "escape", "overthrow", "frozen", "T'ang", "peach tree", "transparent", "lament", "steal", "pottery", "pagoda", "board", "ridgepole", "pox", "cylinder", "rice plant", "step", "mimeograph", "wisteria", "fight", "inflation", "den", "trunk", "pupil", "mountain peak", "hide", "coach", "fervent", "horse chestnut", "convex", "stab", "barracks", "pork", "suddenly", "covet", "dull", "cloudy weather", "bowl of food", "what", "what", "pear tree", "riddle", "pot", "soft", "nun", "two (falsification prevention)", "scent", "rainbow", "urine", "pregnancy", "endure", "rather", "twist", "sticky", "trouble", "concentrated", "grasp", "hegemony", "old woman", "insult", "counter for cupfuls", "repudiate", "abolish", "comrade", "cultivate", "obeisance", "mediator", "compensation", "chief", "clap", "overnight", "urge", "peel", "liner", "dilute", "vague", "truss", "explode", "chopsticks", "texture", "bowl", "hair of the head", "fell", "slip out", "penalty", "clique", "spread out", "sail", "pan-", "consort", "heights", "paddy-ridge", "generally", "marketing", "blemish", "conveyor", "anxiety", "partition", "pattern", "luxuriant", "clan", "barbarian", "tray", "queen", "he", "expose", "lowly", "exhausted", "incur", "front door", "tombstone", "quit", "evade", "tail", "eyebrow", "delicate", "knee", "elbow", "equal", "ooze", "princess", "drift", "seedling", "sketch", "cat", "seacoast", "V.I.P.", "repeatedly", "cleverness", "flower pot", "aid", "dreadful", "mound", "affixed", "obituary", "proceed", "floating", "token", "universal", "rot", "spread", "skin", "levy", "musical score", "scorn", "dance", "seal", "prostrated", "breadth", "capsize", "pay", "seethe", "distract", "atmosphere", "erupt", "tomb", "aroused", "third class", "join", "design", "fence", "cash", "abuse", "cover", "mochi rice cake", "wall", "sphere", "mannerism", "ignore", "partial", "everywhere", "suckle", "catch", "pavement", "recruit", "pining", "register", "perfume", "home country", "observance", "embrace", "bubbles", "placenta", "salary", "emulate", "summit", "cannon", "crumble", "bee", "sated", "praise", "sew", "scarce", "busy", "boy", "disturb", "tassel", "obese", "so-and-so", "risk", "divide", "spinning", "bystander", "cap", "appearance", "swell", "conspire", "cheek", "crude", "harmonious", "me", "black ink", "slap", "drown", "rise", "ditch", "bustle", "flip", "mediocre", "basin", "hemp", "chafe", "grind", "witch", "foolish", "bury", "membrane", "pillow", "or again", "rub", "ridicule", "cartoon", "fascination", "headland", "honey", "exquisite", "sleep", "halberd", "fog", "daughter", "dark", "inscription", "destroy", "excuse", "noodles", "overgrown", "delusion", "blind", "decrease", "fierce", "netting", "silence", "family crest", "melting", "all the more", "unlucky", "leap", "darkness", "metaphor", "pleasure", "rebuke", "healing", "solely", "seclude", "permanence", "boil", "furthermore", "abundant", "male", "entice", "melancholy", "dissolve", "give", "reputation", "bewitching", "commonplace", "hoist", "swing", "melt", "loins", "boil (medical)", "jump", "kiln", "embrace", "noh chanting", "repress", "fertility", "wing", "crush", "naked", "gauze", "thunder", "trust", "entwine", "dairy products", "bitter", "excessive", "indigo", "column", "officer", "diarrhea", "footgear", "glassy", "detach", "fear", "willow", "dragon", "grains", "hump", "sulphur", "companion", "captive", "prudence", "finish", "refreshing", "game-hunting", "mausoleum", "colleague", "dormitory", "heal", "clear", "provisions", "thousandth", "ethics", "neighboring", "lapis lazuli", "tears", "accumulate", "bases", "encourage", "re-", "small bell", "zero", "spirits", "slave", "age", "lovely", "calendar", "inferiority", "ardent", "split", "romance", "bargain", "tempering", "spine", "hearth", "bribe", "dew", "tamper with", "son", "wandering", "corridor", "watchtower", "leak", "basket", "foot of a mountain", "bribe", "aside", "beguile", "frame", "gulf", "arm" ];
var ost=["https://www.youtube.com/watch?v=Cjk3Jc2GfNQ","https://www.youtube.com/watch?v=tLBRnyl-QX0","https://www.youtube.com/watch?v=KozJ0Wlqkd8","https://www.youtube.com/watch?v=_eUh7Eg-qus","https://www.youtube.com/watch?v=bXJTTq6EU9Y","https://www.youtube.com/watch?v=E3zbRnWEhdg","https://www.youtube.com/watch?v=zHz1RgtnF2s","https://www.youtube.com/watch?v=CaJy25NY8w8","https://www.youtube.com/watch?v=l_HALr0IsZs"];
const weatherLookupTable = {
	"1000": ":sunny:",
	"1003": ":white_sun_cloud:",
	"1006": ":cloud:",
	"1063": ":white_sun_rain_cloud:",
	"1009": ":white_sun_small_cloud:",
	"1066": ":cloud_snow:",
	"1087": ":cloud_lightning:",
	"1117": ":cloud_snow:",
	"1180": ":white_sun_rain_cloud:",
	"1183": ":cloud_rain:",
	"1186": ":cloud_rain:",
	"1189": ":cloud_rain:",
	"1192": ":thunder_cloud_rain:",
	"1195": ":thunder_cloud_rain:",
	"1210": ":cloud_snow:",
	"1213": ":cloud_snow:",
	"1219": ":cloud_snow:",
	"1222": ":cloud_snow:",
	"1225": ":cloud_snow:",
	"1273": ":thunder_cloud_rain:",
	"1276": ":thunder_cloud_rain:",
	"1279": ":thunder_cloud_rain:",
	"1246": ":cloud_tornado:"
};

const Discord = require("discord.js");
const axios = require("axios");

const mainURL = "https://api.weatherapi.com/v1/current.json"; // &q=Athens
const weatherKey = "key=" + process.env.weatherapi;
const botName = "alpha";

const kanjiLookupTable = {
	"comfyEmbed1": {
		"color": "#268F69",
		"link": "https://static.zerochan.net/Yokohama.Kaidashi.Kikou.full.434673.jpg",
	},

	"comfyEmbed2": {
		"color": "#268F69",
		"link": "https://static.zerochan.net/Alpha.Hatsuseno.full.434695.jpg",
	},

	"comfyEmbed3": {
		"color": "#268F69",
		"link": "https://static.zerochan.net/Yokohama.Kaidashi.Kikou.full.434689.jpg",
	},

	"comfyEmbed4": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.434675.jpg",
	},

	"comfyEmbed5": {
		"color": "#268F69",
		"link": "https://static.zerochan.net/Yokohama.Kaidashi.Kikou.full.434312.jpg",
	},

	"comfyEmbed6": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.434285.jpg",
	},

	"comfyEmbed7": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.445870.jpg",
	},

	"comfyEmbed8": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.445859.jpg",
	},

	"comfyEmbed9": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.445868.jpg",
	},

	"comfyEmbed10": {
		"color": "#268F69",
		"link": "https://static.zerochan.net/Alpha.Hatsuseno.full.445865.jpg",
	},

	"comfyEmbed11": {
		"color": "#268F69",
		"link": "https://static.zerochan.net/Yokohama.Kaidashi.Kikou.full.434693.jpg",
	},

	"comfyEmbed12": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Alpha.Hatsuseno.600.1781274.jpg",
	},

	"comfyEmbed13": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.434693.jpg",
	},

	"comfyEmbed14": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.434682.jpg",
	},

	"comfyEmbed15": {
		"color": "#268F69",
		"link": "https://static.zerochan.net/Alpha.Hatsuseno.full.434690.jpg",
	},
};



const comfyLookupTable = {
	"comfyEmbed1": {
		"color": "#268F69",
		"link": "https://static.zerochan.net/Yokohama.Kaidashi.Kikou.full.434673.jpg",
	},

	"comfyEmbed2": {
		"color": "#268F69",
		"link": "https://static.zerochan.net/Alpha.Hatsuseno.full.434695.jpg",
	},

	"comfyEmbed3": {
		"color": "#268F69",
		"link": "https://static.zerochan.net/Yokohama.Kaidashi.Kikou.full.434689.jpg",
	},

	"comfyEmbed4": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.434675.jpg",
	},

	"comfyEmbed5": {
		"color": "#268F69",
		"link": "https://static.zerochan.net/Yokohama.Kaidashi.Kikou.full.434312.jpg",
	},

	"comfyEmbed6": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.434285.jpg",
	},

	"comfyEmbed7": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.445870.jpg",
	},

	"comfyEmbed8": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.445859.jpg",
	},

	"comfyEmbed9": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.445868.jpg",
	},

	"comfyEmbed10": {
		"color": "#268F69",
		"link": "https://static.zerochan.net/Alpha.Hatsuseno.full.445865.jpg",
	},

	"comfyEmbed11": {
		"color": "#268F69",
		"link": "https://static.zerochan.net/Yokohama.Kaidashi.Kikou.full.434693.jpg",
	},

	"comfyEmbed12": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Alpha.Hatsuseno.600.1781274.jpg",
	},

	"comfyEmbed13": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.434693.jpg",
	},

	"comfyEmbed14": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.434682.jpg",
	},

	"comfyEmbed15": {
		"color": "#268F69",
		"link": "https://static.zerochan.net/Alpha.Hatsuseno.full.434690.jpg",
	},
};

const embedLookupTable = {
	"scared": {
		"title": ";-;",
		"color": "#268F69",
		"link": "https://i.imgur.com/BJPVXoK.gif"
	},

	"bored": {
		"title": "Hmm...",
		"color": "#268F69",
		"link": "https://i.imgur.com/u8WmuAO.gif"
	},

	"photo": {
		"title": "Say cheese!",
		"color": "#268F69",
		"link": "https://i.imgur.com/gNv4bBn.gif"
	},

	"unpack": {
		"title": "What could be inside?",
		"color": "#268F69",
		"link": "https://i.imgur.com/MetIGcs.gif"
	},

	"bye": {
		"title": "Until we meet again...",
		"color": "#268F69",
		"link": "https://i.imgur.com/YlQ2FK0.gif"
	},

	"coffee": {
		"title": "Some coffee would be nice...",
		"color": "#268F69",
		"link": "https://i.imgur.com/nliXcu5.gif"
	},

	"taste": {
		"title": "Let me taste it- Ugh???",
		"color": "#268F69",
		"link": "https://i.imgur.com/4j3usy7.gif"
	},

	"guitar": {
		"title": "Just me and my guitar...",
		"color": "#268F69",
		"link": "https://i.imgur.com/ySp4TJy.gif"
	},

	"ehehe": {
		"title": "Ehehe...",
		"color": "#268F69",
		"link": "https://i.imgur.com/Ltdg1I1.gif"
	},

	"welcome": {
		"title": "Welcome!",
		"color": "#268F69",
		"link": "https://i.imgur.com/M2y6LGl.gif"
	},
	
	"morning": {
		"title": "Good morning!",
		"color": "#268F69",
		"link": "https://i.imgur.com/HyfmxW1.gif"
	},

	"splash": {
		"title": "SPLASH!",
		"color": "#268F69",
		"link": "https://i.imgur.com/NuMArjc.gif"
	}
};

var currentobject=0;

function chooseIncrementFromObject(obj) {
	if(currentobject<Object.keys(obj).length){
		currentobject++;
	}
	else{
		currentobject=0;
	}	
	var keys = Object.keys(obj);
	return obj[keys[currentobject]];
};

const bot = new Discord.Client();
var randomnumber=0;
var _message = {};
bot.once("ready", () => {
	console.log("Ready!");
});

bot.login(process.env.bot_token);
bot.on("message", (message) => {
    console.log(message);
    _message = message;
    if(message.author.username === botName) {
        return;
    }

	if(message.content.indexOf("a!") == 0) {
		let command_string = message.content.trim().slice(2)
		let embedData = embedLookupTable[command_string]
		if(embedData) {
			let embed = new Discord.MessageEmbed()
				.setTitle(embedData["title"])
				.setColor(embedData["color"])
				.setImage(embedData["link"])

			message.channel.send(embed)
			return;
		}

		switch(command_string) {
			case "comfy":
				let embedData = chooseIncrementFromObject(comfyLookupTable);
				let embed = new Discord.MessageEmbed()
					.setColor(embedData["color"])
					.setImage(embedData["link"])

				message.channel.send(embed)
				break;

			case "weather":
				let params = message.content.split("in");
				let queryParameter = params[1].trim();
				message.channel.startTyping();
				fetchWeatherConditions(queryParameter, (result) => {
					let weather = parseWeatherConditions(result);
						let temperature = result["current"].temp_c + "℃" + " - " + result["current"].temp_f + "℉";
						message.channel.send("The weather currently is: " + weather + " and the :thermometer:" + temperature);
						message.channel.stopTyping();
				});

				break;
				
			case "kanji":
				randomnumber= Math.floor(Math.random() * 2136);
				let embedKanji = new Discord.MessageEmbed()
					.setColor('#268F69')
					.setTitle(kanjiarray[randomnumber])
					.setDescription(readarray[randomnumber])
					.addFields(
						{ name: 'Meaning', value: meaningarray[randomnumber] },
					)
				message.channel.send(embedKanji);
				break;	

			case "help":
				message.channel.send("Available commands: comfy, scared, bored, photo, unpack, bye, coffee, welcome, taste, guitar, ehehe, splash, kanji, weather in <city name>, link");
				break;
				
			case "ost":
				randomost= Math.floor(Math.random() * Object.keys(ost).length);
				message.channel.send(ost[randomost]);
				break;

			case "link":
				message.channel.send("https://discord.com/api/oauth2/authorize?client_id=718773791945261097&permissions=378944&scope=bot");
				break;
		}
	}
});


/**
 *
 *
 * @param {*} queryParameter - The city or other condition to search the weather API for
 * @param {*} callback - A function to receive our response
 */
function fetchWeatherConditions(queryParameter, callback) {
    const options = {
        hostname: mainURL,
        path: "?" + weatherKey + "&q=" + escape(queryParameter),
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }

    axios.get(options.hostname + options.path)
        .then(response => {

            if (callback) {
                callback(response.data);
            }

        })
        .catch(error => {
            console.log(error);
            _message.channel.stopTyping();
        });
}


/**
 *
 *
 * @param {*} data - the weather data response
 * @returns
 */
function parseWeatherConditions(data) {
    return weatherLookupTable[String(data["current"]["condition"].code)];
}
