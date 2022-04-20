import {
  IonApp,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonNav,
  IonPage,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  useIonModal
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { useRef } from "react";
import { Redirect, Route } from "react-router";

// recursive modal dialog
function Modal(props: {
  level: number;
  close: () => void;
  nav: React.RefObject<HTMLIonNavElement>;
}): JSX.Element {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Modal, level {props.level}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={props.close}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton
          expand="block"
          onClick={() =>
            props.nav.current?.push(Modal, {
              level: props.level + 1,
              close: props.close,
              nav: props.nav
            })
          }
        >
          Push child
        </IonButton>
      </IonContent>
    </>
  );
}

// navigation root for modal dialog
function NavModal(props: { close: () => void }): JSX.Element {
  const nav = useRef<HTMLIonNavElement | null>(null);

  // return (
  //   <IonNav
  //     ref={nav}
  //     root={Modal}
  //     rootParams={{ level: 1, close: props.close, nav }}
  //   />
  // );
  return (
    <IonNav ref={nav}>
      <Modal level={1} close={props.close} nav={nav} />
    </IonNav>
  );
}

// home page (shown via route)
function Home(): JSX.Element {
  const close = () => dismiss();
  const [present, dismiss] = useIonModal(NavModal, { close });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="block" onClick={present as () => void}>
          Open modal
        </IonButton>
      </IonContent>
    </IonPage>
  );
}

// main application
export function App(): JSX.Element {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}
