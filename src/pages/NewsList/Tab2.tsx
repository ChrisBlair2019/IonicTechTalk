import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg } from '@ionic/react';
import "./card.css";
import { articles } from  "../../resources/article"

//Replace with Backend

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>What's News</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {articles.map((article) => (
          <IonCard key={article.id} routerLink={`/articles/${article.id}`}>
              <IonImg src={article.picture}></IonImg>
              <IonCardTitle>{article.title}</IonCardTitle>
              <IonCardSubtitle>{article.author} {' | '} {article.date}</IonCardSubtitle>
              <IonCardContent className="card">{article.body}</IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;