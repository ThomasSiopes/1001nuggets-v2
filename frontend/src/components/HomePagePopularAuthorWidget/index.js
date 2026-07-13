import React from "react";

import { Card, Row, Col } from "react-bootstrap";

function HomePagePopularAuthorWidget() {
    const popularAuthors = [
        {name:"Edward Abbey", realID: "Edward-Abbey"},
        {name:"Douglas Adams", realID: "Douglas-Adams"},
        {name:"Franklin P. Adams", realID: "Franklin-P-Adams"},
        {name:"Scott Adams", realID: "Scott-Adams"},
        {name:"George Ade", realID: "George-Ade"},
        {name:"Konrad Adenauer", realID: "Konrad-Adenauer"},
        {name:"Alfred Adler", realID: "Alfred-Adler"},
        {name:"Aesop", realID: "Aesop"},
        {name:"Muhammad Ali", realID: "Muhammad-Ali"},
        {name:"Fred Allen", realID: "Fred-Allen"},
        {name:"Tim Allen", realID: "Tim-Allen"},
        {name:"Robert Anthony", realID: "Robert-Anthony"},
        {name:"Mary Kay Ash", realID: "Mary-Kay-Ash"},
        {name:"Isaac Asimov", realID: "Isaac-Asimov"},
        {name:"Margaret Atwood", realID: "Margaret-Atwood"},
        {name:"Marcus Aurelius", realID: "Marcus-Aurelius"},
        {name:"Francis Bacon", realID: "Francis-Bacon"},
        {name:"James A. Baldwin", realID: "James-A-Baldwin"},
        {name:"James M. Barrie", realID: "James-M-Barrie"},
        {name:"Dave Barry", realID: "Dave-Barry"},
        {name:"Bernard Baruch", realID: "Bernard-Baruch"},
        {name:"Orlando A. Batista", realID: "Orlando-A-Batista"},
        {name:"Simone de Beauvoir", realID: "Simone-de-Beauvoir"},
        {name:"Henry Ward Beecher", realID: "Henry-Ward-Beecher"},
        {name:"Warren Bennis", realID: "Warren-Bennis"},
        {name:"Milton Berle", realID: "Milton-Berle"},
        {name:"Yogi Berra", realID: "Yogi-Berra"},
        {name:"Ambrose Bierce", realID: "Ambrose-Bierce"},
        {name:"Erma Bombeck", realID: "Erma-Bombeck"},
        {name:"Napoleon Bonaparte", realID: "Napoleon-Bonaparte"},
        {name:"Edward de Bono", realID: "Edward-de-Bono"},
        {name:"Neal Boortz", realID: "Neal-Boortz"},
        {name:"Elayne Boosler", realID: "Elayne-Boosler"},
        {name:"Christian Nestell Bovee", realID: "Christian-Nestell-Bovee"},
        {name:"Louis D. Brandeis", realID: "Louis-D-Brandeis"},
        {name:"Richard Branson", realID: "Richard-Branson"},
        {name:"Bertolt Brecht", realID: "Bertolt-Brecht"},
        {name:"David Brin", realID: "David-Brin"},
        {name:"H. Jackson Brown, Jr.", realID: "H-Jackson-Brown-Jr"},
        {name:"Rita Mae Brown", realID: "Rita-Mae-Brown"},
        {name:"Warren Buffett", realID: "Warren-Buffett"},
        {name:"Charles Bukowski", realID: "Charles-Bukowski"},
        {name:"George Burns", realID: "George-Burns"},
        {name:"Albert Camus", realID: "Albert-Camus"},
        {name:"George Carlin", realID: "George-Carlin"},
        {name:"Thomas Carlyle", realID: "Thomas-Carlyle"},
        {name:"Dale Carnegie", realID: "Dale-Carnegie"},
        {name:"Coco Chanel", realID: "Coco-Chanel"},
        {name:"Lord Chesterfield", realID: "Lord-Chesterfield"},
        {name:"G. K. Chesterton", realID: "G-K-Chesterton"},
        {name:"Noam Chomsky", realID: "Noam-Chomsky"},
        {name:"Agatha Christie", realID: "Agatha-Christie"},
        {name:"Frank A. Clark", realID: "Frank-A-Clark"},
        {name:"Arthur C. Clarke", realID: "Arthur-C-Clarke"},
        {name:"Jean Cocteau", realID: "Jean-Cocteau"},
        {name:"Paulo Coelho", realID: "Paulo-Coelho"},
        {name:"Charles Caleb Colton", realID: "Charles-Caleb-Colton"},
        {name:"Mason Cooley", realID: "Mason-Cooley"},
        {name:"Calvin Coolidge", realID: "Calvin-Coolidge"},
        {name:"Stephen Covey", realID: "Stephen-Covey"},
        {name:"Rodney Dangerfield", realID: "Rodney-Dangerfield"},
        {name:"Clarence Darrow", realID: "Clarence-Darrow"},
        {name:"Peter De Vries", realID: "Peter-De-Vries"},
        {name:"Phyllis Diller", realID: "Phyllis-Diller"},
        {name:"Benjamin Disraeli", realID: "Benjamin-Disraeli"},
        {name:"Peter Drucker", realID: "Peter-Drucker"},
        {name:"Finley Peter Dunne", realID: "Finley-Peter-Dunne"},
        {name:"Will Durant", realID: "Will-Durant"},
        {name:"Wayne Dyer", realID: "Wayne-Dyer"},
        {name:"Thomas Edison", realID: "Thomas-Edison"},
        {name:"Dwight D. Eisenhower", realID: "Dwight-D-Eisenhower"},
        {name:"T. S. Eliot", realID: "T-S-Eliot"},
        {name:"Epictetus", realID: "Epictetus"},
        {name:"Sam Ewing", realID: "Sam-Ewing"},
        {name:"William Feather", realID: "William-Feather"},
        {name:"W. C. Fields", realID: "W-C-Fields"},
        {name:"Jean de La Fontaine", realID: "Jean-de-La-Fontaine"},
        {name:"Malcolm Forbes", realID: "Malcolm-Forbes"},
        {name:"Sigmund Freud", realID: "Sigmund-Freud"},
        {name:"Milton Friedman", realID: "Milton-Friedman"},
        {name:"Erich Fromm", realID: "Erich-Fromm"},
        {name:"Robert Frost", realID: "Robert-Frost"},
        {name:"R. Buckminster Fuller", realID: "R-Buckminster-Fuller"},
        {name:"Thomas Fuller", realID: "Thomas-Fuller"},
        {name:"John Kenneth Galbraith", realID: "John-Kenneth-Galbraith"},
        {name:"Ricky Gervais", realID: "Ricky-Gervais"},
        {name:"Kahlil Gibran", realID: "Kahlil-Gibran"},
        {name:"André Gide", realID: "Andre-Gide"},
        {name:"Arnold H. Glasow", realID: "Arnold-H-Glasow"},
        {name:"Stephen Jay Gould", realID: "Stephen-Jay-Gould"},
        {name:"Baltasar Gracián", realID: "Baltasar-Gracian"},
        {name:"Sue Grafton", realID: "Sue-Grafton"},
        {name:"Robert Half", realID: "Robert-Half"},
        {name:"Mark Victor Hansen", realID: "Mark-Victor-Hansen"},
        {name:"Sydney J. Harris", realID: "Sydney-J-Harris"},
        {name:"William Hazlitt", realID: "William-Hazlitt"},
        {name:"Robert A. Heinlein", realID: "Robert-A-Heinlein"},
        {name:"Ernest Hemingway", realID: "Ernest-Hemingway"},
        {name:"George Herbert", realID: "George-Herbert"},
        {name:"Napoleon Hill", realID: "Napoleon-Hill"},
        {name:"Eric Hoffer", realID: "Eric-Hoffer"},
        {name:"Oliver Wendell Holmes, Jr.", realID: "Oliver-Wendell-Holmes-Jr"},
        {name:"Oliver Wendell Holmes, Sr.", realID: "Oliver-Wendell-Holmes-Sr"},
        {name:"Bob Hope", realID: "Bob-Hope"},
        {name:"Horace", realID: "Horace"},
        {name:"Edgar Watson Howe", realID: "Edgar-Watson-Howe"},
        {name:"Elbert Hubbard", realID: "Elbert-Hubbard"},
        {name:"Kin Hubbard", realID: "Kin-Hubbard"},
        {name:"Victor Hugo", realID: "Victor-Hugo"},
        {name:"Aldous Huxley", realID: "Aldous-Huxley"},
        {name:"Lee Iacocca", realID: "Lee-Iacocca"},
        {name:"Thomas Jefferson", realID: "Thomas-Jefferson"},
        {name:"Franklin P. Jones", realID: "Franklin-P-Jones"},
        {name:"Carl Gustav Jung", realID: "Carl-Gustav-Jung"},
        {name:"Helen Keller", realID: "Helen-Keller"},
        {name:"John F. Kennedy", realID: "John-F-Kennedy"},
        {name:"Charles F. Kettering", realID: "Charles-F-Kettering"},
        {name:"Martin Luther King, Jr.", realID: "Martin-Luther-King-Jr"},
        {name:"Henry Kissinger", realID: "Henry-Kissinger"},
        {name:"Karl Kraus", realID: "Karl-Kraus"},
        {name:"Jack LaLanne", realID: "Jack-LaLanne"},
        {name:"The 14th Dalai Lama", realID: "The-14th-Dalai-Lama"},
        {name:"Ann Landers", realID: "Ann-Landers"},
        {name:"Doug Larson", realID: "Doug-Larson"},
        {name:"Stephen Leacock", realID: "Stephen-Leacock"},
        {name:"Fran Lebowitz", realID: "Fran-Lebowitz"},
        {name:"Stanislaw Lec", realID: "Stanislaw-Lec"},
        {name:"Ursula K. Le Guin", realID: "Ursula-K-Le-Guin"},
        {name:"Jay Leno", realID: "Jay-Leno"},
        {name:"C. S. Lewis", realID: "C-S-Lewis"},
        {name:"Abraham Lincoln", realID: "Abraham-Lincoln"},
        {name:"Vince Lombardi", realID: "Vince-Lombardi"},
        {name:"Henry Wadsworth Longfellow", realID: "Henry-Wadsworth-Longfellow"},
        {name:"Bill Maher", realID: "Bill-Maher"},
        {name:"Don Marquis", realID: "Don-Marquis"},
        {name:"Groucho Marx", realID: "Groucho-Marx"},
        {name:"W. Somerset Maugham", realID: "W-Somerset-Maugham"},
        {name:"John C. Maxwell", realID: "John-C-Maxwell"},
        {name:"Mignon McLaughlin", realID: "Mignon-McLaughlin"},
        {name:"H. L. Mencken", realID: "H-L-Mencken"},
        {name:"Dennis Miller", realID: "Dennis-Miller"},
        {name:"Ashley Montagu", realID: "Ashley-Montagu"},
        {name:"Michel de Montaigne", realID: "Michel-de-Montaigne"},
        {name:"Ogden Nash", realID: "Ogden-Nash"},
        {name:"Alfred E. Neuman", realID: "Alfred-E-Neuman"},
        {name:"Friedrich Nietzsche", realID: "Friedrich-Nietzsche"},
        {name:"Anaïs Nin", realID: "Anaïs-Nin"},
        {name:"Austin O'Malley", realID: "Austin-OMalley"},
        {name:"Robert Orben", realID: "Robert-Orben"},
        {name:"P. J. O'Rourke", realID: "P-J-ORourke"},
        {name:"George Orwell", realID: "George-Orwell"},
        {name:"Ovid", realID: "Ovid"},
        {name:"Gen. George S. Patton", realID: "George-S-Patton"},
        {name:"Cesare Pavese", realID: "Cesare-Pavese"},
        {name:"Norman Vincent Peale", realID: "Norman-Vincent-Peale"},
        {name:"James Cash Penney", realID: "James-Cash-Penney"},
        {name:"H. Ross Perot", realID: "H-Ross-Perot"},
        {name:"Laurence J. Peter", realID: "Laurence-J-Peter"},
        {name:"Dr. Jordan B. Peterson", realID: "Jordan-B-Peterson"},
        {name:"Gaius Julius Phaedrus", realID: "Gaius-Julius-Phaedrus"},
        {name:"Pablo Picasso", realID: "Pablo-Picasso"},
        {name:"Sylvia Plath", realID: "Sylvia-Plath"},
        {name:"Plato", realID: "Plato"},
        {name:"Plautus", realID: "Plautus"},
        {name:"Plutarch", realID: "Plutarch"},
        {name:"Colin Powell", realID: "Colin-Powell"},
        {name:"Nitya Prakash", realID: "Nitya-Prakash"},
        {name:"Dennis Prager", realID: "Dennis-Prager"},
        {name:"Terry Pratchett", realID: "Terry-Pratchett"},
        {name:"Herbert V. Prochnow", realID: "Herbert-V-Prochnow"},
        {name:"Richard Pryor", realID: "Richard-Pryor"},
        {name:"Dave Ramsey", realID: "Dave-Ramsey"},
        {name:"Ayn Rand", realID: "Ayn-Rand"},
        {name:"Ronald Reagan", realID: "Ronald-Reagan"},
        {name:"Joan Rivers", realID: "Joan-Rivers"},
        {name:"Joe Rogan", realID: "Joe-Rogan"},
        {name:"Jim Rohn", realID: "Jim-Rohn"},
        {name:"Andy Rooney", realID: "Andy-Rooney"},
        {name:"Franklin D. Roosevelt", realID: "Franklin-D-Roosevelt"},
        {name:"Jean Rostand", realID: "Jean-Rostand"},
        {name:"Helen Rowland", realID: "Helen-Rowland"},
        {name:"J. K. Rowling", realID: "J-K-Rowling"},
        {name:"Rita Rudner", realID: "Rita-Rudner"},
        {name:"Bertrand Russell", realID: "Bertrand-Russell"},
        {name:"Carl Sagan", realID: "Carl-Sagan"},
        {name:"George Santayana", realID: "George-Santayana"},
        {name:"Jean-Paul Sartre", realID: "Jean-Paul-Sartre"},
        {name:"Friedrich Schiller", realID: "Friedrich-Schiller"},
        {name:"Arthur Schopenhauer", realID: "Arthur-Schopenhauer"},
        {name:"Robert H. Schuller", realID: "Robert-H-Schuller"},
        {name:"Charles M. Schulz", realID: "Charles-M-Schulz"},
        {name:"Albert Schweitzer", realID: "Albert-Schweitzer"},
        {name:"Jerry Seinfeld", realID: "Jerry-Seinfeld"},
        {name:"Seneca", realID: "Seneca"},
        {name:"Peter Senge", realID: "Peter-Senge"},
        {name:"Logan Pearsall Smith", realID: "Logan-Pearsall-Smith"},
        {name:"Aleksandr Solzhenitsyn", realID: "Aleksandr-Solzhenitsyn"},
        {name:"Sophocles", realID: "Sophocles"},
        {name:"Kevin Sorbo", realID: "Kevin-Sorbo"},
        {name:"Dr. Thomas Sowell", realID: "Thomas-Sowell"},
        {name:"Charles H. Spurgeon", realID: "Charles-H-Spurgeon"},
        {name:"Gertrude Stein", realID: "Gertrude-Stein"},
        {name:"John Steinbeck", realID: "John-Steinbeck"},
        {name:"Gloria Steinem", realID: "Gloria-Steinem"},
        {name:"Adlai Stevenson", realID: "Adlai-Stevenson"},
        {name:"Jonathan Swift", realID: "Jonathan-Swift"},
        {name:"Publilius Syrus", realID: "Publilius-Syrus"},
        {name:"Thomas Szasz", realID: "Thomas-Szasz"},
        {name:"The Talmud", realID: "The-Talmud"},
        {name:"Mother Teresa", realID: "Mother-Teresa"},
        {name:"Margaret Thatcher", realID: "Margaret-Thatcher"},
        {name:"Twyla Tharp", realID: "Twyla-Tharp"},
        {name:"Henry David Thoreau", realID: "Henry-David-Thoreau"},
        {name:"James Thurber", realID: "James-Thurber"},
        {name:"Lily Tomlin", realID: "Lily-Tomlin"},
        {name:"Robert Townsend", realID: "Robert-Townsend"},
        {name:"Brian Tracy", realID: "Brian-Tracy"},
        {name:"Harry S. Truman", realID: "Harry-S-Truman"},
        {name:"Donald Trump", realID: "Donald-Trump"},
        {name:"Lao Tzu", realID: "Lao-Tzu"},
        {name:"Sun Tzu", realID: "Sun-Tzu"},
        {name:"Miguel de Unamuno", realID: "Miguel-de-Unamuno"},
        {name:"Peter Ustinov", realID: "Peter-Ustinov"},
        {name:"Lani Lynn Vale", realID: "Lani-Lynn-Vale"},
        {name:"Paul Valéry", realID: "Paul-Valéry"},
        {name:"Abigail Van Buren", realID: "Abigail-Van-Buren"},
        {name:"Bill Vaughan", realID: "Bill-Vaughan"},
        {name:"Gore Vidal", realID: "Gore-Vidal"},
        {name:"Leonardo da Vinci", realID: "Leonardo-da-Vinci"},
        {name:"Voltaire", realID: "Voltaire"},
        {name:"Ludwig von Mises", realID: "Ludwig-von-Mises"},
        {name:"Kurt Vonnegut", realID: "Kurt-Vonnegut"},
        {name:"Denis Waitley", realID: "Denis-Waitley"},
        {name:"David Foster Wallace", realID: "David-Foster-Wallace"},
        {name:"Sam Walton", realID: "Sam-Walton"},
        {name:"William Arthur Ward", realID: "William-Arthur-Ward"},
        {name:"Bill Watterson", realID: "Bill-Watterson"},
        {name:"Jack Welch", realID: "Jack-Welch"},
        {name:"H. G. Wells", realID: "H-G-Wells"},
        {name:"Mae West", realID: "Mae-West"},
        {name:"E. B. White", realID: "E-B-White"},
        {name:"Alfred North Whitehead", realID: "Alfred-North-Whitehead"},
        {name:"Katharine Whitehorn", realID: "Katharine-Whitehorn"},
        {name:"Edward Wigglesworth", realID: "Edward-Wigglesworth"},
        {name:"George F. Will", realID: "George-F-Will"},
        {name:"Robin Williams", realID: "Robin-Williams"},
        {name:"Earl Wilson", realID: "Earl-Wilson"},
        {name:"Robert Anton Wilson", realID: "Robert-Anton-Wilson"},
        {name:"Tom Wilson", realID: "Tom-Wilson"},
        {name:"Woodrow Wilson", realID: "Woodrow-Wilson"},
        {name:"Ludwig Wittgenstein", realID: "Ludwig-Wittgenstein"},
        {name:"Virginia Woolf", realID: "Virginia-Woolf"},
        {name:"Steven Wright", realID: "Steven-Wright"},
        {name:"Henny Youngman", realID: "Henny-Youngman"},
        {name:"Lin Yutang", realID: "Lin-Yutang"},
        {name:"Zig Ziglar", realID: "Zig-Ziglar"},
    ]

    const listLength = popularAuthors.length;

    const chunk = listLength / 12;

    const list1 = popularAuthors.slice(0, chunk);
    const list2 = popularAuthors.slice(chunk, 2 * chunk);
    const list3 = popularAuthors.slice(2 * chunk, 3 * chunk);
    const list4 = popularAuthors.slice(3 * chunk, 4 * chunk);
    const list5 = popularAuthors.slice(4 * chunk, 5 * chunk);
    const list6 = popularAuthors.slice(5 * chunk, 6 * chunk);
    const list7 = popularAuthors.slice(6 * chunk, 7 * chunk);
    const list8 = popularAuthors.slice(7 * chunk, 8 * chunk);
    const list9 = popularAuthors.slice(8 * chunk, 9 * chunk);
    const list10 = popularAuthors.slice(9 * chunk, 10 * chunk);
    const list11 = popularAuthors.slice(10 * chunk, 11 * chunk);
    const list12 = popularAuthors.slice(11 * chunk, 12 * chunk);

    return (
        <Card className="my-4">
            <Card.Body>
                <Card.Text>
                    For more inspirational and motivational quotes, explore our collection of popular authors:
                </Card.Text>
                
                {/* Small View */}
                <Row className="d-flex d-md-none">
                    <Col xs={6}>
                        {list1.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list2.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list3.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list4.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list5.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list6.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                    </Col>
                    <Col xs={6}>
                        {list7.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list8.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list9.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list10.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list11.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list12.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                    </Col>
                </Row>

                {/* Medium View */}
                <Row className="d-none d-md-flex d-lg-none">
                    <Col md={4}>
                        {list1.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list2.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list3.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list4.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                    </Col>
                    <Col md={4}>
                        {list5.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list6.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list7.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list8.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                    </Col>
                    <Col md={4}>
                        {list9.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list10.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list11.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list12.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                    </Col>
                </Row>

                {/* Large View */}
                <Row className="d-none d-lg-flex">
                    <Col lg={3}>
                        {list1.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list2.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list3.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                    </Col>
                    <Col lg={3}>
                        {list4.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list5.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list6.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                    </Col>
                    <Col lg={3}>
                        {list7.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list8.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list9.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                    </Col>
                    <Col lg={3}>
                        {list10.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list11.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                        {list12.map((author, index) => (
                            <p className="mb-1" key={index}><a href={`/author/${author.realID}`}>{author.name}</a></p>
                        ))}
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default HomePagePopularAuthorWidget;