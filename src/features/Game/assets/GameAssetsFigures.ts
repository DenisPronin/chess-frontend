import { GameColor, GameFigureTypes } from '../Game.types'
import bb from './figures/bb.png'
import bk from './figures/bk.png'
import bn from './figures/bn.png'
import bp from './figures/bp.png'
import bq from './figures/bq.png'
import br from './figures/br.png'
import wb from './figures/wb.png'
import wk from './figures/wk.png'
import wn from './figures/wn.png'
import wp from './figures/wp.png'
import wq from './figures/wq.png'
import wr from './figures/wr.png'

export const gameAssetsFigures = {
  [GameFigureTypes.Pawn]: {
    [GameColor.WHITE]: wp,
    [GameColor.BLACK]: bp,
  },
  [GameFigureTypes.Rook]: {
    [GameColor.WHITE]: wr,
    [GameColor.BLACK]: br,
  },
  [GameFigureTypes.Knight]: {
    [GameColor.WHITE]: wn,
    [GameColor.BLACK]: bn,
  },
  [GameFigureTypes.Bishop]: {
    [GameColor.WHITE]: wb,
    [GameColor.BLACK]: bb,
  },
  [GameFigureTypes.Queen]: {
    [GameColor.WHITE]: wq,
    [GameColor.BLACK]: bq,
  },
  [GameFigureTypes.King]: {
    [GameColor.WHITE]: wk,
    [GameColor.BLACK]: bk,
  },
}
