import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg } from '@ionic/react';
import { articles } from "../../resources/article"
import { RouteComponentProps } from 'react-router';

type ArticleID = RouteComponentProps<{
  id: string;
}>;

const Details: React.FC<ArticleID> = ({
  match: {
    params: { id },
  },
}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab2" />
          </IonButtons>
            <IonTitle>What's News</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCardTitle>{articles[+id].title}</IonCardTitle>
        <IonCardSubtitle>{articles[+id].author}{' | '}{articles[+id].date}</IonCardSubtitle>
        <IonImg src={articles[+id].picture}></IonImg>
        <IonCardContent>{articles[+id].body}</IonCardContent>
      </IonContent>
    </IonPage>
  );
};

export default Details;
