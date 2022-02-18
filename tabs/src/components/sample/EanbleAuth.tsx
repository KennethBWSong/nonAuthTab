export function EnableAuth(props: {environment?: string}) {
  const {
    environment,
    authStartUrl,
    authEndUrl,
    authPath,
    authStartPage,
    authEndPage,
    aadPlugin,
    projectSettingsPath,
    activeResourcePlugins,
    useTeamsFx,
    useTeamsFxUrl,
    useTeamsFxPath,
    app,
    appUrl,
    appPath
  } = {
    environment: "local",
    authStartUrl: "https://github.com/OfficeDev/TeamsFx/blob/main/templates/tab/ts/default/public/auth-start.html",
    authEndUrl: "https://github.com/OfficeDev/TeamsFx/blob/main/templates/tab/ts/default/public/auth-end.html",
    authPath: "tabs/public",
    authStartPage: "auth-start.html",
    authEndPage: "auth-end.html",
    aadPlugin: "fx-resource-aad-app-for-teams",
    projectSettingsPath: ".fx/configs/projectSettings.json",
    activeResourcePlugins: "ActiveResourcePlugins",
    useTeamsFx: "useTeamsFx.ts",
    useTeamsFxPath: "tabs/components/sample/lib",
    useTeamsFxUrl: "https://github.com/OfficeDev/TeamsFx/blob/main/templates/tab/ts/default/src/components/sample/lib/useTeamsFx.ts",
    app: "App.tsx",
    appUrl: "https://github.com/OfficeDev/TeamsFx/blob/main/templates/tab/ts/default/src/components/App.tsx",
    appPath: "tabs/components/src/App.tsx",
    ...props,
  };

  const command = environment === "local" ? "local debug" : "provision and deploy";

  return (
    <div>
      <h2>Enable Auth</h2>
      <p>
        You can follow the following steps to enable Auth in this sample.
      </p>
      <p>
        1. Add {" "}<code>{aadPlugin}</code> into {" "}<code>{activeResourcePlugins}</code> under {" "}<code>{projectSettingsPath}</code>
      </p>
      <p>
        2. Copy {" "}<code>{authStartPage}</code>from {" "}<code>{authStartUrl}</code> and place it under {" "}<code>{authPath}</code>
      </p>
      <p>
        3. Copy {" "}<code>{authEndPage}</code> from {" "}<code>{authEndUrl}</code> and place it under {" "}<code>{authPath}</code>
      </p>
      <p>
        4. Copy {" "}<code>{useTeamsFx}</code> from {" "}<code>{useTeamsFxUrl}</code> and place it under {" "}<code>{useTeamsFxPath}</code>
      </p>
      <p>
        5. Copy {" "}<code>{app}</code> from {" "}<code>{appUrl}</code> and replace {" "}<code>{appPath}</code>
      </p>
      <p>
        6. Run {" "}<code>{command}</code> again
      </p>
      <p>
        For more information, see the{" "}
        <a href="https://aka.ms/teamsfx-docs" target="_blank" rel="noreferrer">
          docs
        </a>
        .
      </p>
    </div>
  )
}