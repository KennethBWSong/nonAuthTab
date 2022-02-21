export function EnableAuth(props: {environment?: string}) {
  const {
    environment
  } = {
    environment: "local",
    ...props,
  };

  const command = environment === "local" ? "local debug" : "provision and deploy";

  return (
    <div>
      <h2>Add Single Sign On feature to retrieve user profile</h2>
      <p>
        One of the advantages of building tab application in Teams is to leverage the user's identity 
        provided through Microsoft Teams (Known as {" "}
          <a href={"https://docs.microsoft.com/en-us/microsoftteams/platform/tabs/how-to/authentication/auth-aad-sso?tabs=dotnet"} target="_blank" rel="noreferrer">
            SSO support
          </a>
        ) and interact with Microsoft Graph for 
        building rich and seamless user experience. With Teams Toolkit, authentication is further 
        simplified by automatic AAD app registration and configuration.
      </p>
      <p>
        Starting with this simple static tab app, you can follow few steps to add SSO logics to authenticate 
        users, retrieve user's profile photo, and build UI layers with {" "}
          <a href={"https://developer.microsoft.com/en-us/fluentui#/get-started/web"}  target="_blank" rel="noreferrer">
            Fluent
          </a>
        .
      </p>
      <p>
        See instructions ({" "}
          <a href="https://github.com/KennethBWSong/nonAuthTab/blob/removeAuth/README.md" target="_blank" rel="noreferrer">
            here
          </a>
        )to learn how to enable Authentication component with Teams Toolkit 
        and code snippets.
      </p>
    </div>
  )
}