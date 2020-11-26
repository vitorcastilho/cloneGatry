import React from 'react'
import './List.css'

// Components
import PromotionCard from 'components/Promotion/Card/Card'

const PromotionList = ({ loading, promotions, error }) => {
    if (error) {
        return <div>Ocorreu algo de errado!</div>
    }
    if (loading || promotions === null) {
        return <div>Carregando...</div>
    }

    if (promotions.length === 0) {
        return <div>Nenhum resultado encontrado!</div>
    }
    return (
        <div className="promotion-list">
            { promotions.map((promotion) => (
                <PromotionCard promotion={promotion} />
            ))}
        </div>
    )
}

export default PromotionList;