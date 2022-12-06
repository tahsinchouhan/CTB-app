import * as React from 'react';
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg';

const ArrowRightIcon = () => (
  <Svg
    width={12}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink">
    <Path fill="url(#a)" d="M0 0h24v24H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use xlinkHref="#b" transform="scale(.04167)" />
      </Pattern>
      <Image
        id="b"
        width={12}
        height={12}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACVUlEQVRIia2UzU4TURTH/507MJ3vaUkmAVbseQcfgI+60ggVNfEVfBE3LrswcaGJD+DGN1ATQGIhLAR0w1empZTO3PN3w5hKpnSgnuRuTm5+v3PO/aigIBYXFx8rpV6LCK+url612+23RfvKhCpKzs/PfyYZi4hnGMZqEAS/z87OvtxHYBQlRSQjCZLQWiul1JuFhYWX9xEUdlCv1w8Nw3goIoaIgKRBcsl13aMkSb5OLDg+Pt6u1Wr7lUpldVgCYMl13V+dTqf0uAoFAHBycrIZRdE+gNWbnVSr1aNer1eqk5ECADg9Pd0MgmAPQOOmxLKsw8vLy7GSWwUAcH5+vuX7/h7JxjUcImKQXLYs67Df798qGSsAgCRJtjzP2wXQ0FqrXCIiy6ZpHqRp+m0iAQB0Op0tx3HaJBsi8o9EKfUzy7JCSWkBAFxcXGw7jrMrIjclKwB2SH6/C29khGH4yPf9geu6rFarnJqaomEYB0V7C1/yuBARm2R+q/KlJyv7OqIoeu77fjZcvVJqAGBlYnitVlsPwzD1PI+2bdOyLJqmmQF48l/gURSlQRAwr356ejpTSq1NDJ+ZmWnW6/U0DEN6nkfHcWhZVin42EOO47gJoCUiZn6gIqJJbmit300kiOO4KSItkuY1GCS1iGwMBoOx8FsFs7OzTwH8hedXUUSelYUDgFmUnJubW9Nat0iqocpTEVnv9/sfysKBEV+F67qfSAb5QxKRlGSz1+vdCQ6MHlE2NJZURJrdbvf9XeHAiA5s2/5B8oGIJFrrF91u9+N94ADwBypzmtE9N0VqAAAAAElFTkSuQmCC"
      />
    </Defs>
  </Svg>
);

export default ArrowRightIcon;
