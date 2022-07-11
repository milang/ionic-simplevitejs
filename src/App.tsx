import {
  IonApp,
  IonContent,
  IonHeader,
  IonNav,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { useCallback } from "react";

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
  const helloWorld1 = useCallback(() => <HelloWorld one={1} />, []);

  return (
    <IonApp>
      <IonPage>
        <IonNav root={helloWorld1} />
        {/* <IonNav root={HelloWorld} rootParams={{ one: 1 }} /> */}
        {/* <HelloWorld one={-1} /> */}
      </IonPage>
    </IonApp>
  );
}
