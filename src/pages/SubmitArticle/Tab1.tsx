import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonButton,
  IonLabel,
  IonText,
  IonItem,
  IonContent,
  IonInput,
  IonTextarea
} from '@ionic/react';
import React, { FormEvent, useState } from 'react';
import { article, articles }  from "../../resources/article"

const Tab1: React.FC = () => {
  var beginArticle: article = {
    date: "01/01/1970",
    author: "Test Author",
    body: "Test Body",
    title: "Test Title",
    picture: "https://miro.medium.com/max/2400/1*y6C4nSvy2Woe0m7bWEn4BA.png",
    id: articles.length,
  };

  const [author, setAuthor] = useState(beginArticle.author);
  const [date, setDate] = useState(beginArticle.date);
  const [body, setBody] = useState(beginArticle.body);
  const [title, setTitle] = useState(beginArticle.title);
  const [picture, setPicture] = useState(beginArticle.picture);



  const addToArticles = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    beginArticle.author = author;
    beginArticle.body = body;
    beginArticle.date = date;
    beginArticle.picture = picture;
    beginArticle.title = title;
    articles.push(beginArticle);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Submit Your  Article</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <form onSubmit={e => addToArticles(e)}>
      <IonList >
        <IonItem>
        <IonLabel position="stacked">Author <IonText color="danger">*</IonText></IonLabel>
        <IonInput value={author} name="author" onIonChange={event => setAuthor((event.target as HTMLInputElement).value)}></IonInput>
        </IonItem>
        <IonItem>
        <IonLabel position="stacked">Date <IonText color="danger">*</IonText></IonLabel>
        <IonInput value={date} name="author" onIonChange={event => setDate((event.target as HTMLInputElement).value)}></IonInput>
        </IonItem>
        <IonItem>
        <IonLabel position="stacked">Body <IonText color="danger">*</IonText></IonLabel>
        <IonTextarea value={body} name="author" onIonChange={event => setBody((event.target as HTMLInputElement).value)}></IonTextarea>
        </IonItem>
        <IonItem>
        <IonLabel position="stacked">Title <IonText color="danger">*</IonText></IonLabel>
        <IonInput value={title} name="author" onIonChange={event => setTitle((event.target as HTMLInputElement).value)}></IonInput>
        </IonItem>
        <IonItem>
        <IonLabel position="stacked">Picture <IonText color="danger">*</IonText></IonLabel>
        <IonInput value={picture} name="author" onChange={event => setPicture((event.target as HTMLInputElement).value)}></IonInput>
        </IonItem>
        <IonButton expand="block" type="submit" class="ion-no-margin">Create Article</IonButton>
      </IonList>
      </form>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
