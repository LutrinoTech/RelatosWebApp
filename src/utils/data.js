const books = [
  {
    id: "book1",
    title: "Song of the Ancients",
    author: "John Smith",
    price: 19.99,
    likes: 245,
    pages: 320,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1ce3cec-37da-403b-a495-afa75a7728b0/dhfhb85-d29589db-0dc1-4905-b097-b48e70629b6e.jpg/v1/fit/w_800,h_1200,q_70,strp/fantasy_book_cover_design___song_of_the_ancients_by_lachrome_dhfhb85-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwMCIsInBhdGgiOiJcL2ZcL2QxY2UzY2VjLTM3ZGEtNDAzYi1hNDk1LWFmYTc1YTc3MjhiMFwvZGhmaGI4NS1kMjk1ODlkYi0wZGMxLTQ5MDUtYjA5Ny1iNDhlNzA2MjliNmUuanBnIiwid2lkdGgiOiI8PTgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.BWGstD3hSbtMdnvLWRlqjS9a3Zq2eIyQiCBYvnbdbTU",
  },
  {
    id: "book2",
    title: "Whispers of the Skyborn",
    author: "Sarah Williams",
    price: 24.99,
    likes: 189,
    pages: 280,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1ce3cec-37da-403b-a495-afa75a7728b0/dhfwbll-1639f75b-2719-47b3-9a99-241e6a221b77.jpg/v1/fit/w_828,h_1242,q_70,strp/fantasy_book_cover_design__whispers_of_the_skyborn_by_lachrome_dhfwbll-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgwMCIsInBhdGgiOiJcL2ZcL2QxY2UzY2VjLTM3ZGEtNDAzYi1hNDk1LWFmYTc1YTc3MjhiMFwvZGhmd2JsbC0xNjM5Zjc1Yi0yNzE5LTQ3YjMtOWE5OS0yNDFlNmEyMjFiNzcuanBnIiwid2lkdGgiOiI8PTEyMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.0R_sKlmepceYLdlV-lJ-aJMXxx7XyaQrUnZsMosB2tk",
  },
  {
    id: "book3",
    title: "Sincerely, Yours",
    author: "Michael Brown",
    price: 21.99,
    likes: 312,
    pages: 420,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1ce3cec-37da-403b-a495-afa75a7728b0/dec95rh-4d9c88ef-9480-46ad-a188-581da961f945.jpg/v1/fit/w_800,h_1200,q_70,strp/romance_book_cover_design__2_by_lachrome_dec95rh-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwMCIsInBhdGgiOiJcL2ZcL2QxY2UzY2VjLTM3ZGEtNDAzYi1hNDk1LWFmYTc1YTc3MjhiMFwvZGVjOTVyaC00ZDljODhlZi05NDgwLTQ2YWQtYTE4OC01ODFkYTk2MWY5NDUuanBnIiwid2lkdGgiOiI8PTgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.2cZN2GGy-iAG_TWgQ6J1esBPTktxJ5yNDqZ8FQF7xIs",
  },
  {
    id: "book4",
    title: "The Midnight Garden",
    author: "Emily Davis",
    price: 22.99,
    likes: 278,
    pages: 350,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1d277363-93af-45f9-b5da-e5e9df682c03/djpstt9-1eb53f74-6987-4438-9daf-c0a20275a9db.jpg/v1/fit/w_828,h_1242,q_70,strp/book_covers_1_20250508_042055_0000_by_papangu999_djpstt9-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMSIsInBhdGgiOiJcL2ZcLzFkMjc3MzYzLTkzYWYtNDVmOS1iNWRhLWU1ZTlkZjY4MmMwM1wvZGpwc3R0OS0xZWI1M2Y3NC02OTg3LTQ0MzgtOWRhZi1jMGEyMDI3NWE5ZGIuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ECHZX8jke_zfAJlg7Gt_qrs6MxpH6MBPZL26k9EfIlc",
  },
  {
    id: "book5",
    title: "The Lost City",
    author: "David Wilson",
    price: 18.99,
    likes: 167,
    pages: 290,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1d277363-93af-45f9-b5da-e5e9df682c03/dgrdpmj-b4636db9-be0b-4ed2-8edd-a3feff05a384.jpg/v1/fill/w_894,h_894,q_70,strp/untitled_by_papangu999_dgrdpmj-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzFkMjc3MzYzLTkzYWYtNDVmOS1iNWRhLWU1ZTlkZjY4MmMwM1wvZGdyZHBtai1iNDYzNmRiOS1iZTBiLTRlZDItOGVkZC1hM2ZlZmYwNWEzODQuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.PxvIei8sultIUTGZCVGbSJSoGPd_d1WGsNd9osSi3bs",
  },
  {
    id: "book6",
    title: "Echoes of Destiny",
    author: "Jennifer Lee",
    price: 23.99,
    likes: 423,
    pages: 380,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1d277363-93af-45f9-b5da-e5e9df682c03/dgtga5z-b7f0eeca-f090-4ed5-be2e-83d73c5d6e8e.jpg/v1/fit/w_828,h_1322,q_70,strp/mystic_by_papangu999_dgtga5z-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjA0MyIsInBhdGgiOiJcL2ZcLzFkMjc3MzYzLTkzYWYtNDVmOS1iNWRhLWU1ZTlkZjY4MmMwM1wvZGd0Z2E1ei1iN2YwZWVjYS1mMDkwLTRlZDUtYmUyZS04M2Q3M2M1ZDZlOGUuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.sWhVBEobQs9pvNDuivpXOC_ViXWaqAPe4e6uD3SMXf8",
  },
  {
    id: "book7",
    title: "Beyond the Stars",
    author: "Robert Johnson",
    price: 20.99,
    likes: 198,
    pages: 310,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1d277363-93af-45f9-b5da-e5e9df682c03/dgtgimc-6145e7f9-9e6b-4e4e-86de-38680b201136.jpg/v1/fit/w_828,h_1358,q_70,strp/db265ca40_by_papangu999_dgtgimc-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjEwMCIsInBhdGgiOiJcL2ZcLzFkMjc3MzYzLTkzYWYtNDVmOS1iNWRhLWU1ZTlkZjY4MmMwM1wvZGd0Z2ltYy02MTQ1ZTdmOS05ZTZiLTRlNGUtODZkZS0zODY4MGIyMDExMzYuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.3mwfrfSZsSVDEFKofkAQ_3wNMa778Qpk7X13Hc3KfFc",
  },
  {
    id: "book8",
    title: "The Silent Path",
    author: "Maria Garcia",
    price: 19.99,
    likes: 256,
    pages: 270,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6fdff844-0a58-408d-9709-152f5e1f2e9b/dfp8sh6-148dad1d-3754-431e-95ae-10137446429a.jpg/v1/fit/w_600,h_900,q_70,strp/the_glade_by_larimmy_dfp8sh6-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvNmZkZmY4NDQtMGE1OC00MDhkLTk3MDktMTUyZjVlMWYyZTliXC9kZnA4c2g2LTE0OGRhZDFkLTM3NTQtNDMxZS05NWFlLTEwMTM3NDQ2NDI5YS5qcGciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.wIxUgjrvj2PVYL5diOKDO4-Lwr90XgNhS9OOR-9lIVc",
  },
  {
    id: "book9",
    title: "Winter's Promise",
    author: "Thomas Anderson",
    price: 25.99,
    likes: 345,
    pages: 400,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6fdff844-0a58-408d-9709-152f5e1f2e9b/dfnrefj-a5e12268-2e3d-4fe8-a1d5-52f1dc965a45.jpg/v1/fit/w_600,h_900,q_70,strp/girl_and_fire_dragon_premade_book_cover_by_larimmy_dfnrefj-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvNmZkZmY4NDQtMGE1OC00MDhkLTk3MDktMTUyZjVlMWYyZTliXC9kZm5yZWZqLWE1ZTEyMjY4LTJlM2QtNGZlOC1hMWQ1LTUyZjFkYzk2NWE0NS5qcGciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.2z-eXWSdz94vcTBvlmD9FrlnsXRT4FEdyvqHq739u4E",
  },
  {
    id: "book10",
    title: "The Last Symphony",
    author: "Laura Chen",
    price: 21.99,
    likes: 289,
    pages: 330,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1d277363-93af-45f9-b5da-e5e9df682c03/dgrdl1g-a360ed10-5cc2-495f-ab41-6157ef873649.jpg/v1/fill/w_894,h_894,q_70,strp/untitled_by_papangu999_dgrdl1g-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzFkMjc3MzYzLTkzYWYtNDVmOS1iNWRhLWU1ZTlkZjY4MmMwM1wvZGdyZGwxZy1hMzYwZWQxMC01Y2MyLTQ5NWYtYWI0MS02MTU3ZWY4NzM2NDkuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.LkoGhCBh2GhOJswDpk2sJe3Q0u4b9Ma9ZDsPcjP9k6c",
  },
  {
    id: "book11",
    title: "The Crystal Oracle",
    author: "Rachel Black",
    price: 23.99,
    likes: 276,
    pages: 340,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6fdff844-0a58-408d-9709-152f5e1f2e9b/dfp9hb7-3e0e45b3-e18d-4f02-a682-7e386c0a1462.jpg/v1/fit/w_600,h_900,q_70,strp/phoenix_flies_by_larimmy_dfp9hb7-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvNmZkZmY4NDQtMGE1OC00MDhkLTk3MDktMTUyZjVlMWYyZTliXC9kZnA5aGI3LTNlMGU0NWIzLWUxOGQtNGYwMi1hNjgyLTdlMzg2YzBhMTQ2Mi5qcGciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.CHa2A0hT7kZgzhBPz66sTiUl-BRIox2KDqAENtw4qNw",
  },
  {
    id: "book12",
    title: "Shadows of Time",
    author: "Marcus Grey",
    price: 19.99,
    likes: 342,
    pages: 290,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1d277363-93af-45f9-b5da-e5e9df682c03/dgrijku-e64c10f6-dd7f-41ec-8dca-c2c30caf2a3e.jpg/v1/fit/w_828,h_1320,q_70,strp/c13d535a02e_by_papangu999_dgrijku-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjA0MCIsInBhdGgiOiJcL2ZcLzFkMjc3MzYzLTkzYWYtNDVmOS1iNWRhLWU1ZTlkZjY4MmMwM1wvZGdyaWprdS1lNjRjMTBmNi1kZDdmLTQxZWMtOGRjYS1jMmMzMGNhZjJhM2UuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.TDQoaWteR0B0SEmC4nKQBadK427EacdtxNOBrIW5yMI",
  },
  {
    id: "book13",
    title: "The Forgotten Gate",
    author: "Sophia Martinez",
    price: 22.99,
    likes: 198,
    pages: 380,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1d277363-93af-45f9-b5da-e5e9df682c03/dgrhqxs-7d68fdf5-43e2-4608-83d1-879cc5724ac3.jpg/v1/fill/w_894,h_894,q_70,strp/cannons_by_papangu999_dgrhqxs-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzFkMjc3MzYzLTkzYWYtNDVmOS1iNWRhLWU1ZTlkZjY4MmMwM1wvZGdyaHF4cy03ZDY4ZmRmNS00M2UyLTQ2MDgtODNkMS04NzljYzU3MjRhYzMuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.xv2NLaQKfkNPhczzkiisTqGKSL2qyD0msJoa6_T3yN4",
  },
  {
    id: "book14",
    title: "The Azure Dawn",
    author: "James Wright",
    price: 24.99,
    likes: 267,
    pages: 420,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1d277363-93af-45f9-b5da-e5e9df682c03/dgrhv5j-32d20e3c-019b-431b-a06e-0ccfaafb6d1b.jpg/v1/fill/w_894,h_894,q_70,strp/2022c_by_papangu999_dgrhv5j-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzFkMjc3MzYzLTkzYWYtNDVmOS1iNWRhLWU1ZTlkZjY4MmMwM1wvZGdyaHY1ai0zMmQyMGUzYy0wMTliLTQzMWItYTA2ZS0wY2NmYWFmYjZkMWIuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.-ga0BPg2SQc3C-t9ZCT7vBceWHLjgJQOz0wpoX0K7sI",
  },
];

