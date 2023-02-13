export const customOverlayProperties = {
  borderRadiusCard: '8px',
  paddingCard: '10px',
  aspectRatioCard: '1/1',
  overlayDirection: '0deg',
  overlayColor: 'rgba(0, 0, 0, 0)',
  cardTextShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)',
  gapCard: '8px',
  radiusButton: '10px',
  colorButton: '#6d7bf8',
  aspectRatioImage: '1/1',
  justifyContentValue: 'flex-end',
  alignItemsValue: 'flex-start',
  textAlignValue: 'start',
  marginTopSubtitle: '0',
  marginInlineValue: '0 auto',
  cardSideMargin: '',
  cardImagePosition: 'absolute',
  cardImageObjectFit: 'cover',
  cardTitleColor: '#fff',
  cardSubtitleColor: '#fff',
  imageWrapPosition: 'absolute',
};

export function getCardRootOverlayStyles(): string {
  const rootProperties = `
  --border-radius-card: ${customOverlayProperties.borderRadiusCard};
  --padding-card: ${customOverlayProperties.paddingCard};
  --aspect-ratio-card: ${customOverlayProperties.aspectRatioCard};
  --overlay-direction: ${customOverlayProperties.overlayDirection};
  --overlay-color: ${customOverlayProperties.overlayColor};
  --card-text-shadow: ${customOverlayProperties.cardTextShadow};
  --gap-card: ${customOverlayProperties.gapCard};
  --radius-button: ${customOverlayProperties.radiusButton};
  --color-button: ${customOverlayProperties.colorButton};
  --aspect-ratio-image: ${customOverlayProperties.aspectRatioImage};
  --justify-content-value: ${customOverlayProperties.justifyContentValue};
  --align-items-value: ${customOverlayProperties.alignItemsValue};
  --text-align-value: ${customOverlayProperties.textAlignValue};
  --margin-top-subtitle: ${customOverlayProperties.marginTopSubtitle};
  --margin-inline-value: ${customOverlayProperties.marginInlineValue};
  --card-side-margin: ${customOverlayProperties.cardSideMargin};
  --card-image-position:  ${customOverlayProperties.cardImagePosition};
  --card-image-object-fit: ${customOverlayProperties.cardImageObjectFit};
  --card-title-color: ${customOverlayProperties.cardTitleColor};
  --card-subtitle-color: ${customOverlayProperties.cardSubtitleColor};
  --image-wrap-position: ${customOverlayProperties.imageWrapPosition};
  `;
  
  return rootProperties;
}



export const customStackedProperties = {
  borderRadiusCard: '8px',
  paddingCard: '10px',
  aspectRatioCard: '1/1',
  overlayDirection: '0deg',
  overlayColor: 'rgba(0, 0, 0, 0)',
  cardTextShadow: 'none',
  gapCard: '16px',
  radiusButton: '10px',
  colorButton: '#6d7bf8',
  aspectRatioImage: '1/1',
  justifyContentValue: 'flex-end',
  alignItemsValue: 'stretch',
  textAlignValue: 'start',
  marginTopSubtitle: '0',
  marginInlineValue: '',
  cardSideMargin: '16px',
  cardImagePosition: '',
  cardImageObjectFit: 'cover',
  cardTitleColor: '#111',
  cardSubtitleColor: '#333',
  imageWrapPosition: 'revert',
};


export function getCardRootStackedStyles(): string {
  const rootProperties = `
  --border-radius-card: ${customStackedProperties.borderRadiusCard};
  --padding-card: ${customStackedProperties.paddingCard};
  --aspect-ratio-card: ${customStackedProperties.aspectRatioCard};
  --overlay-direction: ${customStackedProperties.overlayDirection};
  --overlay-color: ${customStackedProperties.overlayColor};
  --card-text-shadow: ${customStackedProperties.cardTextShadow};
  --gap-card: ${customStackedProperties.gapCard};
  --radius-button: ${customStackedProperties.radiusButton};
  --color-button: ${customStackedProperties.colorButton};
  --aspect-ratio-image: ${customStackedProperties.aspectRatioImage};
  --justify-content-value: ${customStackedProperties.justifyContentValue};
  --align-items-value: ${customStackedProperties.alignItemsValue};
  --text-align-value: ${customStackedProperties.textAlignValue};
  --margin-top-subtitle: ${customStackedProperties.marginTopSubtitle};
  --margin-inline-value: ${customStackedProperties.marginInlineValue};
  --card-side-margin: ${customStackedProperties.cardSideMargin};
  --card-image-position:  ${customStackedProperties.cardImagePosition};
  --card-image-object-fit: ${customStackedProperties.cardImageObjectFit};
  --card-title-color: ${customStackedProperties.cardTitleColor};
  --card-subtitle-color: ${customStackedProperties.cardSubtitleColor};
  --image-wrap-position: ${customStackedProperties.imageWrapPosition};
  `;
  
  return rootProperties;
}