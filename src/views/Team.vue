<template>
  <div class="team">
    <v-container class="my-5">
      <v-row wrap>
        <v-col xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="ma-3">
            <v-responsive class="pt-4">
              <div class="text-center">
                <v-avatar size="150">
                  <img :src="person.url" alt="avatar" />
                </v-avatar>
              </div>
            </v-responsive>
            <v-card-text class="text-center">
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-row justify="center">
                <v-btn small depressed color="grey lighten-3">
                  <v-icon small left>message</v-icon>
                  <span class="caption grey--text">Message</span>
                </v-btn>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "Miheer",
          role: "Web developer, ESE",
          url: "https://media.licdn.com/dms/image/C4E03AQF7QMnOujNEoA/profile-displayphoto-shrink_200_200/0?e=1579737600&v=beta&t=6NiV-oNISAVzsh_gU8UpJTijSvGgsYz28TIGwWTvEH8"
        },
        {
          name: "Pankaj",
          role: "Web designer, SSE",
          url: "https://media.licdn.com/dms/image/C5103AQF2RIwuFkcRoA/profile-displayphoto-shrink_200_200/0?e=1579737600&v=beta&t=anPvPDxOW_0whi_PHBaS2CsfevBDRMpqNdjwxNXArnI"
        },
          {
          name: "Riyaj",
          role: "Web developer, ASE",
          url:  "https://media.licdn.com/dms/image/C5103AQHt58Z8_USVYw/profile-displayphoto-shrink_200_200/0?e=1580947200&v=beta&t=gQouL5D6LPM9Hs2JB41pkPJLgesu-dujmk27Q-FUt90"
        }
      ]
    };
  }
};
</script>

<style>
</style>