


export const TotalCompra = (inteiras, meias, diaSemana, nacional) => {
	if (typeof inteiras !== 'number' || typeof meias !== 'number' || typeof diaSemana !== 'string' || typeof nacional !== 'boolean' || inteiras < 0 || meias < 0)
		throw new Error('credênciais inválidas');
    diaSemana = diaSemana.toLowerCase();
	if (nacional)
		return inteiras * 5.0 + meias * 5.0;
	else if (diaSemana === 'quarta-feira')
		return inteiras * 14.25 + meias * 14.25;
	else
		return inteiras * 28.50 + meias * 14.25;
};

export const GanhosGastos = (ganhos, gastos) =>{
    let msg = '';
    let calculo = ((gastos/ganhos) * 100 )
	if(gastos > ganhos)
		msg = 'Orçamento comprometido! Hora de rever seus gastos';
	else if ( calculo >= 81 && calculo  <= 100)
		msg = 'Cuidado seu orçamento pode ficar comprometido';
	else if ( calculo >= 51 && calculo <= 80)
		msg = 'Atenção! Melhor conter seus gastos';
	else if (calculo >= 21 && calculo <= 50)
		msg = 'Muito bem, seus gastos não ultrapassam metade dos ganhos!';
	else if ( calculo >= 0 && calculo <= 20)
		msg = 'Parabéns, está gerenciando bem seu orçamentos';

    return msg;
}