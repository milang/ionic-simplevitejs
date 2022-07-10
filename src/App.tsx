import {
  IonApp,
  IonContent,
  IonHeader,
  IonNav,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";

function HelloWorld(props: { one: number }): JSX.Element {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hello</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>World</h1>
        <p>
          Props: {props === undefined ? "<undefined>" : JSON.stringify(props)}
        </p>
      </IonContent>
    </>
  );
}

export function App(): JSX.Element {
  return (
    <IonApp>
      <IonPage>
        <IonNav root={HelloWorld} rootParams={{ one: 1 }} />
        {/* <HelloWorld one={-1} /> */}
      </IonPage>
    </IonApp>
  );
}
