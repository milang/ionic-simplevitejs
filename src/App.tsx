import {
  IonApp,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonModal,
  IonNav,
  IonNavLink,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { useCallback, useState } from "react";

type ActionFunc = () => void;

// recursive modal dialog
function Modal(props: { level: number; close: ActionFunc }): JSX.Element {
  const childModal = useCallback(
    () => <Modal level={props.level + 1} close={props.close} />,
    [props.level, props.close]
  );

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Modal, level {props.level}</IonTitle>
          <IonButtons slot="primary">
            <IonButton onClick={props.close}>Close</IonButton>
          </IonButtons>
          {props.level > 1 && (
            <IonButtons slot="secondary">
              <IonNavLink routerDirection="back">
                <IonButton>Pop</IonButton>
              </IonNavLink>
            </IonButtons>
          )}
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonNavLink routerDirection="forward" component={childModal}>
          <IonButton expand="block">Push</IonButton>
        </IonNavLink>
      </IonContent>
    </>
  );
}

// home page (shown via route)
function Home(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const close = useCallback(
    () => isOpen && setIsOpen(false),
    [isOpen, setIsOpen]
  );
  const modalRoot = useCallback(
    () => <Modal level={1} close={close} />,
    [close]
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="block" onClick={() => setIsOpen(true)}>
          Open modal
        </IonButton>
        <IonItem lines="none">Is open: {isOpen ? "true" : "false"}</IonItem>
        <IonModal isOpen={isOpen} onIonModalDidDismiss={close}>
          <IonNav root={modalRoot} />
        </IonModal>
      </IonContent>
    </IonPage>
  );
}

// main app
export function App(): JSX.Element {
  return (
    <IonApp>
      <Home />
    </IonApp>
  );
}
