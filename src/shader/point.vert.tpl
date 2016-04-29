attribute vec4 a_Position;
attribute vec4 a_Color;
attribute float a_PointSize;
varying vec4 v_Color;
uniform mat4 u_ViewModelMatrix;

void main() {
    gl_Position = u_ViewModelMatrix * a_Position;
    gl_PointSize = a_PointSize;
    v_Color = a_Color;
}
