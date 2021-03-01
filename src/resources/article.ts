export interface article {
    date: string,
    author: string,
    body: string,
    title: string,
    picture: string,
    id: number,
  }
  
  export var articles: article[] = [
    {
      date: "01/01/2020",
      author: "Bob",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
      deserunt mollit anim id est laborum.`,
      title: "Latin Phrase",
      picture: "https://cdn.auth0.com/blog/get-started-ionic/logo.png",
      id: 0, 
    }
  ]
  