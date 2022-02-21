## Steps to enable SSO

1. Add `fx-resource-aad-app-for-teams` into `activeResourcePlugins` under `.fx/configs/projectSettings.json`

1. Copy `auth-start.html` from [here](https://github.com/OfficeDev/TeamsFx/blob/main/templates/tab/ts/default/public/auth-start.html) to `tabs/public`

1. Copy `auth-end.html` from [here](https://github.com/OfficeDev/TeamsFx/blob/main/templates/tab/ts/default/public/auth-end.html) to `tabs/public`

1. Copy `useTeamsFx.ts` from [here](https://github.com/OfficeDev/TeamsFx/blob/main/templates/tab/ts/default/src/components/sample/lib/useTeamsFx.ts) to `tabs/components/sample/lib`

1. Copy `App.tsx` from [here](https://github.com/OfficeDev/TeamsFx/blob/main/templates/tab/ts/default/src/components/App.tsx) to `tabs/components/src/App.tsx`

1. Run `local-debug` or `provision` and `deploy` again 