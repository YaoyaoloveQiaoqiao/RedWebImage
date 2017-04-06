/**** 创建时间为:2017-04-06 09:10:55 ****/

/**** Vertex ****/
var vertex_double = "attribute vec2 pos;attribute vec2 texPos;varying vec2 varyTexPos;void main(){    gl_Position = vec4(pos.xy,0.0,1.0);    varyTexPos = texPos;}";
var vertex_mandelbrot = "";
var vertex_ripple = "attribute vec2 pos;attribute vec2 texPos;varying vec2 varyTexPos;void main(){    gl_Position = vec4(pos.xy,0.0,1.0);    varyTexPos = texPos;}";
var vertex_text2 = "attribute vec2 pos;void main(){    gl_Position = vec4(pos.xy * 0.3,0.0,1.0);}";
var vertex_wave = "attribute vec2 pos;void main(){    gl_Position = vec4(pos.xy * 0.8,0.0,1.0);}";
/**** Vertex ****/

/**** Fragment ****/
var fragment_double = "void main(){    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);}";
var fragment_mandelbrot = "";
var fragment_ripple = "void mainImage( out vec4 fragColor, in vec2 fragCoord ){	vec2 uv = fragCoord.xy / iResolution.xy;		float w = (0.5 - (uv.x)) * (iResolution.x / iResolution.y);    float h = 0.5 - uv.y;	float distanceFromCenter = sqrt(w * w + h * h);		float sinArg = distanceFromCenter * 10.0 - iGlobalTime * 10.0;	float slope = cos(sinArg) ;	vec4 color = texture(iChannel0, uv + normalize(vec2(w, h)) * slope * 0.05);		fragColor = color;}";
var fragment_text2 = "void main(){    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);}";
var fragment_wave = "void main(){    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);}";
/**** Fragment ****/
