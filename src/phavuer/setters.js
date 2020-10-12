export default {
  visible: object => v => object.setVisible(v),
  x: object => v => object.x = v,
  y: object => v => object.y = v,
  origin: object => v => object.setOrigin(v, v),
  originX: object => v => object.setOrigin(v, object.originY),
  originY: object => v => object.setOrigin(object.originX, v),
  scale: object => v => object.setScale(v, v),
  scaleX: object => v => object.setScale(v, object.scaleY),
  scaleY: object => v => object.setScale(object.scaleX, v),
  width: object => v => object.setSize(v, object.height),
  height: object => v => object.setSize(object.width, v),
  displayWidth: object => v => object.setDisplaySize(v, object.displayHeight),
  displayHeight: object => v => object.setDisplaySize(object.displayWidth, v),
  displayOriginX: object => v => object.setDisplayOrigin(v, object.displayOriginY),
  displayOriginY: object => v => object.setDisplayOrigin(object.displayOriginX, v),
  depth: object => v => object.setDepth(v),
  alpha: object => v => object.setAlpha(v),
  texture: object => v => object.setTexture(v),
  fillColor: object => v => object.setFillStyle(v, object.fillAlpha),
  fillAlpha: object => v => object.setFillStyle(object.fillColor, v),
  lineWidth: object => v => object.setStrokeStyle(...(!v ? [] : [v, object.strokeColor, object.strokeAlpha])),
  strokeColor: object => v => object.setStrokeStyle(object.lineWidth, v, object.strokeAlpha),
  strokeAlpha: object => v => object.setStrokeStyle(object.lineWidth, object.strokeColor, v),
  style: object => v => object.setStyle(v)
}
