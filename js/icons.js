// Icon library for Logo Generator
const iconLibrary = [
    // Business & Finance
    { class: 'fas fa-briefcase', name: '公文包' },
    { class: 'fas fa-building', name: '建筑' },
    { class: 'fas fa-chart-line', name: '图表' },
    { class: 'fas fa-coins', name: '金币' },
    { class: 'fas fa-handshake', name: '握手' },
    { class: 'fas fa-landmark', name: '地标' },
    { class: 'fas fa-piggy-bank', name: '储蓄罐' },
    { class: 'fas fa-wallet', name: '钱包' },

    // Technology
    { class: 'fas fa-laptop', name: '笔记本' },
    { class: 'fas fa-mobile-alt', name: '手机' },
    { class: 'fas fa-desktop', name: '电脑' },
    { class: 'fas fa-code', name: '代码' },
    { class: 'fas fa-database', name: '数据库' },
    { class: 'fas fa-server', name: '服务器' },
    { class: 'fas fa-microchip', name: '芯片' },
    { class: 'fas fa-robot', name: '机器人' },
    { class: 'fas fa-wifi', name: 'WiFi' },
    { class: 'fas fa-cloud', name: '云' },

    // Creative & Design
    { class: 'fas fa-palette', name: '调色板' },
    { class: 'fas fa-paint-brush', name: '画笔' },
    { class: 'fas fa-pen-fancy', name: '钢笔' },
    { class: 'fas fa-camera', name: '相机' },
    { class: 'fas fa-film', name: '电影' },
    { class: 'fas fa-music', name: '音乐' },
    { class: 'fas fa-headphones', name: '耳机' },
    { class: 'fas fa-video', name: '视频' },

    // Nature & Environment
    { class: 'fas fa-leaf', name: '叶子' },
    { class: 'fas fa-tree', name: '树' },
    { class: 'fas fa-seedling', name: '幼苗' },
    { class: 'fas fa-sun', name: '太阳' },
    { class: 'fas fa-moon', name: '月亮' },
    { class: 'fas fa-star', name: '星星' },
    { class: 'fas fa-water', name: '水' },
    { class: 'fas fa-mountain', name: '山' },
    { class: 'fas fa-globe', name: '地球' },
    { class: 'fas fa-globe-asia', name: '亚洲' },

    // Food & Drink
    { class: 'fas fa-coffee', name: '咖啡' },
    { class: 'fas fa-utensils', name: '餐具' },
    { class: 'fas fa-pizza-slice', name: '披萨' },
    { class: 'fas fa-ice-cream', name: '冰淇淋' },
    { class: 'fas fa-birthday-cake', name: '蛋糕' },
    { class: 'fas fa-wine-glass', name: '酒杯' },
    { class: 'fas fa-beer', name: '啤酒' },
    { class: 'fas fa-apple-alt', name: '苹果' },

    // Health & Fitness
    { class: 'fas fa-heartbeat', name: '心跳' },
    { class: 'fas fa-dumbbell', name: '哑铃' },
    { class: 'fas fa-running', name: '跑步' },
    { class: 'fas fa-medkit', name: '医疗箱' },
    { class: 'fas fa-stethoscope', name: '听诊器' },
    { class: 'fas fa-pills', name: '药丸' },

    // Education
    { class: 'fas fa-graduation-cap', name: '毕业帽' },
    { class: 'fas fa-book', name: '书籍' },
    { class: 'fas fa-book-open', name: '打开的书' },
    { class: 'fas fa-pencil-alt', name: '铅笔' },
    { class: 'fas fa-chalkboard-teacher', name: '教师' },
    { class: 'fas fa-university', name: '大学' },
    { class: 'fas fa-atom', name: '原子' },
    { class: 'fas fa-flask', name: '烧瓶' },

    // Transport
    { class: 'fas fa-car', name: '汽车' },
    { class: 'fas fa-plane', name: '飞机' },
    { class: 'fas fa-ship', name: '轮船' },
    { class: 'fas fa-train', name: '火车' },
    { class: 'fas fa-bicycle', name: '自行车' },
    { class: 'fas fa-motorcycle', name: '摩托车' },
    { class: 'fas fa-rocket', name: '火箭' },

    // Shopping & E-commerce
    { class: 'fas fa-shopping-cart', name: '购物车' },
    { class: 'fas fa-shopping-bag', name: '购物袋' },
    { class: 'fas fa-store', name: '商店' },
    { class: 'fas fa-tags', name: '标签' },
    { class: 'fas fa-gift', name: '礼物' },
    { class: 'fas fa-percent', name: '折扣' },

    // Communication
    { class: 'fas fa-envelope', name: '邮件' },
    { class: 'fas fa-phone', name: '电话' },
    { class: 'fas fa-comments', name: '评论' },
    { class: 'fas fa-comment-dots', name: '聊天' },
    { class: 'fas fa-bullhorn', name: '喇叭' },
    { class: 'fas fa-bell', name: '铃铛' },

    // Security
    { class: 'fas fa-shield-alt', name: '盾牌' },
    { class: 'fas fa-lock', name: '锁' },
    { class: 'fas fa-key', name: '钥匙' },
    { class: 'fas fa-fingerprint', name: '指纹' },
    { class: 'fas fa-user-shield', name: '用户安全' },

    // Shapes & Symbols
    { class: 'fas fa-circle', name: '圆形' },
    { class: 'fas fa-square', name: '方形' },
    { class: 'fas fa-heart', name: '爱心' },
    { class: 'fas fa-bolt', name: '闪电' },
    { class: 'fas fa-fire', name: '火焰' },
    { class: 'fas fa-gem', name: '宝石' },
    { class: 'fas fa-crown', name: '皇冠' },
    { class: 'fas fa-trophy', name: '奖杯' },
    { class: 'fas fa-medal', name: '奖牌' },
    { class: 'fas fa-infinity', name: '无限' },

    // Animals
    { class: 'fas fa-paw', name: '爪印' },
    { class: 'fas fa-dog', name: '狗' },
    { class: 'fas fa-cat', name: '猫' },
    { class: 'fas fa-horse', name: '马' },
    { class: 'fas fa-fish', name: '鱼' },
    { class: 'fas fa-dove', name: '鸽子' },
    { class: 'fas fa-dragon', name: '龙' },
    { class: 'fas fa-spider', name: '蜘蛛' },

    // Home & Living
    { class: 'fas fa-home', name: '家' },
    { class: 'fas fa-couch', name: '沙发' },
    { class: 'fas fa-bed', name: '床' },
    { class: 'fas fa-bath', name: '浴缸' },
    { class: 'fas fa-lightbulb', name: '灯泡' },
    { class: 'fas fa-plug', name: '插头' },

    // Social & People
    { class: 'fas fa-users', name: '用户组' },
    { class: 'fas fa-user-tie', name: '商务人员' },
    { class: 'fas fa-user-graduate', name: '毕业生' },
    { class: 'fas fa-hands-helping', name: '互助' },
    { class: 'fas fa-hand-holding-heart', name: '爱心' },

    // Abstract & Modern
    { class: 'fas fa-cube', name: '立方体' },
    { class: 'fas fa-cubes', name: '立方体组' },
    { class: 'fas fa-layer-group', name: '图层' },
    { class: 'fas fa-vector-square', name: '矢量' },
    { class: 'fas fa-bezier-curve', name: '曲线' },
    { class: 'fas fa-drafting-compass', name: '圆规' },
    { class: 'fas fa-ruler-combined', name: '尺子' },
    { class: 'fas fa-cogs', name: '齿轮组' },
    { class: 'fas fa-cog', name: '齿轮' },
    { class: 'fas fa-wrench', name: '扳手' },
    { class: 'fas fa-hammer', name: '锤子' },
    { class: 'fas fa-magic', name: '魔法棒' },
    { class: 'fas fa-wand-magic-sparkles', name: '魔法' },
    { class: 'fas fa-sparkles', name: '闪光' },
    { class: 'fas fa-feather-alt', name: '羽毛' },
    { class: 'fas fa-anchor', name: '锚' },
    { class: 'fas fa-compass', name: '指南针' },
    { class: 'fas fa-map-marker-alt', name: '定位' },
    { class: 'fas fa-crosshairs', name: '十字准星' },
    { class: 'fas fa-bullseye', name: '靶心' },
    { class: 'fas fa-adjust', name: '调节' },
    { class: 'fas fa-balance-scale', name: '天平' },
    { class: 'fas fa-chart-pie', name: '饼图' },
    { class: 'fas fa-signal', name: '信号' },
    { class: 'fas fa-sync-alt', name: '同步' },
    { class: 'fas fa-exchange-alt', name: '交换' },
    { class: 'fas fa-link', name: '链接' },
    { class: 'fas fa-unlink', name: '断开' },
    { class: 'fas fa-expand', name: '展开' },
    { class: 'fas fa-compress', name: '压缩' },
    { class: 'fas fa-arrows-alt', name: '移动' },
    { class: 'fas fa-redo', name: '重做' },
    { class: 'fas fa-check', name: '勾选' },
    { class: 'fas fa-check-circle', name: '已完成' },
    { class: 'fas fa-plus', name: '加号' },
    { class: 'fas fa-minus', name: '减号' },
    { class: 'fas fa-times', name: '叉号' },
    { class: 'fas fa-hashtag', name: '井号' },
    { class: 'fas fa-at', name: '@符号' }
];

// Export for use in other modules
window.iconLibrary = iconLibrary;
