#!/usr/bin/env node

import game from '../src/index.js'
import { GAME_QUESTION, gameStep } from '../src/games/brain-progression.js'

game(GAME_QUESTION, gameStep)
