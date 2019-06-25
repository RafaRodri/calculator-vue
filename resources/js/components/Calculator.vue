<template>
    <div>
        <div class="data">
            <h6>Previous: <span>{{previous}}</span></h6>
            <h6>Current: <span>{{current}}</span></h6>
            <h6>Operator: <span>{{operator}}</span></h6>
            <h6>Operator Clicked: <span>{{operatorClicked}}</span></h6>
        </div>

        <!-- Table #calc -->
        <table id="calc" class="calc">
            <!-- Display -->
            <tr>
                <td colspan="5" class="display">
                    <!--<input class="calc-area" type="text" v-bind:value="current || '0'">-->
                    <div class="display calc-area">{{current || 0}}</div>
                </td>
            </tr>
            <!-- Fim Display -->

            <!-- Teclado calculadora -->
            <tr>
                <!-- Botões da 1ª linha do teclado ('7', '8', '9', '/' e 'AC') -->
                <td class="num">
                    <button type="button" @click="append('7')">7</button>
                </td>
                <td class="num">
                    <button type="button" @click="append('8')">8</button>
                </td>
                <td class="num">
                    <button type="button" @click="append('9')">9</button>
                </td>
                <td class="op">
                    <button type="button" @click="divide"><i class="fas fa-divide"></i></button>
                </td>
                <td class="clear">
                    <button type="button" @click="clear">AC</button>
                </td>
                <!-- Fim Botões da linha 1 do teclado -->
            </tr>
            <tr>
                <!-- Botões da 2ª linha do teclado ('4', '5', '6', '*' e '<-') -->
                <td class="num">
                    <button type="button" @click="append('4')">4</button>
                </td>
                <td class="num">
                    <button type="button" @click="append('5')">5</button>
                </td>
                <td class="num">
                    <button type="button" @click="append('6')">6</button>
                </td>
                <td class="op">
                    <button type="button" @click="times"><i class="fas fa-times"></i></button>
                </td>
                <td class="backspace">
                    <button type="button" @click="backspace"><i class="fas fa-arrow-left"></i></button>
                </td>
                <!-- Fim Botões da linha 2 do teclado -->
            </tr>
            <tr>
                <!-- Botões da 3ª linha do teclado ('1', '2', '3', '-' e '=') -->
                <td class="num">
                    <button type="button" @click="append('1')">1</button>
                </td>
                <td class="num">
                    <button type="button" @click="append('2')">2</button>
                </td>
                <td class="num">
                    <button type="button" @click="append('3')">3</button>
                </td>
                <td class="op">
                    <button type="button" @click="minus"><i class="fas fa-minus"></i></button>
                </td>
                <td class="calculate" rowspan="2">
                    <button type="button" @click="equal"><i class="fas fa-equals"></i></button>
                </td>
                <!-- Fim Botões da linha 3 do teclado -->
            </tr>
            <tr>
                <!-- Botões da 4ª linha do teclado ('0', '.' e '+') -->
                <td class="num" colspan="2">
                    <button type="button" @click="append('0')">0</button>
                </td>
                <td class="decimal">
                    <button type="button" @click="dot">.</button>
                </td>
                <td class="op">
                    <button type="button" @click="add"><i class="fas fa-plus"></i></button>
                </td>
                <!-- Fim Botões da linha 4 do teclado -->
            </tr>
            <!-- Fim Teclado calculadora -->
        </table>
        <!-- Fim Table #calc -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                previous: null,
                current: '',
                operator: null,
                operatorClicked: false,
            }
        },
        methods: {
            /*Limpar display*/
            clear() {
                this.current = '';
            },
            /*Apagar último caractere*/
            backspace() {
                /*Caso exista apenas um caractere no display, exibir o valor zero(0)*/
                if (this.current.length > 1) {
                    this.current = this.current.slice(0, -1);
                } else {
                    this.current = '';
                }
            },
            /*Alterar sinal de positivo e negativo*/
            sign() {
                this.current = this.current.charAt(0) === '-' ?
                    this.current.slice(1) : `-${this.current}`;
            },
            /*Transformar em %*/
            percent() {
                this.current = `${parseFloat(this.current) / 100}`;
            },
            /*Acrescentar número*/
            append(number) {
                if (this.operatorClicked) {
                    this.current = '';
                    this.operatorClicked = false;
                }
                this.current = `${this.current}${number}`;
            },
            /*Acrescentar ponto (.) para separar casas decimais*/
            dot() {
                if (this.current.indexOf('.') === -1) {
                    this.append('.');
                }
            },
            /*Armazenar valor atual no display em variável, para posteriormente usa-la e retornar o resultado*/
            setPrevious() {
                this.previous = this.current;
                this.operatorClicked = true;
            },
            /*Armazenar function que vai calcular a divisão entre dois valores informados*/
            divide() {
                this.operator = (a, b) => a / b;
                this.setPrevious();
            },
            /*Armazenar function que vai calcular a multiplicação entre dois valores informados*/
            times() {
                this.operator = (a, b) => a * b;
                this.setPrevious();
            },
            /*Armazenar function que vai calcular a subtração entre dois valores informados*/
            minus() {
                this.operator = (a, b) => a - b;
                this.setPrevious();
            },
            /*Armazenar function que vai calcular a soma entre dois valores informados*/
            add() {
                this.operator = (a, b) => a + b;
                this.setPrevious();
            },
            /*Calcular e retornar o resultado*/
            equal() {
                if (this.previous !== null) {
                    this.current = `${this.operator(
                        parseFloat(this.previous),
                        parseFloat(this.current)
                    )}`;
                    this.previous = null;
                }
            }
        }
    }
</script>
