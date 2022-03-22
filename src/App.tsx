import {
  IonAccordion,
  IonAccordionGroup,
  IonApp,
  IonButton,
  IonContent,
  IonDatetime,
  IonHeader,
  IonItem,
  IonLabel,
  IonModal,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar
} from "@ionic/react";

export function App(): JSX.Element {
  return (
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonButton expand="block" id="editor-button">
            Open modal editor
          </IonButton>
          <IonModal trigger="editor-button">
            <IonHeader>
              <IonToolbar>
                <IonTitle>Modal editor</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonItem>
                <IonLabel>Above</IonLabel>
                <IonText>Item above</IonText>
              </IonItem>
              <IonAccordionGroup>
                <IonAccordion value="date">
                  <IonItem slot="header" lines="inset">
                    <IonLabel>Date</IonLabel>
                    <IonText>Jan 1, 1900</IonText>
                  </IonItem>
                  <IonDatetime slot="content" presentation="date" />
                </IonAccordion>
              </IonAccordionGroup>
              <IonItem>
                <IonLabel>Below</IonLabel>
                <IonText>Item below</IonText>
              </IonItem>
            </IonContent>
          </IonModal>
        </IonContent>
      </IonPage>
    </IonApp>
  );
}
