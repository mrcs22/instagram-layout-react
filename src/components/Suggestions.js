import SuggestionsHeader from "./SuggestionsHeader";
import SuggestedProfile from "./SuggestedProfile";

import fakeHttpClient from "../fakeHttpClient";
const suggestions = fakeHttpClient.GET("www.my-fake-something/suggestions.com");

export default function Suggestions() {
  return (
    <>
      <SuggestionsHeader />

      {suggestions.map((suggestion) => (
        <SuggestedProfile
          image={suggestion.image}
          name={suggestion.name}
          subtitle={suggestion.subtitle}
        />
      ))}
    </>
  );
}
