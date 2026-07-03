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
        {name:"Muhammad Ali", realID: "MuhammadAli"},
        {name:"Fred Allen", realID: "Fred-Allen"},
        {name:"Tim Allen", realID: "TimAllen"},
        {name:"Robert Anthony", realID: "RobertAnthony"},
        {name:"Mary Kay Ash", realID: "MaryKayAsh"},
        {name:"Isaac Asimov", realID: "IsaacAsimov"},
        {name:"Margaret Atwood", realID: "MargaretAtwood"},
        {name:"Marcus Aurelius", realID: "Marcus-Aurelius"},
        {name:"Francis Bacon", realID: "Francis-Bacon"},
        {name:"James A. Baldwin", realID: "JamesABaldwin"},
        {name:"James M. Barrie", realID: "JamesMBarrie"},
        {name:"Dave Barry", realID: "DaveBarry"},
        {name:"Bernard Baruch", realID: "BernardBaruch"},
        {name:"Orlando A. Batista", realID: "OrlandoABatista"},
        {name:"Simone de Beauvoir", realID: "Simone-de-Beauvoir"},
        {name:"Henry Ward Beecher", realID: "Henry-Ward-Beecher"},
        {name:"Warren Bennis", realID: "WarrenBennis"},
        {name:"Milton Berle", realID: "MiltonBerle"},
        {name:"Yogi Berra", realID: "YogiBerra"},
        {name:"Ambrose Bierce", realID: "Ambrose-Bierce"},
        {name:"Erma Bombeck", realID: "Erma-Bombeck"},
        {name:"Napoleon Bonaparte", realID: "NapoleonBonaparte"},
        {name:"Edward de Bono", realID: "EdwarddeBono"},
        {name:"Neal Boortz", realID: "NealBoortz"},
        {name:"Elayne Boosler", realID: "ElayneBoosler"},
        {name:"Christian Nestell Bovee", realID: "ChristianNestellBovee"},
        {name:"Louis D. Brandeis", realID: "Louis-D-Brandeis"},
        {name:"Richard Branson", realID: "Richard-Branson"},
        {name:"Bertolt Brecht", realID: "Bertolt-Brecht"},
        {name:"David Brin", realID: "David-Brin"},
        {name:"H. Jackson Brown, Jr.", realID: "HJacksonBrownJr"},
        {name:"Rita Mae Brown", realID: "RitaMaeBrown"},
        {name:"Warren Buffett", realID: "Warren-Buffett"},
        {name:"Charles Bukowski", realID: "Charles-Bukowski"},
        {name:"George Burns", realID: "GeorgeBurns"},
        {name:"Albert Camus", realID: "AlbertCamus"},
        {name:"George Carlin", realID: "George-Carlin"},
        {name:"Thomas Carlyle", realID: "Thomas-Carlyle"},
        {name:"Dale Carnegie", realID: "DaleCarnegie"},
        {name:"Coco Chanel", realID: "CocoChanel"},
        {name:"Lord Chesterfield", realID: "Lord-Chesterfield"},
        {name:"G. K. Chesterton", realID: "G-K-Chesterton"},
        {name:"Noam Chomsky", realID: "Noam-Chomsky"},
        {name:"Agatha Christie", realID: "Agatha-Christie"},
        {name:"Frank A. Clark", realID: "Frank-A-Clark"},
        {name:"Arthur C. Clarke", realID: "Arthur-C-Clarke"},
        {name:"Jean Cocteau", realID: "JeanCocteau"},
        {name:"Paulo Coelho", realID: "PauloCoelho"},
        {name:"Charles Caleb Colton", realID: "CharlesCalebColton"},
        {name:"Mason Cooley", realID: "MasonCooley"},
        {name:"Calvin Coolidge", realID: "Calvin-Coolidge"},
        {name:"Stephen Covey", realID: "StephenCovey"},
        {name:"Rodney Dangerfield", realID: "Rodney-Dangerfield"},
        {name:"Clarence Darrow", realID: "ClarenceDarrow"},
        {name:"Peter De Vries", realID: "PeterDeVries"},
        {name:"Phyllis Diller", realID: "PhyllisDiller"},
        {name:"Benjamin Disraeli", realID: "Benjamin-Disraeli"},
        {name:"Peter Drucker", realID: "PeterDrucker"},
        {name:"Finley Peter Dunne", realID: "FinleyPeterDunne"},
        {name:"Will Durant", realID: "WillDurant"},
        {name:"Wayne Dyer", realID: "WayneDyer"},
        {name:"Thomas Edison", realID: "ThomasEdison"},
        {name:"Dwight D. Eisenhower", realID: "Dwight-D-Eisenhower"},
        {name:"T. S. Eliot", realID: "T-S-Eliot"},
        {name:"Epictetus", realID: "Epictetus"},
        {name:"Sam Ewing", realID: "SamEwing"},
        {name:"William Feather", realID: "WilliamFeather"},
        {name:"W. C. Fields", realID: "W-C-Fields"},
        {name:"Jean de La Fontaine", realID: "Jean-De-La-Fontaine"},
        {name:"Malcolm Forbes", realID: "Malcolm-Forbes"},
        {name:"Sigmund Freud", realID: "SigmundFreud"},
        {name:"Milton Friedman", realID: "MiltonFriedman"},
        {name:"Erich Fromm", realID: "ErichFromm"},
        {name:"Robert Frost", realID: "RobertFrost"},
        {name:"R. Buckminster Fuller", realID: "RBuckminsterFuller"},
        {name:"Thomas Fuller", realID: "ThomasFuller"},
        {name:"John Kenneth Galbraith", realID: "JohnKennethGalbraith"},
        {name:"Ricky Gervais", realID: "RickyGervais"},
        {name:"Kahlil Gibran", realID: "Kahlil-Gibran"},
        {name:"André Gide", realID: "AndreGide"},
        {name:"Arnold H. Glasow", realID: "Arnold-H-Glasow"},
        {name:"Stephen Jay Gould", realID: "StephenJayGould"},
        {name:"Baltasar Gracián", realID: "BaltasarGracian"},
        {name:"Sue Grafton", realID: "SueGrafton"},
        {name:"Robert Half", realID: "RobertHalf"},
        {name:"Mark Victor Hansen", realID: "MarkVictorHansen"},
        {name:"Sydney J. Harris", realID: "SydneyJHarris"},
        {name:"William Hazlitt", realID: "William-Hazlitt"},
        {name:"Robert A. Heinlein", realID: "RobertAHeinlein"},
        {name:"Ernest Hemingway", realID: "Ernest-Hemingway"},
        {name:"George Herbert", realID: "GeorgeHerbert"},
        {name:"Napoleon Hill", realID: "NapoleonHill"},
        {name:"Eric Hoffer", realID: "EricHoffer"},
        {name:"Oliver Wendell Holmes, Jr.", realID: "OliverWendellHolmesJr"},
        {name:"Oliver Wendell Holmes, Sr.", realID: "OliverWendellHolmesSr"},
        {name:"Bob Hope", realID: "BobHope"},
        {name:"Horace", realID: "Horace"},
        {name:"Edgar Watson Howe", realID: "EdgarWatsonHowe"},
        {name:"Elbert Hubbard", realID: "ElbertHubbard"},
        {name:"Kin Hubbard", realID: "KinHubbard"},
        {name:"Victor Hugo", realID: "VictorHugo"},
        {name:"Aldous Huxley", realID: "AldousHuxley"},
        {name:"Lee Iacocca", realID: "LeeIacocca"},
        {name:"Thomas Jefferson", realID: "ThomasJefferson"},
        {name:"Franklin P. Jones", realID: "Franklin-P-Jones"},
        {name:"Carl Gustav Jung", realID: "CarlGustavJung"},
        {name:"Helen Keller", realID: "HelenKeller"},
        {name:"John F. Kennedy", realID: "JohnFKennedy"},
        {name:"Charles F. Kettering", realID: "CharlesFKettering"},
        {name:"Martin Luther King, Jr.", realID: "MartinLutherKingJr"},
        {name:"Henry Kissinger", realID: "HenryKissinger"},
        {name:"Karl Kraus", realID: "KarlKraus"},
        {name:"Jack LaLanne", realID: "JackLaLanne"},
        {name:"The 14th Dalai Lama", realID: "The-14th-Dalai-Lama"},
        {name:"Ann Landers", realID: "AnnLanders"},
        {name:"Doug Larson", realID: "DougLarson"},
        {name:"Stephen Leacock", realID: "StephenLeacock"},
        {name:"Fran Lebowitz", realID: "FranLebowitz"},
        {name:"Stanislaw Lec", realID: "StanislawLec"},
        {name:"Ursula K. Le Guin", realID: "UrsulaKLeGuin"},
        {name:"Jay Leno", realID: "JayLeno"},
        {name:"C. S. Lewis", realID: "CSLewis"},
        {name:"Abraham Lincoln", realID: "Abraham-Lincoln"},
        {name:"Vince Lombardi", realID: "VinceLombardi"},
        {name:"Henry Wadsworth Longfellow", realID: "HenryWadsworthLongfellow"},
        {name:"Bill Maher", realID: "BillMaher"},
        {name:"Don Marquis", realID: "Don-Marquis"},
        {name:"Groucho Marx", realID: "GrouchoMarx"},
        {name:"W. Somerset Maugham", realID: "WSomersetMaugham"},
        {name:"John C. Maxwell", realID: "JohnCMaxwell"},
        {name:"Mignon McLaughlin", realID: "MignonMcLaughlin"},
        {name:"H. L. Mencken", realID: "H-L-Mencken"},
        {name:"Dennis Miller", realID: "Dennis-Miller"},
        {name:"Ashley Montagu", realID: "Ashley-Montagu"},
        {name:"Michel de Montaigne", realID: "Michel-de-Montaigne"},
        {name:"Ogden Nash", realID: "OgdenNash"},
        {name:"Alfred E. Neuman", realID: "AlfredENeuman"},
        {name:"Friedrich Nietzsche", realID: "FriedrichNietzsche"},
        {name:"Anaïs Nin", realID: "AnaisNin"},
        {name:"Austin O'Malley", realID: "Austin-OMalley"},
        {name:"Robert Orben", realID: "RobertOrben"},
        {name:"P. J. O'Rourke", realID: "PJORourke"},
        {name:"George Orwell", realID: "George-Orwell"},
        {name:"Ovid", realID: "Ovid"},
        {name:"Gen. George S. Patton", realID: "GeorgeSPatton"},
        {name:"Cesare Pavese", realID: "CesarePavese"},
        {name:"Norman Vincent Peale", realID: "NormanVincentPeale"},
        {name:"James Cash Penney", realID: "JamesCashPenney"},
        {name:"H. Ross Perot", realID: "HRossPerot"},
        {name:"Laurence J. Peter", realID: "LaurenceJPeter"},
        {name:"Dr. Jordan B. Peterson", realID: "JordanBPeterson"},
        {name:"Gaius Julius Phaedrus", realID: "Gaius-Julius-Phaedrus"},
        {name:"Pablo Picasso", realID: "PabloPicasso"},
        {name:"Sylvia Plath", realID: "SylviaPlath"},
        {name:"Plato", realID: "Plato"},
        {name:"Plautus", realID: "Plautus"},
        {name:"Plutarch", realID: "Plutarch"},
        {name:"Colin Powell", realID: "Colin-Powell"},
        {name:"Nitya Prakash", realID: "Nitya-Prakash"},
        {name:"Dennis Prager", realID: "Dennis-Prager"},
        {name:"Terry Pratchett", realID: "Terry-Pratchett"},
        {name:"Herbert V. Prochnow", realID: "Herbert-V-Prochnow"},
        {name:"Richard Pryor", realID: "Richard-Pryor"},
        {name:"Dave Ramsey", realID: "DaveRamsey"},
        {name:"Ayn Rand", realID: "AynRand"},
        {name:"Ronald Reagan", realID: "RonaldReagan"},
        {name:"Joan Rivers", realID: "JoanRivers"},
        {name:"Joe Rogan", realID: "Joe-Rogan"},
        {name:"Jim Rohn", realID: "JimRohn"},
        {name:"Andy Rooney", realID: "AndyRooney"},
        {name:"Franklin D. Roosevelt", realID: "FranklinDRoosevelt"},
        {name:"Jean Rostand", realID: "JeanRostand"},
        {name:"Helen Rowland", realID: "HelenRowland"},
        {name:"J. K. Rowling", realID: "JKRowling"},
        {name:"Rita Rudner", realID: "RitaRudner"},
        {name:"Bertrand Russell", realID: "BertrandRussell"},
        {name:"Carl Sagan", realID: "CarlSagan"},
        {name:"George Santayana", realID: "GeorgeSantayana"},
        {name:"Jean-Paul Sartre", realID: "JeanPaulSartre"},
        {name:"Friedrich Schiller", realID: "Friedrich-Schiller"},
        {name:"Arthur Schopenhauer", realID: "Arthur-Schopenhauer"},
        {name:"Robert H. Schuller", realID: "RobertHSchuller"},
        {name:"Charles M. Schulz", realID: "Charles-M-Schulz"},
        {name:"Albert Schweitzer", realID: "AlbertSchweitzer"},
        {name:"Jerry Seinfeld", realID: "JerrySeinfeld"},
        {name:"Seneca", realID: "Seneca"},
        {name:"Peter Senge", realID: "PeterSenge"},
        {name:"Logan Pearsall Smith", realID: "LoganPearsallSmith"},
        {name:"Aleksandr Solzhenitsyn", realID: "AleksandrSolzhenitsyn"},
        {name:"Sophocles", realID: "Sophocles"},
        {name:"Kevin Sorbo", realID: "KevinSorbo"},
        {name:"Dr. Thomas Sowell", realID: "ThomasSowell"},
        {name:"Charles H. Spurgeon", realID: "CharlesHSpurgeon"},
        {name:"Gertrude Stein", realID: "GertrudeStein"},
        {name:"John Steinbeck", realID: "JohnSteinbeck"},
        {name:"Gloria Steinem", realID: "GloriaSteinem"},
        {name:"Adlai Stevenson", realID: "AdlaiStevenson"},
        {name:"Jonathan Swift", realID: "Jonathan-Swift"},
        {name:"Publilius Syrus", realID: "Publilius-Syrus"},
        {name:"Thomas Szasz", realID: "ThomasSzasz"},
        {name:"The Talmud", realID: "The-Talmud"},
        {name:"Mother Teresa", realID: "MotherTeresa"},
        {name:"Margaret Thatcher", realID: "Margaret-Thatcher"},
        {name:"Twyla Tharp", realID: "Twyla-Tharp"},
        {name:"Henry David Thoreau", realID: "Henry-David-Thoreau"},
        {name:"James Thurber", realID: "James-Thurber"},
        {name:"Lily Tomlin", realID: "LilyTomlin"},
        {name:"Robert Townsend", realID: "RobertTownsend"},
        {name:"Brian Tracy", realID: "BrianTracy"},
        {name:"Harry S. Truman", realID: "Harry-S-Truman"},
        {name:"Donald Trump", realID: "Donald-Trump"},
        {name:"Lao Tzu", realID: "Lao-Tzu"},
        {name:"Sun Tzu", realID: "Sun-Tzu"},
        {name:"Miguel de Unamuno", realID: "MigueldeUnamuno"},
        {name:"Peter Ustinov", realID: "PeterUstinov"},
        {name:"Lani Lynn Vale", realID: "LaniLynnVale"},
        {name:"Paul Valéry", realID: "PaulValery"},
        {name:"Abigail Van Buren", realID: "AbigailVanBuren"},
        {name:"Bill Vaughan", realID: "BillVaughan"},
        {name:"Gore Vidal", realID: "Gore-Vidal"},
        {name:"Leonardo da Vinci", realID: "Leonardo-da-Vinci"},
        {name:"Voltaire", realID: "Voltaire"},
        {name:"Ludwig von Mises", realID: "Ludwig-von-Mises"},
        {name:"Kurt Vonnegut", realID: "Kurt-Vonnegut"},
        {name:"Denis Waitley", realID: "DenisWaitley"},
        {name:"David Foster Wallace", realID: "DavidFosterWallace"},
        {name:"Sam Walton", realID: "SamWalton"},
        {name:"William Arthur Ward", realID: "WilliamArthurWard"},
        {name:"Bill Watterson", realID: "Bill-Watterson"},
        {name:"Jack Welch", realID: "JackWelch"},
        {name:"H. G. Wells", realID: "HGWells"},
        {name:"Mae West", realID: "MaeWest"},
        {name:"E. B. White", realID: "EBWhite"},
        {name:"Alfred North Whitehead", realID: "Alfred-North-Whitehead"},
        {name:"Katharine Whitehorn", realID: "Katharine-Whitehorn"},
        {name:"Edward Wigglesworth", realID: "Edward-Wigglesworth"},
        {name:"George F. Will", realID: "GeorgeFWill"},
        {name:"Robin Williams", realID: "RobinWilliams"},
        {name:"Earl Wilson", realID: "EarlWilson"},
        {name:"Robert Anton Wilson", realID: "RobertAntonWilson"},
        {name:"Tom Wilson", realID: "TomWilson"},
        {name:"Woodrow Wilson", realID: "WoodrowWilson"},
        {name:"Ludwig Wittgenstein", realID: "LudwigWittgenstein"},
        {name:"Virginia Woolf", realID: "VirginiaWoolf"},
        {name:"Steven Wright", realID: "StevenWright"},
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
                    Explore popular authors and discover their quotes in the 1001 Nuggets collection.
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