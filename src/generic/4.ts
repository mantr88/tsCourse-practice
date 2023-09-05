/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface props {
  title: string;
}

class Component<props> {
  constructor(public props: props) {}
}

class Page extends Component<props> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