const landingCover = [
  {
    id: "img0",
    url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/44d9129b-33c6-421b-ac9a-3dd0c186306f/djfjm3q-0cd9474e-a524-4b7f-92ac-c6adf96629d7.png/v1/fit/w_393,h_498,q_70,strp/book_cover_art_by_lucentmoth92_djfjm3q-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDk4IiwicGF0aCI6IlwvZlwvNDRkOTEyOWItMzNjNi00MjFiLWFjOWEtM2RkMGMxODYzMDZmXC9kamZqbTNxLTBjZDk0NzRlLWE1MjQtNGI3Zi05MmFjLWM2YWRmOTY2MjlkNy5wbmciLCJ3aWR0aCI6Ijw9MzkzIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.6TZj-HaOuyIeii-2ZN8Pc6noTivZVeUYJ2MkQpN1YGE",
  },
  {
    id: "img1",
    url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/44d9129b-33c6-421b-ac9a-3dd0c186306f/djfjm36-168f9990-98a2-4476-9c86-c775fd53faad.png/v1/fill/w_372,h_575,q_80,strp/book_cover_art_by_lucentmoth92_djfjm36-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc1IiwicGF0aCI6IlwvZlwvNDRkOTEyOWItMzNjNi00MjFiLWFjOWEtM2RkMGMxODYzMDZmXC9kamZqbTM2LTE2OGY5OTkwLTk4YTItNDQ3Ni05Yzg2LWM3NzVmZDUzZmFhZC5wbmciLCJ3aWR0aCI6Ijw9MzcyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.nE-iLRaDlT_Yx4WsvfU3SOAAw4cCl3chqfLXl8irOAo",
  },
  {
    id: "img2",
    url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6dd6a901-08aa-4f66-863a-8e67de5f3f2a/djqhgwm-90f8dcb1-c886-4e2b-b0a4-b37da58ff52b.jpg/v1/fit/w_828,h_1104,q_70,strp/book_cover_026___burning_maze___andrew_martin_by_stevencasteel_djqhgwm-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzAwMCIsInBhdGgiOiJcL2ZcLzZkZDZhOTAxLTA4YWEtNGY2Ni04NjNhLThlNjdkZTVmM2YyYVwvZGpxaGd3bS05MGY4ZGNiMS1jODg2LTRlMmItYjBhNC1iMzdkYTU4ZmY1MmIuanBnIiwid2lkdGgiOiI8PTIyNTAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.khD3xrtIS0LkWa5Zcs09Y5eMjWYxysazOadgM0UQzaE",
  },
  {
    id: "img3",
    url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a179d6ef-1b19-4ca3-a934-29436412c76c/djgrcof-f2d78979-34a8-43c9-b355-d5a108d5211a.png/v1/fit/w_828,h_1064,q_70,strp/1984_by_george_orwell__1__by_zenart07_djgrcof-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE1MiIsInBhdGgiOiJcL2ZcL2ExNzlkNmVmLTFiMTktNGNhMy1hOTM0LTI5NDM2NDEyYzc2Y1wvZGpncmNvZi1mMmQ3ODk3OS0zNGE4LTQzYzktYjM1NS1kNWExMDhkNTIxMWEucG5nIiwid2lkdGgiOiI8PTg5NiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.uWil55BozIJfFZEWGEhcavaW3FFmuhVli7QOuLHz_6A",
  },
  {
    id: "img4",
    url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a179d6ef-1b19-4ca3-a934-29436412c76c/djgrcnc-5f92b262-64bf-4f9c-9384-5987a798b4d8.png/v1/fit/w_560,h_720,q_70,strp/lolita__1__by_zenart07_djgrcnc-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYTE3OWQ2ZWYtMWIxOS00Y2EzLWE5MzQtMjk0MzY0MTJjNzZjXC9kamdyY25jLTVmOTJiMjYyLTY0YmYtNGY5Yy05Mzg0LTU5ODdhNzk4YjRkOC5wbmciLCJ3aWR0aCI6Ijw9NTYwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.cZK_g58AKzqKWmEdzIot_PXVQQNKpPiu3e6yD34-zP4",
  },
];

export { books, landingCover };
