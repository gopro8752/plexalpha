"use strict";(self.webpackChunkplex_web_client=self.webpackChunkplex_web_client||[]).push([[261],{30261:(e,t,r)=>{r.r(t),r.d(t,{default:()=>F});var n=r(96540),i=r(63159),o=r(52520),s=r(18912),a=r(88593),l=r(6055);const c=function(e){let t=!1;return function(...e){if(!t)return t=!0,(e=>{e.polyfill.installAll()})(...e)}}();var u=r(46772),d=Object.defineProperty,h=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,E=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t,r)=>(E(e,"symbol"!=typeof t?t+"":t,r),r);class g extends n.Component{constructor(){super(...arguments),f(this,"_timeoutID"),f(this,"onTimeout",(()=>{const{positionSeconds:e,durationSeconds:t,onEnd:r}=this.props,n=t-e;l.A.warn("[Player] Manually ending while stalled within the last %ss.",n),this.props.onBufferingChange&&this.props.onBufferingChange(!1),r()}))}componentDidUpdate(e){const{healthCheckSecondsFromEnd:t,positionSeconds:r,durationSeconds:n,paused:i,onEnd:o}=this.props;let s=!1;o&&n>0&&r>=n&&(l.A.warn("[Player] Manually ending because position %ss >= duration %ss",r,n),s=!0,o());const a=r!==e.positionSeconds,c=i&&i!==e.paused,u=s||a||c;this._timeoutID&&u&&window.clearTimeout(this._timeoutID);const d=n-r;if(n>0&&o&&!s&&!i&&d>=0&&d<t){const e=Math.round(1e3*d)+250;window.clearTimeout(this._timeoutID),this._timeoutID=window.setTimeout(this.onTimeout,e)}}componentWillUnmount(){this._timeoutID&&window.clearTimeout(this._timeoutID)}render(){const e=this.props,{mediaComponent:t}=e,r=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&h)for(var n of h(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r})(e,["mediaComponent"]);return n.createElement(t,((e,t)=>{for(var r in t||(t={}))p.call(t,r)&&E(e,r,t[r]);if(h)for(var r of h(t))m.call(t,r)&&E(e,r,t[r]);return e})({},r))}}const y=g;var A=r(73697),T=Object.defineProperty,R=Object.defineProperties,S=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,w=(e,t,r)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,O=(e,t)=>{for(var r in t||(t={}))_.call(t,r)&&w(e,r,t[r]);if(b)for(var r of b(t))C.call(t,r)&&w(e,r,t[r]);return e},P=(e,t)=>R(e,S(t)),M=(e,t,r)=>(w(e,"symbol"!=typeof t?t+"":t,r),r);const{Category:I,Code:D,Severity:k}=i.util.Error;let N;function v(e){switch(e){case I.NETWORK:return(0,u.A)("Network");case I.TEXT:return(0,u.A)("Text");case I.MEDIA:return(0,u.A)("Media");case I.MANIFEST:return(0,u.A)("Manifest");case I.STREAMING:return(0,u.A)("Streaming");case I.DRM:return(0,u.A)("DRM");case I.PLAYER:return(0,u.A)("Player");case I.CAST:return(0,u.A)("Cast");case I.STORAGE:return(0,u.A)("Storage");default:return(0,u.A)("Unknown")}}function L(e){const t={},r=o.A[e.drm];let n;return r===a.FAIRPLAY&&(t.advanced={[r]:{serverCertificateUri:e.certificate}}),r&&(n=O(P(O({},t),{servers:{[r]:e.license}}),r===a.FAIRPLAY&&{initDataTransform:(e,t)=>{const r=i.util.StringUtils.fromBytesAutoDetect(e).replace("skd://",""),n=N.drmInfo().serverCertificate;return i.util.FairPlayUtils.initDataTransform(e,r,n)}})),n}class $ extends n.Component{constructor(e,t){super(e,t),M(this,"_hasUnmounted"),M(this,"_mediaElement"),M(this,"onNetworkEngineRequest",((e,t)=>{e===i.net.NetworkingEngine.RequestType.LICENSE&&this.props.drm===s.PLAYREADY&&delete t.headers.SOAPAction})),M(this,"onElementChange",(e=>{this._mediaElement=e,this.tryLoadMedia()})),M(this,"onHTMLError",(()=>{})),M(this,"onBufferingChange",(({buffering:e})=>{})),M(this,"onDurationMillisecondsChange",(e=>{if(this.props.onDurationMillisecondsChange){const t=N.isLive()?0:e;this.props.onDurationMillisecondsChange(t)}})),M(this,"onSubtitlesChange",(()=>{if(N){const e=N.getTextTracks().find((e=>{var t;return e.language===(null==(t=this.props.subtitleStream)?void 0:t.id)}));e?(N.selectTextTrack(e),N.setTextTrackVisibility(!0)):N.setTextTrackVisibility(!1)}})),M(this,"onError",(({detail:e={}})=>{if(this._hasUnmounted)return;const{category:t,code:r,severity:n}=e,i=function(e){return[`s${e.code} (${v(e.category)})`].concat(function(e){const{code:t,data:r}=e;switch(t){case D.BAD_HTTP_STATUS:return[`URI: ${r[0]}`,r[1]?`Status code: ${r[1]}`:null,r[2]?`Response text: ${r[2]}`:null,r[3]?`Response headers: ${JSON.stringify(r[3],null,2)}`:null,r[4]?`NetworkingEngine.RequestType: ${r[4]}`:null];case D.MEDIA_SOURCE_OPERATION_FAILED:return[`MediaError code: ${r[0]}`];case D.MEDIA_SOURCE_OPERATION_THREW:return[`DOMException ${r[0].name}: ${r[0].message}`];case D.VIDEO_ERROR:return[`MediaError code: ${r[0]}`,r[1]?`Edge/IE Error code: ${r[1]}`:null,r[2]?`Chrome error details: ${r[2]}`:null];case D.INIT_DATA_TRANSFORM_ERROR:return[`Exception ${r[0].name}: ${r[0].message}`];case D.DASH_NO_SEGMENT_INFO:return["DASH Manifest error: empty segments or insufficient segment information"]}}(e)).filter((e=>e)).join(" – ")}(e);let o=n;t===I.DRM&&r===D.INIT_DATA_TRANSFORM_ERROR&&n===k.CRITICAL&&(o=k.RECOVERABLE),o===k.CRITICAL?(l.A.warn(`[Player] A critical Shaka error occurred: ${i}; the player cannot recover`),this.props.onError&&this.props.onError({code:`s${r}`,category:v(t)})):o===k.RECOVERABLE?(l.A.warn(`[Player] A Shaka error occurred: ${i}; the player will attempt to recover`),t===I.MANIFEST&&r===D.DASH_NO_SEGMENT_INFO&&this.props.onTryToRecover({code:`s${r}`,category:v(t)})):l.A.warn(`[Player] A Shaka error occurred: ${i}; the severity is unknown`)})),M(this,"onManifestPreprocessing",(e=>{if(Array.from(e.getElementsByTagName("SegmentTimeline")).some((e=>!e.firstElementChild)))throw new i.util.Error(k.RECOVERABLE,I.MANIFEST,D.DASH_NO_SEGMENT_INFO)})),c(i),N||(N=new i.Player),this.state={isReadyToPlay:!1},this._mediaElement}componentWillUnmount(){this._hasUnmounted=!0,this._resetPrePlaybackFields(),N&&(N.getNetworkingEngine().unregisterRequestFilter(this.onNetworkEngineRequest),N.resetConfiguration(),N.removeEventListener("buffering",this.onBufferingChange),N.removeEventListener("error",this.onError),N.detach(),N.unload())}_resetPrePlaybackFields(){delete this._mediaElement}tryLoadMedia(){const{_mediaElement:e}=this;e&&(this._resetPrePlaybackFields(),this.loadMedia({mediaElement:e}))}loadMedia({mediaElement:e}){const t={streaming:{bufferingGoal:this.props.bufferingGoal,jumpLargeGaps:!0,retryParameters:{maxAttempts:1/0,timeout:1e4},stallSkip:.1},abr:{defaultBandwidthEstimate:this.props.defaultBandwidthEstimate},drm:L(this.props),manifest:{dash:{manifestPreprocessor:this.onManifestPreprocessing}}};N.configure(t),N.attach(e),N.addEventListener("buffering",this.onBufferingChange),N.addEventListener("error",this.onError),N.getNetworkingEngine().registerRequestFilter(this.onNetworkEngineRequest),N.load(this.props.src,this.props.positionSeconds).then((()=>{N&&(this.setState({isReadyToPlay:!0}),this.props.paused||1===this.props.playbackSpeed||N.trickPlay(this.props.playbackSpeed))}),(e=>{N&&this.onError({detail:e})}))}render(){const e=P(O({},this.props),{isReadyToPlay:this.state.isReadyToPlay,onDurationMillisecondsChange:this.onDurationMillisecondsChange,onElementChange:this.onElementChange,onError:this.onHTMLError,onSubtitlesChange:this.onSubtitlesChange});return this.props.isCloud?n.createElement(A.A,O({},e)):n.createElement(y,P(O({},e),{healthCheckSecondsFromEnd:this.props.bufferingGoal,mediaComponent:A.A}))}}M($,"displayName","ShakaMedia"),M($,"defaultProps",P(O({},A.A.defaultProps),{bufferingGoal:70}));const F=$}}]);