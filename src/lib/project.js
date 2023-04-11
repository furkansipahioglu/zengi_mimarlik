export async function getPostIdList() {
    return [{

      params: {
        id: '1'
      }
    }, {
      params: {
        id: '2'
      }
    }, 
    {
       params: {
          id: '3'
        }
      },
      {
      params: {
        id: '4'
      }
      

      
    }]
  }


export async function getPostDetails(projectID) {
    const dataSet = {
      '1': [[
        {
        id: 1,
        title: "K.A. Villa Projesi",
        image: "/images/detail.jpg",
        imagemobile: "/images/ankara-villa/mob.jpg",
        },
    ],[
        {
        src: "/images/ankara-villa/ankaravilla001.jpg",
        alt: "Zengi Mimarlık Gallery Image 1",
        location: 'Ankara',
        year: '2021',
        project_name: 'K.A. Villa Projesi',
        project_location: "Mutfak",
      },
      {
        src: "/images/ankara-villa/ankaravilla002.jpg",
        alt: "Zengi Mimarlık Gallery Image 2",
        location: 'Ankara',
        year: '2021',
        project_name: 'K.A. Villa Projesi',
        project_location: "Mutfak",
      },
      {
        src: "/images/ankara-villa/ankaravilla3.jpg",
        alt: "Zengi Mimarlık Gallery Image 3",
        location: 'Ankara',
        year: '2021',
        project_name: 'K.A. Villa Projesi',
        project_location: "Mutfak",
      },
      {
        src: "/images/ankara-villa/ankaravilla004.jpg",
        alt: "Zengi Mimarlık Gallery Image 4",
        location: 'Ankara',
        year: '2021',
        project_name: 'K.A. Villa Projesi',
        project_location: "Mutfak",
      },
      {
        src: "/images/ankara-villa/ankaravilla005.jpg",
        alt: "Zengi Mimarlık Gallery Image 5",
        location: 'Ankara',
        year: '2021',
        project_name: 'K.A. Villa Projesi',
        project_location: "Mutfak",
      },
      {
        src: "/images/ankara-villa/ankaravilla006.jpg",
        alt: "Zengi Mimarlık Gallery Image 6",
        location: 'Ankara',
        year: '2021',
        location: 'Ankara',
        year: '2021',
        project_name: 'K.A. Villa Projesi',
        project_location: "Mutfak",
      },
    ]],
    '2': [[
        {
        id: 2,
        title: "Düşler Vadisi A.N.N Villa",
        image: "/images/ann-villa/detail.jpg",
        imagemobile: "/images/ann-villa/mob2.jpg",
        },
    ],[
        {
        src: "/images/ann-villa/annvilla001.jpg",
        alt: "Zengi Mimarlık Gallery Image 1",
        location: 'İstanbul / Riva',
        year: '2022',
        project_name: 'Düşler Vadisi A.N.N Villa',
        project_location: "Salon+Mutfak",
      },
      {
        src: "/images/ann-villa/annvilla002.jpg",
        alt: "Zengi Mimarlık Gallery Image 2",
        location: 'İstanbul / Riva',
        year: '2022',
        project_name: 'Düşler Vadisi A.N.N Villa',
        project_location: "Mutfak",
      },
      {
        src: "/images/ann-villa/annvilla003.jpg",
        alt: "Zengi Mimarlık Gallery Image 3",
        location: 'İstanbul / Riva',
        year: '2022',
        project_name: 'Düşler Vadisi A.N.N Villa',
        project_location: "Mutfak",
      },
      {
        src: "/images/ann-villa/annvilla004.jpg",
        alt: "Zengi Mimarlık Gallery Image 4",
        location: 'İstanbul / Riva',
        year: '2022',
        project_name: 'Düşler Vadisi A.N.N Villa',
        project_location: "Mutfak",
      },
      {
        src: "/images/ann-villa/annvilla005.jpg",
        alt: "Zengi Mimarlık Gallery Image 5",
        location: 'İstanbul / Riva',
        year: '2022',
        project_name: 'Düşler Vadisi A.N.N Villa',
        project_location: "Salon",
      },
    //   {
    //     src: "/images/ankara-villa/ankaravilla006.jpg",
    //     alt: "Zengi Mimarlık Gallery Image 6",
    //     location: 'Ankara',
    //     year: '2021',
    //     location: 'Ankara',
    //     year: '2021',
    //     project_name: 'K.A. Villa Projesi',
    //   },
    ]],
      
    '3': [[
        {
        id: 1,
        title: "S.T.K. Yönetim Ofisi",
        image: "/images/proje-5/detail.jpg",
        imagemobile: "/images/proje-5/mob3.jpg",
        },
    ],[
        {
        src: "/images/proje-5/STK(1).JPG",
        alt: "Zengi Mimarlık Gallery Image 1",
        location: 'İstanbul/Eyüp',
        year: '2021',
        project_name: 'S.T.K. Yönetim Ofisi',
        project_location: "Giriş-Karşılama",
      },
      {
        src: "/images/proje-5/STK(2).jpg",
        alt: "Zengi Mimarlık Gallery Image 2",
        location: 'İstanbul/Eyüp',
        year: '2021',
        project_name: 'S.T.K. Yönetim Ofisi',
        project_location: "Giriş-Karşılama",
      },
      {
        src: "/images/proje-5/STK(3).JPG",
        alt: "Zengi Mimarlık Gallery Image 3",
        location: 'İstanbul/Eyüp',
        year: '2021',
        project_name: 'S.T.K. Yönetim Ofisi',
        project_location: "Giriş-Karşılama",
      },
      {
        src: "/images/proje-5/STK(4).jpg",
        alt: "Zengi Mimarlık Gallery Image 4",
        location: 'İstanbul/Eyüp',
        year: '2021',
        project_name: 'S.T.K. Yönetim Ofisi',
        project_location: "Giriş-Karşılama",
      },
      {
        src: "/images/proje-5/STK(5).jpg",
        alt: "Zengi Mimarlık Gallery Image 5",
        location: 'İstanbul/Eyüp',
        year: '2021',
        project_name: 'S.T.K. Yönetim Ofisi',
        project_location: "Giriş-Karşılama",
      },
      {
        src: "/images/proje-5/STK(6).JPG",
        alt: "Zengi Mimarlık Gallery Image 6",
        location: 'İstanbul/Eyüp',
        year: '2021',
        project_name: 'S.T.K. Yönetim Ofisi',
        project_location: "Giriş-Karşılama",
      },
      {
        src: "/images/proje-5/STK(7).JPG",
        alt: "Zengi Mimarlık Gallery Image 6",
        location: 'İstanbul/Eyüp',
        year: '2021',
        project_name: 'S.T.K. Yönetim Ofisi',
        project_location: "Giriş-Karşılama",
      },
      {
        src: "/images/proje-5/STK(8).jpg",
        alt: "Zengi Mimarlık Gallery Image 6",
        location: 'İstanbul/Eyüp',
        year: '2021',
        project_name: 'S.T.K. Yönetim Ofisi',
        project_location: "Giriş-Holü",
      },
    //   {
    //     src: "/images/proje-5/STK(9).jpg",
    //     alt: "Zengi Mimarlık Gallery Image 6",
    //     location: 'İstanbul/Eyüp',
    //     year: '2021',
    //     project_name: 'S.T.K. Yönetim Ofisi',
    //     project_location: "Giriş-Karşılama",
    //   },
      {
        src: "/images/proje-5/STK(10).jpg",
        alt: "Zengi Mimarlık Gallery Image 6",
        location: 'İstanbul/Eyüp',
        year: '2021',
        project_name: 'S.T.K. Yönetim Ofisi',
        project_location: "Yönetici Odası",
      },
      {
        src: "/images/proje-5/STK(11).jpg",
        alt: "Zengi Mimarlık Gallery Image 6",
        location: 'İstanbul/Eyüp',
        year: '2021',
        project_name: 'S.T.K. Yönetim Ofisi',
        project_location: "Yönetici Odası",
      },
      {
        src: "/images/proje-5/STK(12).jpg",
        alt: "Zengi Mimarlık Gallery Image 6",
        location: 'İstanbul/Eyüp',
        year: '2021',
        project_name: 'S.T.K. Yönetim Ofisi',
        project_location: "Yönetici Odası",
      },
      {
        src: "/images/proje-5/STK(13).jpg",
        alt: "Zengi Mimarlık Gallery Image 6",
        location: 'İstanbul/Eyüp',
        year: '2021',
        project_name: 'S.T.K. Yönetim Ofisi',
        project_location: "Yönetici Odası",
      },
      {
        src: "/images/proje-5/STK(14).jpg",
        alt: "Zengi Mimarlık Gallery Image 6",
        location: 'İstanbul/Eyüp',
        year: '2021',
        project_name: 'S.T.K. Yönetim Ofisi',
        project_location: "Yönetici Odası",
      },
      {
        src: "/images/proje-5/STK(15).jpg",
        alt: "Zengi Mimarlık Gallery Image 6",
        location: 'İstanbul/Eyüp',
        year: '2021',
        project_name: 'S.T.K. Yönetim Ofisi',
        project_location: "Yönetici Odası",
      },
      {
        src: "/images/proje-5/STK(16).jpg",
        alt: "Zengi Mimarlık Gallery Image 6",
        location: 'İstanbul/Eyüp',
        year: '2021',
        project_name: 'S.T.K. Yönetim Ofisi',
        project_location: "Ofis",
      },
      {
        src: "/images/proje-5/STK(17).jpg",
        alt: "Zengi Mimarlık Gallery Image 6",
        location: 'İstanbul/Eyüp',
        year: '2021',
        project_name: 'S.T.K. Yönetim Ofisi',
        project_location: "Ofis",
      },
      {
        src: "/images/proje-5/STK(19).jpg",
        alt: "Zengi Mimarlık Gallery Image 6",
        location: 'İstanbul/Eyüp',
        year: '2021',
        project_name: 'S.T.K. Yönetim Ofisi',
        project_location: "Ofis",
      },
      {
        src: "/images/proje-5/STK(20).jpg",
        alt: "Zengi Mimarlık Gallery Image 6",
        location: 'İstanbul/Eyüp',
        year: '2021',
        project_name: 'S.T.K. Yönetim Ofisi',
        project_location: "Kafeterya",
      },
      {
        src: "/images/proje-5/STK(21).jpg",
        alt: "Zengi Mimarlık Gallery Image 6",
        location: 'İstanbul/Eyüp',
        year: '2021',
        project_name: 'S.T.K. Yönetim Ofisi',
        project_location: "Mescit",
      },
      {
        src: "/images/proje-5/STK(22).jpg",
        alt: "Zengi Mimarlık Gallery Image 6",
        location: 'İstanbul/Eyüp',
        year: '2021',
        project_name: 'S.T.K. Yönetim Ofisi',
        project_location: "Mescit",
      },
      {
        src: "/images/proje-5/STK(23).jpg",
        alt: "Zengi Mimarlık Gallery Image 6",
        location: 'İstanbul/Eyüp',
        year: '2021',
        project_name: 'S.T.K. Yönetim Ofisi',
        project_location: "Abdesthane",
      },
    ]],

    '4': [[
        {
        id: 1,
        title: "S.T.K. Yönetim Ofisi Stüdyo",
        image: "/images/proje-7/detail.jpg",
        imagemobile: "/images/proje-7/mob4.jpg",
        },
    ],[
        {
        src: "/images/proje-7/studyo001.jpg",
        alt: "Zengi Mimarlık Gallery Image 1",
        location: 'İstanbul/Eyüp',
        year: '2021',
        project_name: 'S.T.K. Yönetim Ofisi',
        project_location: "Stüdyo",
      },
      {
        src: "/images/proje-7/studyo002.jpg",
        alt: "Zengi Mimarlık Gallery Image 2",
        location: 'İstanbul/Eyüp',
        year: '2021',
        project_name: 'S.T.K. Yönetim Ofisi',
        project_location: "Stüdyo",
      },
      {
        src: "/images/proje-7/studyo004.jpg",
        alt: "Zengi Mimarlık Gallery Image 3",
        location: 'İstanbul/Eyüp',
        year: '2021',
        project_name: 'S.T.K. Yönetim Ofisi',
        project_location: "MuStüdyotfak",
      },
      {
        src: "/images/proje-7/studyo005.jpg",
        alt: "Zengi Mimarlık Gallery Image 4",
        location: 'İstanbul/Eyüp',
        year: '2021',
        project_name: 'S.T.K. Yönetim Ofisi',
        project_location: "Stüdyo",
      },
      {
        src: "/images/proje-7/studyo006.jpg",
        alt: "Zengi Mimarlık Gallery Image 5",
        location: 'İstanbul/Eyüp',
        year: '2021',
        project_name: 'S.T.K. Yönetim Ofisi',
        project_location: "Stüdyo",
      },
      {
        src: "/images/proje-7/studyo007.jpg",
        alt: "Zengi Mimarlık Gallery Image 6",
        location: 'İstanbul/Eyüp',
        year: '2021',
        project_name: 'S.T.K. Yönetim Ofisi',
        project_location: "Stüdyo",
      },
    ]],
    
    }
    return dataSet[projectID]
  }