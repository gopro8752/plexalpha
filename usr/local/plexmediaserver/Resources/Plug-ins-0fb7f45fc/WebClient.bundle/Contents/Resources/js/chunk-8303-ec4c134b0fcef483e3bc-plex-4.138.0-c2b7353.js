"use strict";(self.webpackChunkplex_web_client=self.webpackChunkplex_web_client||[]).push([[8303],{50684:(e,n,r)=>{r.r(n),r.d(n,{default:()=>_});var t=r(96540),a=r(106),l=r(89342),o=r(4627),s=r(21141),i=r(71468),d=r(1081),c=r(95449),m=r(36836),v=r(10500),u=r(61016),p=r(11673),A=r(20140),E=r(4408),N=r(81296),D=r(46772),g=r(44018),f=r(73466),w=r(37423),I=r(4590),y=r(86213),S=r(94507),O=r(89302),k=r(63500),L=r(75732),b=r(77078),U=r(73486),P=r(84593),h=r(48511),R=r(22935),x=r(49809),C=r(88896);const V="ReleaseNotesModal-version-OtNvrC",T="ReleaseNotesModal-listTitle-SQlt8b";function M(e,n){const r=n?n.split("\n"):[];return r.length>0?t.createElement(t.Fragment,null,t.createElement("div",{className:T},e),t.createElement("ul",null,r.map(((e,n)=>t.createElement("li",{key:n},e))))):null}const F=function(e){const{version:n,added:r,fixed:a,isOpen:l,onClose:o}=e;return t.createElement(x.A,{isOpen:l,metricsPage:P.Co,onModalClose:o},t.createElement(C.A,{onModalClose:o},t.createElement(R.A,null,(0,D.A)("{product} Release Notes",{product:"Plex Media Server"})),t.createElement(h.A,null,t.createElement("div",{className:V},(0,D.A)("Version {version}",{version:n})),M((0,D.A)("New"),r),M((0,D.A)("Fixes"),a))))},z=function({progress:e}){return t.createElement("div",{className:"ServerDownloadProgressBar-progress-eaqGoq"},t.createElement("div",{className:"ServerDownloadProgressBar-emptyBar-tqRFTg"}),t.createElement("div",{className:"ServerDownloadProgressBar-bar-LSLH7G",style:{transform:`translate3d(-${100-e}%, 0, 0)`}}))};var B=r(44454);const j="ServerUpdatePage-actionContainer-d6gTRB EmptyPageDescription-description-X4KZlh",G=(0,i.Ng)((function(){return(0,d.Mz)(m.A,(0,c.A)(),((e,n)=>{const r=n.update;return{serverEntityID:e.entityID,friendlyName:e.friendlyName,state:r.state,error:r.error,progress:r.progress,availableVersion:(0,v.A)(r.version),currentVersion:(0,v.A)(e.version),downloadURL:r.downloadURL,added:r.added,fixed:r.fixed}}))}),(function(e,n){const{serverEntityID:r}=n;return{onDismissServerUpdate(n){e((0,p.L1)({serverEntityID:r,version:n}))},onInstallServerUpdate(){e((0,p.Q2)({serverEntityID:r}))},onDownloadServerUpdate(){e((0,p.FX)({serverEntityID:r}))},onRedirectToHome(){e((0,u.Tp)({route:"home"}))}}}))((function(e){const{serverEntityID:n,friendlyName:r,state:a,error:l,progress:o,availableVersion:s,currentVersion:i,downloadURL:d,added:c,fixed:m,onDismissServerUpdate:v,onInstallServerUpdate:u,onDownloadServerUpdate:p,onRedirectToHome:P}=e,h=a===N.NONE||a===N.DONE,R=(0,B.A)(),x=(0,t.useCallback)((()=>{v(s)}),[s,v]);if((0,y.A)((()=>{P()}),h),h)return null;if(a===N.INSTALLING)return t.createElement(U.A,{serverEntityID:n});const C=(0,D.A)("Update available for {product}",{product:"Plex Media Server"});let V=(0,D.A)('You are currently running version {currentVersion} on the server "{friendlyName}". Version {availableVersion} is now available.',{availableVersion:s,currentVersion:i,friendlyName:r});const T="number"==typeof o&&o>=0&&o<=100;return a===N.NOTIFY&&(V=V+" "+(0,D.A)("This update will need to be installed manually after download.")),a===N.ERROR?t.createElement(L.A,{description:l||(0,D.A)("Something went wrong, please try again later."),iconSrc:E,title:C}):t.createElement(L.A,{description:c||m?t.createElement(g.A,{message:V+" "+(0,D.A)("{openLink}Show release notes{closeLink}."),tags:[{open:"openLink",close:"closeLink",component:I.A,onPress:R.onOpen,kind:S.jd}]}):V,iconSrc:E,title:(0,D.A)("Update available for {product}",{product:"Plex Media Server"})},a===N.AVAILABLE?t.createElement("div",{className:j},t.createElement(w.A,{kind:S.jd,size:O.I$,onPress:p},(0,D.A)("Download now"))):null,a===N.DOWNLOADING?t.createElement("div",{className:j},t.createElement("div",null,T?(0,D.A)("Downloading Update ({progress}%)",{progress:o}):(0,D.A)("Downloading Update")),t.createElement(A.I1,{align:"center",verticalAlign:"center",width:"100%"},T?t.createElement(z,{progress:o}):t.createElement(f.A,{size:"small"}))):null,a===N.DOWNLOADED?t.createElement("div",{className:j},t.createElement(w.A,{kind:S.jd,size:O.I$,onPress:u},(0,D.A)("Install now"))):null,a===N.NOTIFY?t.createElement("div",{className:j},t.createElement(w.A,{kind:S.jd,size:O.I$,target:"_blank",to:d||(0,k.A)(),onPress:x},(0,D.A)("Download now"))):null,a!==N.DOWNLOADING&&a!==N.DOWNLOADED?t.createElement(b.A,null,t.createElement(I.A,{className:"ServerUpdatePage-link-OvaQUF",kind:S.jd,size:O.o5,to:"#",onPress:x},(0,D.A)("Skip this version"))):null,t.createElement(F,{added:c,fixed:m,isOpen:R.isOpen,version:s,onClose:R.onClose}))}));function _(){const{machineIdentifier:e}=(0,o.A)(),n=(0,a.A)(l.yv,e);return t.createElement(s.A,{serverEntityID:n},t.createElement(G,{serverEntityID:n}))}}}]);