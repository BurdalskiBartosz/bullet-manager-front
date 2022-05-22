import { colors } from '../variables/colors';
import { shadows } from '../variables/shadows';
import { fonts } from '../variables/fonts';
import { sizes } from '../variables/sizes';
import { zindexes } from '../variables/zindexes';
import { media } from '../breakpoints';
import { animations } from '../mixins/animations';

const variables = {
	colors,
	shadows,
	fonts,
	sizes,
	zindexes,
	media
};
const mixins = {
	animations
};

export const theme = {
	...variables,
	...mixins
};
