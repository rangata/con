<template>
  <sui-row>
    <h1>
      Конфигуратор
    </h1>
    <sui-grid style="padding-left: 51px">
      <sui-grid-row>
        <sui-card-group>
           <sui-card>
              <sui-dimmer-dimmable
                @mouseenter.native="cardOneActive = true"
                @mouseleave.native="cardOneActive = false">
                <sui-image src="http://localhost:8080/img/logo.82b9c7a5.png" />
                <sui-dimmer blurring :active="cardOneActive">
                  <sui-button inverted>Повече информация</sui-button>
                </sui-dimmer>
              </sui-dimmer-dimmable>
              <sui-card-content>
                <sui-card-header>Team Fu</sui-card-header>
                <sui-card-meta>Create in Sep 2014</sui-card-meta>
                <sui-card-description>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta totam voluptatem nesciunt laborum accusantium. Nihil doloribus repellat quisquam quas tempore, voluptate iste dolor ad ex aspernatur voluptatum ullam labore? Saepe.werwer wer wer
                </sui-card-description>
              </sui-card-content>
              <sui-card-content extra>
                  <sui-button positive fluid>
                    Конфигурирай
                  </sui-button>
              </sui-card-content>
              <sui-card-content extra>
                <sui-icon name="users" /> 2 Members
                </sui-card-content>
            </sui-card>
            <sui-card>
              <sui-dimmer-dimmable
                @mouseenter.native="cardOneActive = true"
                @mouseleave.native="cardOneActive = false">
                <sui-image src="http://localhost:8080/img/logo.82b9c7a5.png" />
                <sui-dimmer blurring :active="cardOneActive">
                  <sui-button inverted>Повече информация</sui-button>
                </sui-dimmer>
              </sui-dimmer-dimmable>
              <sui-card-content>
                <sui-card-header>Team Fu</sui-card-header>
                 <sui-card-description>
                  Lorem ipsum dolor sit amet consecteturdfdf adipisicing elit. Dicta totam voluptatem nesciunt laborum accusantium. Nihil doloribus repellat quisquam quas tempore, voluptate iste dolor ad ex aspernatur voluptatum ullam labore? Saepe.werwer wer wer
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos provident eum, soluta obcaecati et nesciunt. Iure sint ab cupiditate blanditiis ad aliquid sit tempora, est tenetur, vero debitis repellendus.
                </sui-card-description>
                <sui-card-meta>Create in Sep 2014</sui-card-meta>
              </sui-card-content>
              <sui-card-content extra>
                <sui-icon name="users" /> 2 Members
                </sui-card-content>
            </sui-card>
            <sui-card>
              <sui-dimmer-dimmable
                @mouseenter.native="cardOneActive = true"
                @mouseleave.native="cardOneActive = false">
                <sui-image src="http://localhost:8080/img/logo.82b9c7a5.png" />
                <sui-dimmer blurring :active="cardOneActive">
                  <sui-button inverted>Повече информация</sui-button>
                </sui-dimmer>
              </sui-dimmer-dimmable>
              <sui-card-content>
                <sui-card-header>Team Fu</sui-card-header>
                <sui-card-meta>Create in Sep 2014</sui-card-meta>
              </sui-card-content>
              <sui-card-content extra>
                <sui-icon name="users" /> 2 Members
                </sui-card-content>
            </sui-card>
            <sui-card>
              <sui-dimmer-dimmable
                @mouseenter.native="cardOneActive = true"
                @mouseleave.native="cardOneActive = false">
                <sui-image src="http://localhost:8080/img/logo.82b9c7a5.png" />
                <sui-dimmer blurring :active="cardOneActive">
                  <sui-button inverted>Повече информация</sui-button>
                </sui-dimmer>
              </sui-dimmer-dimmable>
              <sui-card-content>
                <sui-card-header>Team Fu</sui-card-header>
                <sui-card-meta>Create in Sep 2014</sui-card-meta>
              </sui-card-content>
              <sui-card-content extra>
                <sui-icon name="users" /> 2 Members
                </sui-card-content>
            </sui-card>

        </sui-card-group>
      </sui-grid-row>
    </sui-grid>
    fe
  </sui-row>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
   data() {
    return {
      cardOneActive: false,
      cardTwoActive: false,
    }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
