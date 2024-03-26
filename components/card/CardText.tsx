import Colors from '@/constants/Colors'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, View } from 'react-native'
interface CardTextProps {
	text: string
	levelColor: string
	additionalText?: string
}

const CardText: React.FC<CardTextProps> = ({
	text,
	levelColor,
	additionalText
}) => {
	const { t } = useTranslation()

	const isFirstCardInDeck = (text: string) => text === 'firstCard'

	const styles = StyleSheet.create({
		cardText: {
			fontSize: isFirstCardInDeck(text) ? 32 : 20,
			fontWeight: 'bold',
			color: levelColor,
			textAlign: 'center'
		},
		additionalText: {
			fontSize: 16,
			textAlign: 'center',
			color: Colors.grey1
		}
	})

	return (
		<View style={{ alignItems: 'center', flexDirection: 'column', gap: 22 }}>
			{additionalText && (
				<Text style={styles.additionalText}>{t(additionalText)}</Text>
			)}
			<Text style={styles.cardText}>{t(text)}</Text>
		</View>
	)
}

export default CardText
