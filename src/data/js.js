let data = {
  sub: [
    {
      name: '综艺',
      resourceCount: 1000,
      imgId: 0,
      imgUrl: null,
      type: 0,
      category: 4,
      resourceType: 0,
      hot: true,
      activity: false,
    },
    {
      name: '流行',
      resourceCount: 1000,
      imgId: 0,
      imgUrl: null,
      type: 0,
      category: 1,
      resourceType: 0,
      hot: true,
      activity: false,
    },
    {
      name: '影视原声',
      resourceCount: 1000,
      imgId: 0,
      imgUrl: null,
      type: 0,
      category: 4,
      resourceType: 0,
      hot: true,
      activity: false,
    },
    {
      name: '华语',
      resourceCount: 813,
      imgId: 0,
      imgUrl: null,
      type: 0,
      category: 0,
      resourceType: 0,
      hot: true,
      activity: false,
    },
    {
      name: '清晨',
      resourceCount: 1000,
      imgId: 0,
      imgUrl: null,
      type: 1,
      category: 2,
      resourceType: 0,
      hot: false,
      activity: false,
    },
    {
      name: '怀旧',
      resourceCount: 799,
      imgId: 0,
      imgUrl: null,
      type: 0,
      category: 3,
      resourceType: 0,
      hot: true,
      activity: false,
    },
    {
      name: '摇滚',
      resourceCount: 824,
      imgId: 0,
      imgUrl: null,
      type: 0,
      category: 1,
      resourceType: 0,
      hot: true,
      activity: false,
    },
    {
      name: 'ACG',
      resourceCount: 1000,
      imgId: 0,
      imgUrl: null,
      type: 0,
      category: 4,
      resourceType: 0,
      hot: true,
      activity: false,
    },
  ],
  categories: { 0: '语种', 1: '风格', 2: '场景', 3: '情感', 4: '主题' },
};

let result = [];

// 遍历categories（分类）对象
for (let categoryId in data.categories) {
  let categoryTitle = data.categories[categoryId];
  let categorySubList = [];

  // 遍历sub数组，找到符合当前分类的对象并加入categorySubList
  for (let i = 0; i < data.sub.length; i++) {
    let subData = data.sub[i];
    if (subData.category == categoryId) {
      categorySubList.push(subData);
    }
  }

  // 创建当前分类的对象，加入result数组
  result.push({ title: categoryTitle, subTitle: categorySubList });
}

console.log(result);
